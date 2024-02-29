require('dotenv').config();
const express = require('express');
const cors = require('cors'); // Import CORS module
const fs = require('fs');
const path = require('path');
const nodeSchedule = require('node-schedule');

const app = express();
const PORT = process.env.PORT || 3000;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const imagesDir = path.join(__dirname, 'images');

// Ensure the images directory exists
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir);
}

app.use(cors()); // Enable CORS for all routes
app.use(express.json());
app.use('/images', express.static(imagesDir)); // Serve images

app.post('/generate-image', async (req, res) => {
    const prompt = req.body.prompt;
    if (!prompt) {
        return res.status(400).send({ error: 'Prompt is required.' });
    }

    // Dynamic import for fetch to work with ESM modules in CommonJS
    const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

    try {
        const response = await fetch('https://api.openai.com/v1/images/generations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: "dall-e-3",
                prompt: prompt,
                size: "1024x1024",
                quality: "standard",
                n: 1,
            }),
        });

        const data = await response.json();
        if (data.data && data.data.length > 0) {
            const imageUrl = data.data[0].url;
            const imageResponse = await fetch(imageUrl);
            const buffer = await imageResponse.buffer();
            const fileName = `image-${Date.now()}.png`;
            const filePath = path.join(imagesDir, fileName);
            fs.writeFileSync(filePath, buffer);

            // Schedule deletion in 30 minutes
            nodeSchedule.scheduleJob(new Date(Date.now() + 30 * 60000), function() {
                fs.unlinkSync(filePath);
            });

            res.send({ imageUrl: `http://165.22.175.90/images/${fileName}` });
        } else {
            throw new Error('Failed to generate image');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


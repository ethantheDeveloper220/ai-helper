const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Replace with Hugging Face or OpenAI API endpoint and key
const huggingFaceAPIUrl = 'https://huggingface.co/google/gemma-2-2b-it';
const openAIAPIUrl = 'https://djfhg-google-gemma-2-2b-it.hf.space/?__theme=dark';
const openAIAPIKey = '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'; // Set your OpenAI API Key here

// POST endpoint to generate text
app.post('/generate-text', async (req, res) => {
    const { prompt } = req.body;

    // Example with Hugging Face
    try {
        const response = await axios.post(huggingFaceAPIUrl, {
            inputs: prompt,
        }, {
            headers: {
                Authorization: `Bearer your_huggingface_api_key`,
            }
        });
        res.json({ generated_text: response.data[0].generated_text });
    } catch (error) {
        console.error('Error generating text:', error);
        res.status(500).json({ error: 'Failed to generate text' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

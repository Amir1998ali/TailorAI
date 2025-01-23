const express = require("express");
const axios = require("axios");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config({ path: "../.env" });

dotenv.config();
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/api/tailor-resume", async (req, res) => {
    const { resume, jobDescription } = req.body;

    if (!resume || !jobDescription) {
        return res.status(400).json({ error: "Resume and job description are required" });
    }

    try {
        const response = await axios.post("https://api.openai.com/v1/chat/completions", {
            model: "gpt-4",
            messages: [
                { role: "system", content: "You are an expert in tailoring resumes to job descriptions." },
                { role: "user", content: `Here is the resume: ${resume}. Tailor it for the following job description: ${jobDescription}.` }
            ],
        }, {
            headers: {
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                "Content-Type": "application/json"
            }
        });

        const tailoredResume = response.data.choices[0].message.content;
        res.json({ tailoredResume });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to process the request" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

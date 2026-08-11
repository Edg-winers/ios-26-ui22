import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Lazy Gemini AI initialization helper
  let aiClient: GoogleGenAI | null = null;
  function getAi() {
    if (!aiClient) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
        aiClient = new GoogleGenAI({ apiKey });
      }
    }
    return aiClient;
  }

  // API Route: AI Assistant
  app.post('/api/ai-chat', async (req, res) => {
    try {
      const { prompt } = req.body;
      if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
      }

      const ai = getAi();
      if (!ai) {
        return res.json({
          reply: `Muhammad Auwal Abubakar is a Senior Web Developer with 2 years of experience skilled in React, TypeScript, Node.js, Express, UI/UX design, and Adobe Creative Suite. (Note: Set GEMINI_API_KEY in Secrets for live Gemini model answers).`,
        });
      }

      const systemInstruction = `You are the AI Assistant for Muhammad Auwal Abubakar's portfolio.
Muhammad is a Senior Web Developer from Jigawa State, Nigeria.
Key facts:
- Title: Senior Web Developer & UI/UX Specialist
- Work: Software Operator & Web Developer @ KowaGuru Technology Limited (2025–2026)
- Education: Diploma in Computer Engineering Technology at Jigawa State Polytechnic Dutse (2024–2026), SSCE Science at Al-Hikmah International School Birnin Kudu (2022–2024)
- Awards: Certificate of Award for Best Sport Graphic Designer - BICA Nigeria (2024)
- Skills: Front-end (React, TypeScript, Next.js, Tailwind CSS), Back-end (Node.js, Express, REST APIs), UI/UX design, Adobe Suite (Photoshop, Illustrator, Premiere Pro), Videography, Content Strategy.
- GitHub: https://github.com/Muhammadumma
- Email: muhammadbindaddy@gmail.com
- Phone: +234 7067962658 / +234 8137834828

Answer concisely, professionally, and accurately based on Muhammad's authentic credentials.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          { role: 'user', parts: [{ text: `${systemInstruction}\n\nUser Question: ${prompt}` }] }
        ],
      });

      const replyText = response.text || "I am glad to share details about Muhammad's portfolio!";
      res.json({ reply: replyText });
    } catch (err: any) {
      console.error('Error in /api/ai-chat:', err);
      res.json({
        reply: `Muhammad Auwal Abubakar is a Senior Web Developer at KowaGuru Tech Ltd, proficient in React, TypeScript, Node.js, and UI/UX design. Reach out via muhammadbindaddy@gmail.com.`,
      });
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

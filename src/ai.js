import { GoogleGenerativeAI } from "@google/generative-ai";

console.log("Gemini key starts with:", import.meta.env.VITE_GEMINI_API_KEY?.slice(0,10));
// Initialize Gemini with your Vite env key
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function generatePitch(idea) {
    // ✅ use the latest model for v1 API
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

    const prompt = `
You are an expert startup mentor. Given this startup idea: "${idea}"
Generate a response in JSON only, following this exact structure:
{
  "name": "Startup Name",
  "tagline": "Short catchy tagline",
  "pitch": "2-3 line elevator pitch"
}
`;

    // ✅ this uses v1 endpoint under the hood now
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    try {
        const data = JSON.parse(text);
        return data;
    } catch (e) {
        console.error("AI returned unexpected format:", text);
        return { name: "Unknown", tagline: "N/A", pitch: text };
    }
}

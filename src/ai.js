console.log(
    "Cohere key starts with:",
    import.meta.env.VITE_COHERE_API_KEY?.slice(0, 10)
);

export async function generatePitch(idea) {
    const userPrompt = `
You are an expert startup mentor. Given this startup idea: "${idea}"
Generate a response in pure JSON only, following this exact structure:
{
  "name": "Startup Name",
  "tagline": "Short catchy tagline",
  "pitch": "2-3 line elevator pitch"
}
`;

    try {
        const response = await fetch("https://api.cohere.ai/v1/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_COHERE_API_KEY}`,
            },
            body: JSON.stringify({
                model: "command-r-plus-08-2024",
                message: userPrompt,
                temperature: 0.7,
            }),
        });

        const data = await response.json();
        console.log("✅ Cohere response:", data);

        // Extract text from response
        const text = data?.text?.trim() || "";

        // Parse JSON safely
        try {
            return JSON.parse(text);
        } catch {
            console.warn("⚠️ Cohere returned non-JSON text:", text);
            return { name: "Unknown", tagline: "N/A", pitch: text };
        }
    } catch (err) {
        console.error("❌ Cohere API error:", err);
        return {
            name: "Error",
            tagline: "N/A",
            pitch: "Failed to generate pitch.",
        };
    }
}

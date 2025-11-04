import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generatePitch } from "../ai"; 

export default function Create() {
    const [idea, setIdea] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleGenerate = async () => {
        if (!idea.trim()) {
            alert("Please enter your startup idea first!");
            return;
        }

        setLoading(true);
        try {
            // Call Gemini API (from ai.js)
            const result = await generatePitch(idea);
            navigate("/result", { state: result });
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Try again!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto py-10">
            <h2 className="text-2xl font-semibold mb-4 text-center">
                Describe your startup idea 💡
            </h2>

            <textarea
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. An app that connects students with mentors..."
                rows="5"
            />

            <button
                onClick={handleGenerate}
                disabled={loading}
                className={`mt-4 w-full py-2 rounded-lg text-white transition ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
                    }`}
            >
                {loading ? "Generating..." : "Generate Pitch"}
            </button>
        </div>
    );
}

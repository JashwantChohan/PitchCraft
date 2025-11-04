import { useLocation } from "react-router-dom";

export default function Result() {
  const { state } = useLocation();
  const { name, tagline, pitch } = state || {};

  return (
    <div className="max-w-xl mx-auto py-10 text-center">
      <h1 className="text-3xl font-bold text-blue-600">{name}</h1>
      <p className="text-gray-600 mt-2 italic">“{tagline}”</p>
      <p className="mt-4 text-lg">{pitch}</p>

      <a href="/create" className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
        Generate Another
      </a>
    </div>
  );
}

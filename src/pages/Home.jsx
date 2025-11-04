export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-blue-600">PitchCraft</h1>
      <p className="mt-3 text-gray-500">Your AI Startup Partner 🚀</p>
      <a href="/create" className="mt-5 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
        Create Pitch
      </a>
    </div>
  );
}

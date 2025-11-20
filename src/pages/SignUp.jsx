import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(auth.currentUser, { displayName: name });
            navigate("/create");
        } catch (err) {
            console.error("Signup failed:", err.message);
            setError("Failed to create account. Please try again.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Create Account</h2>
                <form onSubmit={handleSignup} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-sm text-center mt-4">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;

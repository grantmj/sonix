import React from "react";

export default function LoginScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to Sonix</h1>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Sign in with Apple</button>
    </div>
  );
}
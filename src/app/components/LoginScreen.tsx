import React from "react";

export default function LoginScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6">Welcome to Sonix</h1>
      <button className="btn text-lg px-8 py-3">Sign in with Apple</button>
    </div>
  );
}
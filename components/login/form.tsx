"use client";

import { useState, SubmitEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [outputMessage, setOutputMessage] = useState("");

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        setOutputMessage(
          "Login failed. Please check your username and password."
        );
        return;
      }

      setOutputMessage("");
      const { user_id } = await response.json();
      console.log("Login successful! User ID:", user_id);
      router.push(`/feed/${user_id}`); // Redirect to the feed page with the user ID
      // Handle successful login (e.g., redirect, store token, etc.)
    } catch (error) {
      console.error("Login failed:", error);
      setOutputMessage("Login failed.Please check your username and password.");
      // Handle login failure (e.g., show error message)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-4 self-center rounded-md border-2 border-[#ff6a00] p-4 shadow-md flex-col items-start"
    >
      <div className="flex self-center">
        <label className="w-25 font-bold">UserName:</label>
        <input
          className="rounded border-1 border-[#ff6a00]"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="Username"
        />
      </div>

      <div className="flex self-center">
        <label className="w-25 font-bold">Password:</label>
        <input
          className="rounded border-1 border-[#ff6a00]"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
        />
      </div>

      <div className="flex gap-4 self-center">
        <button
          className="rounded border-1 border-[#ff6a00] p-2 hover:bg-[#ff6a00] font-bold hover:text-white"
          type="submit"
        >
          Login
        </button>
        <button
          className="rounded border-1 border-[#ff6a00] p-2 hover:bg-[#ff6a00] font-bold hover:text-white"
          type="button"
          onClick={() => {
            // Redirect to the signup page
            router.push("/signup");
          }}
        >
          Sign Up
        </button>
      </div>
      <p
        className="text-center font-bold"
        style={{
          color: "red",
        }}
      >
        {outputMessage}
      </p>
    </form>
  );
}

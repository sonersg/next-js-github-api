"use client";
import Input from "@/components/Input";
import Users from "@/components/Users";
import { useState } from "react";

export default function Home() {
    const [username, setUsername] = useState("sonersg");

    return (
        <main className="flex flex-col items-center justify-start p-10 text-white">
            <h1>Home Page</h1>

            <h1 className="text-rose-300">{username}</h1>

            <Input getUsername={username => setUsername(username)} />

            <Users username={username} />
        </main>
    );
}

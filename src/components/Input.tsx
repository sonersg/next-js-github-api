"use client";
import React, { useState } from "react";

type InputProps = {
    getUsername: (input: string) => void;
};
function Input({ getUsername }: InputProps) {
    const [input, setinput] = useState("");

    function handlePress(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            e.preventDefault();

            if (input !== "") {
                getUsername(input);
                setinput("");
            }
        }
    }

    return (
        <form className="text-center">
            <label>Please, enter a GitHub username.</label>
            <br />
            <input
                type="text"
                placeholder="Search..."
                className="text-center py-1 my-3 bg-transparent rounded-md border border-rose-400"
                onChange={e => setinput(e.target.value)}
                onKeyPress={handlePress}
                value={input}
            />
        </form>
    );
}

export default Input;

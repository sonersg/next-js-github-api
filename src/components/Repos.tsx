"use client";
import React, { useContext, useEffect, useState } from "react";
import { FaStar, FaCodeBranch, FaEye, FaIdBadge } from "react-icons/fa";
import { ReposType } from "@/types/repos";

type ReposProps = { name: string };

function Repos({ name }: ReposProps) {
    const [repos, setRepos] = useState<ReposType>();

    useEffect(() => {
        async function fetchRepos(username: string) {
            const response = await fetch(
                `https://api.github.com/users/${username}/repos`
            );
            const data = await response.json();
            setRepos(data);
        }

        fetchRepos(name);
        console.log("useEffect in repos component");
    }, []);

    if (!repos) return <h1 className="text-center">No Repos</h1>;

    return (
        <div className="max-w-4xl mx-auto py-3">
            <ul>
                {repos.map(repo => (
                    <li
                        className="bg-slate-500 hover:bg-slate-800 p-2 my-3 rounded-xl"
                        key={repo.id}
                    >
                        <h2 className="text-center">{repo.name}</h2>
                        <p>{repo.description}</p>
                        <div className="bg-slate-600 flex justify-between ">
                            <span className="flex items-center">
                                <FaStar className="mx-3" />
                                {repo.stargazers_count}
                            </span>
                            <span className="flex items-center">
                                <FaCodeBranch className="mx-3" />
                                {repo.forks_count}
                            </span>
                            <span className="flex items-center">
                                <FaEye className="mx-3" />
                                {repo.watchers_count}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Repos;

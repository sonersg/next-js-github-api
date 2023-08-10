import Link from "next/link";
// import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
// import user from "@/githubAPI/user.json";
import { UserType } from "@/types/user";
import { useEffect, useState } from "react";

type props = {
    username: string;
};
const Users = ({ username }: props) => {
    const [user, setUSer] = useState<UserType>();

    useEffect(() => {
        async function getUsers(username: string) {
            const reponse = await fetch(
                `https://api.github.com/users/${username}`
            );
            const data = await reponse.json();
            setUSer(data);
        }

        getUsers(username);
    }, [username]);

    // function handleClick() {
    //     console.log(contextData.username, "before");

    //     contextData.setUsername(username);

    //     console.log(contextData.username, "after");
    // }

    if (!user) return <h1>No Value</h1>;

    if (user.message) return <h1>{user.message}</h1>;

    return (
        <div className="my-5">
            <Link
                href={user.html_url}
                className="text-2xl flex flex-col items-center py-3"
                target="_blank"
            >
                <span className="hover:scale-110 hover:text-rose-500 hover:-translate-y-2 transition-all ease-in-out duration-300">
                    {user.login}
                </span>
                <img
                    src={user.avatar_url}
                    alt={user.login + "'s GitHub profile avatar."}
                />
            </Link>
            <p>
                <span className="opacity-60">Bio: </span>
                {user.bio}
            </p>
            <Link
                href={`/repos/${username}`}
                className="hover:bg-rose-800 block"
            >
                <span className="opacity-60">Public Repos: </span>
                {user.public_repos}
            </Link>
            <p>
                <span className="opacity-60">Created at: </span>
                {user.created_at}
            </p>
            <p>
                <span className="opacity-60">Updated at: </span>
                {user.updated_at}
            </p>
            <p>
                <span className="opacity-60">Followers: </span> {user.followers}
            </p>
            <p>
                <span className="opacity-60">Following: </span> {user.following}
            </p>
        </div>
    );
};

export default Users;

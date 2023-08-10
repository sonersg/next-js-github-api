import Repos from "@/components/Repos";
import React from "react";

type ReposPageProps = { params: { name: string } };
function ReposPage({ params: { name } }: ReposPageProps) {
    return (
        <div>
            <h1 className="text-center text-3xl hover:scale-110 hover:text-rose-500 hover:-translate-y-2 transition-all ease-in-out duration-300 mt-4">
                {name}
            </h1>
            <Repos name={name} />
        </div>
    );
}

export default ReposPage;

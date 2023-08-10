"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();
    const [showMenu, setshowMenu] = useState(false);

    return (
        <header className="sticky top-0 z-10">
            <section className=" bg-rose-600 text-white px-5">
                <div className="max-w-4xl mx-auto flex justify-between">
                    <div className="flex items-center h-9">
                        <Link
                            href="https://acme-rockets-soner.onrender.com/"
                            className="text-2xl hover:scale-125 transition ease-in-out duration-500 text-white"
                            target="_blank"
                        >
                            Soner
                        </Link>
                    </div>
                    <div className="flex items-center h-9">
                        <button
                            id="hamburger-button"
                            className="md:hidden text-white text-2xl"
                            onClick={() => {
                                setshowMenu(true);
                            }}
                        >
                            &#9776;
                        </button>
                        <nav id="links" className="hidden md:block text-lg">
                            <Link
                                href="/"
                                // className="px-2 hover:bg-slate-800 text-white"
                                className={
                                    pathname === "/"
                                        ? "px-2 hover:bg-slate-800 text-white"
                                        : "px-2 hover:bg-slate-800 text-white opacity-70"
                                }
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className={
                                    pathname === "/about"
                                        ? "px-2 hover:bg-slate-800 text-white"
                                        : "px-2 hover:bg-slate-800 text-white opacity-70"
                                }
                            >
                                About
                            </Link>
                        </nav>
                    </div>
                </div>
            </section>

            <section
                id="mobile-nav-menu"
                className={
                    showMenu
                        ? "w-full h-screen absolute top-0 bg-rose-800 --- transition ease-in-out delay-150 hover:bg-indigo-500 duration-700 z-10"
                        : " hidden "
                }
            >
                <div className="flex justify-end">
                    <button
                        id="close-button"
                        className="text-white text-6xl p-3"
                        onClick={() => {
                            setshowMenu(false);
                        }}
                    >
                        &times;
                    </button>
                </div>
                <nav id="links" className="text-white">
                    <Link
                        href="/"
                        className={
                            pathname === "/"
                                ? "hover:bg-slate-800 block text-center py-2 my-3 text-3xl text-white"
                                : "hover:bg-slate-800 block text-center py-2 my-3 text-3xl text-white opacity-70"
                        }
                        onClick={() => setshowMenu(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className={
                            pathname === "/about"
                                ? "hover:bg-slate-800 block text-center py-2 my-3 text-3xl text-white"
                                : "hover:bg-slate-800 block text-center py-2 my-3 text-3xl text-white opacity-70"
                        }
                        onClick={() => setshowMenu(false)}
                    >
                        About
                    </Link>
                </nav>
            </section>
        </header>
    );
};

export default Header;

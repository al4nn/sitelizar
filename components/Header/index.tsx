"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { header } from "@/types/global/header";
import { scrollToHash } from "@/utils/scrollToHash";

export const Header = ({ data }: { data: header | null }) => {
    const [scrolled, setScrolled] = useState(false);
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!data) {
        return null;
    }

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-white/10 ${
                scrolled
                    ? "bg-dark/30 backdrop-blur-md border-b"
                    : "bg-transparent"
            }`}
        >
            <div className="container h-20 flex items-center justify-between">
                <button
                    className="flex items-center gap-2 group cursor-pointer"
                    onClick={() => scrollToHash("home")}
                >
                    <div
                        className="relative w-8 h-8 flex items-center justify-center bg-gray rounded-lg border border-white/10 transition-all"
                        dangerouslySetInnerHTML={{
                            __html: data?.logo.svg || "",
                        }}
                    />

                    <div
                        className="group-hover:scale-110 transition-all duration-300"
                        dangerouslySetInnerHTML={{ __html: data.logo.texto }}
                    ></div>
                </button>

                <nav className="hidden md:block">
                    <ul className="hidden md:flex items-center gap-8">
                        {data.menu.map((item, index) => {
                            if (item.highlight) {
                                return (
                                    <li key={index}>
                                        <button
                                            className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-blue transition-all duration-300 cursor-pointer hover:scale-110"
                                            onClick={() =>
                                                scrollToHash(
                                                    item.link.url.substring(1)
                                                )
                                            }
                                        >
                                            {item.link.title}
                                        </button>
                                    </li>
                                );
                            }

                            return (
                                <li key={index}>
                                    <button
                                        className="text-sm font-medium text-gray-300 hover:text-blue transition-all cursor-pointer hover:mb-2.5 duration-300"
                                        onClick={() =>
                                            scrollToHash(
                                                item.link.url.substring(1)
                                            )
                                        }
                                    >
                                        {item.link.title}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <button
                    className="hidden p-2 text-gray-400 hover:text-light-gray cursor-pointer"
                    onClick={() => setOpened(!opened)}
                    aria-label="Toggle menu"
                    aria-expanded={opened}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {opened ? (
                            <>
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </>
                        ) : (
                            <>
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </>
                        )}
                    </svg>
                </button>
            </div>

            <AnimatePresence>
                {opened && (
                    <motion.div
                        className={`md:hidden border-b border-white/10 overflow-hidden ${
                            scrolled ? "" : "bg-dark"
                        }}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <nav>
                            <ul className="flex flex-col p-6 gap-4">
                                {data.menu.map((item, index) => {
                                    if (item.highlight) {
                                        return (
                                            <li key={index}>
                                                <button
                                                    className="mt-2 text-center py-3 bg-blue text-dark font-bold rounded cursor-pointer w-full"
                                                    onClick={() =>
                                                        scrollToHash(
                                                            item.link.url.substring(
                                                                1
                                                            )
                                                        )
                                                    }
                                                >
                                                    {item.link.title}
                                                </button>
                                            </li>
                                        );
                                    }

                                    return (
                                        <li key={index}>
                                            <button
                                                className="text-lg font-medium text-gray-400 hover:text-blue transition-all cursor-pointer w-full"
                                                onClick={() =>
                                                    scrollToHash(
                                                        item.link.url.substring(
                                                            1
                                                        )
                                                    )
                                                }
                                            >
                                                {item.link.title}
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

// @ts-nocheck

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const [active,setActive] = useState("");
    const navigate = useNavigate();

    const navList = [
        { title: "Home",value: "/" },
        { title: "Projects",value: "/project" },
        { title: "Contact",value: "/contact" },
        { title: "CV",value: "/resume" },

    ];

    return (
        <div className="flex items-center justify-center px-[2rem] py-6">
            <nav className="bg-[#9C998E] text-white py-[1rem] shadow rounded-lg px-[4rem]">
                <ul className="flex items-center gap-[2rem] text-[17px] font-medium">
                    {/* Left-side dot */}
                    <div className="h-[1rem] w-[1rem] bg-white rounded-full flex justify-center items-center">
                        <div className="h-[0.5em] w-[0.5em] bg-[#9C998E] rounded-full"></div>
                    </div>

                    {/* Navigation Links */}
                    {navList.map((e,i) => (
                        <li
                            key={i}
                            onClick={() => {
                                navigate(e.value);
                                setActive(e.title);
                            }}
                            className={`relative group overflow-hidden h-6 cursor-pointer ${active === e.title ? 'scale-105' : ''
                                }`}
                        >
                            <span className="block transition-transform duration-500 transform group-hover:-translate-y-full">
                                {e.title}
                            </span>
                            <span className="block absolute top-full left-0 w-full transition-transform duration-500 transform group-hover:-translate-y-full">
                                {e.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

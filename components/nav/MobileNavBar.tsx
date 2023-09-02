'use client'
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { AiOutlineMenu } from 'react-icons/ai';

export default function MobileNavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleMenu} className="border rounded-md border-white p-1">
                <AiOutlineMenu size={20} />
            </button>
            <div>
                {isOpen && (
                    <div className="w-full h-full fixed top-0 right-0 z-50">
                        <button onClick={toggleMenu} className="absolute w-1/2 h-full top-0 right-0 bg-black opacity-50"></button>
                        <div className="absolute w-1/2 h-full top-0 left-0 bg-slate-700">
                            <div className="mb-8 pb-px bg-gradient-to-r from-transparent via-white to-transparent text-left">
                                <div className="px-8 py-6 bg-slate-700">
                                    <button onClick={toggleMenu} className="border rounded-md border-white p-1">
                                        <AiOutlineMenu size={20} />
                                    </button>
                                </div>
                            </div>
                            <ul className="space-y-8 text-lg">
                                <li>
                                    <Link href="/" onClick={toggleMenu} className={pathname === "/" ? "font-bold" : ""}>Home</Link>
                                </li>
                                <li>
                                    <Link href="/work" onClick={toggleMenu} className={pathname === "/work" ? "font-bold" : ""}>Work</Link>
                                </li>
                                <li>
                                    <Link href="/future" onClick={toggleMenu} className={pathname === "/future" ? "font-bold" : ""}>Future</Link>
                                </li>
                                <li>
                                    <Link href="/about" onClick={toggleMenu} className={pathname === "/about" ? "font-bold" : ""}>About</Link>
                                </li>
                                <li>
                                    <Link href="/contact" onClick={toggleMenu} className={pathname === "/contact" ? "font-bold" : ""}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

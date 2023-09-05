'use client'
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { AiOutlineMenu } from 'react-icons/ai';

import BrandImage from '../BrandImage';

export default function MobileNavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="mt-6">
                <button onClick={toggleMenu} className="border rounded-md border-white p-1 hover:text-brand-blue-200">
                    <AiOutlineMenu size={20} />
                </button>
            </div>
            <div>
                {isOpen && (
                    <div className="w-full h-full fixed top-0 right-0 z-50">
                        <button onClick={toggleMenu} className="absolute w-1/2 h-full top-0 right-0 bg-black opacity-50"></button>
                        <div className="absolute w-1/2 h-full top-0 left-0 bg-slate-700">
                            <div className="mb-4 pb-px bg-gradient-to-r from-transparent via-white to-transparent">
                                <div className="px-8 py-6 bg-slate-700">
                                    <button onClick={toggleMenu} className="border rounded-md border-white p-1 hover:text-brand-blue-200">
                                        <AiOutlineMenu size={20} />
                                    </button>
                                </div>
                            </div>
                            <ul className="text-lg text-center">
                                <li>
                                    <Link href="/" onClick={toggleMenu} className={`block py-4 ${pathname === "/" ? "text-brand-blue hover:text-brand-blue-500 active:text-brand-blue-700" : "hover:text-brand-blue-200 active:text-brand-blue-500"}`}>Home</Link>
                                </li>
                                <li>
                                    <Link href="/work" onClick={toggleMenu} className={`block py-4 ${pathname === "/work" ? "text-brand-blue hover:text-brand-blue-500 active:text-brand-blue-700" : "hover:text-brand-blue-200 active:text-brand-blue-500"}`}>Work</Link>
                                </li>
                                <li>
                                    <Link href="/about" onClick={toggleMenu} className={`block py-4 ${pathname === "/about" ? "text-brand-blue hover:text-brand-blue-500 active:text-brand-blue-700" : "hover:text-brand-blue-200 active:text-brand-blue-500"}`}>About</Link>
                                </li>
                                <li>
                                    <Link href="/contact" onClick={toggleMenu} className={`block py-4 ${pathname === "/contact" ? "text-brand-blue hover:text-brand-blue-500 active:text-brand-blue-700" : "hover:text-brand-blue-200 active:text-brand-blue-500"}`}>Contact</Link>
                                </li>
                            </ul>
                            <div className="mx-2 mt-4 text-center">
                                <BrandImage image="/brand/logo-transparent.png" imageWidth={200} imageHeight={76} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

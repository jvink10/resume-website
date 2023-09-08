'use client'
import Link from 'next/link';
import Image from 'next/image';
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
            <div className="mt-6">
                <button onClick={toggleMenu} className="border rounded-md border-white p-1 hover:text-malibu-200">
                    <AiOutlineMenu size={20} />
                </button>
            </div>
            <div>
                {isOpen && (
                    <div className="w-full h-full fixed top-0 right-0 z-50">
                        <button onClick={toggleMenu} className="absolute w-1/2 h-full top-0 right-0 bg-black opacity-50"></button>
                        <div className="absolute w-1/2 h-full top-0 left-0 bg-malibu-700">
                            <div className="mb-4 border-b border-white border-opacity-25 px-8 py-6 bg-malibu-700">
                                <button onClick={toggleMenu} className="border rounded-md border-white p-1 hover:text-malibu-200">
                                    <AiOutlineMenu size={20} />
                                </button>
                            </div>
                            <ul className="text-lg text-center">
                                <li>
                                    <Link href="/" onClick={toggleMenu} className={`block py-4 ${pathname === "/" ? "text-malibu hover:text-malibu-500 active:text-malibu-900" : "hover:text-malibu-200 active:text-malibu-500"}`}>Home</Link>
                                </li>
                                <li>
                                    <Link href="/work" onClick={toggleMenu} className={`block py-4 ${pathname === "/work" ? "text-malibu hover:text-malibu-500 active:text-malibu-900" : "hover:text-malibu-200 active:text-malibu-500"}`}>Work</Link>
                                </li>
                                <li>
                                    <Link href="/about" onClick={toggleMenu} className={`block py-4 ${pathname === "/about" ? "text-malibu hover:text-malibu-500 active:text-malibu-900" : "hover:text-malibu-200 active:text-malibu-500"}`}>About</Link>
                                </li>
                                <li>
                                    <Link href="/contact" onClick={toggleMenu} className={`block py-4 ${pathname === "/contact" ? "text-malibu hover:text-malibu-500 active:text-malibu-900" : "hover:text-malibu-200 active:text-malibu-500"}`}>Contact</Link>
                                </li>
                            </ul>
                            <div className="mx-2 mt-4 text-center">
                                <Image src="/brand/logo-transparent.png" alt="Vink Web Development logo" width={200} height={76} className="inline-block" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

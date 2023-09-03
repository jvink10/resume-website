'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div>
            <Link href="/" className={`px-4 py-6 ${pathname === "/" ? "text-brand-blue hover:text-brand-blue-500" : "hover:text-brand-blue-200"}`}>Home</Link>
			<Link href="/work" className={`px-4 py-6 ${pathname === "/work" ? "text-brand-blue hover:text-brand-blue-500" : "hover:text-brand-blue-200"}`}>Work</Link>
			<Link href="/about" className={`px-4 py-6 ${pathname === "/about" ? "text-brand-blue hover:text-brand-blue-500" : "hover:text-brand-blue-200"}`}>About</Link>
			<Link href="/contact" className={`px-4 py-6 ${pathname === "/contact" ? "text-brand-blue hover:text-brand-blue-500" : "hover:text-brand-blue-200"}`}>Contact</Link>
        </div>
    );
};

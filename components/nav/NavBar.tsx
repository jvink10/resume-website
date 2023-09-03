'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div>
            <Link href="/" className={`px-4 py-6 ${pathname === "/" ? "text-brand-blue" : ""}`}>Home</Link>
			<Link href="/work" className={`px-4 py-6 ${pathname === "/work" ? "text-brand-blue" : ""}`}>Work</Link>
			<Link href="/about" className={`px-4 py-6 ${pathname === "/about" ? "text-brand-blue" : ""}`}>About</Link>
			<Link href="/contact" className={`px-4 py-6 ${pathname === "/contact" ? "text-brand-blue" : ""}`}>Contact</Link>
        </div>
    );
};

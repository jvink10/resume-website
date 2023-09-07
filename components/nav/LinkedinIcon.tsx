import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

export default function LinkedinIcon() {
    return (
        <Link href="https://www.linkedin.com/in/jordan-vink" target="_blank" className="hover:opacity-75 active:opacity-50">
            <FaLinkedin size={28} />
        </Link>
    );
};

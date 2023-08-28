import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

export default function LinkedinIcon() {
    return (
        <Link href="https://www.linkedin.com/in/jordan-vink" className="inline-block">
            <FaLinkedin size={28} />
        </Link>
    );
};

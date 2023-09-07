import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export default function GithubIcon() {
    return (
        <Link href="https://github.com/jvink10" target="_blank" className="hover:opacity-75 active:opacity-50">
            <FaGithub size={28} />
        </Link>
    );
};

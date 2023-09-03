import Link from 'next/link';
import Image from 'next/image';

export default function GithubIcon() {
    return (
        <Link href="https://github.com/jvink10" target="_blank" className="hover:opacity-75">
            <Image src="/icons/github-mark-white.png" alt="Github icon" width={28} height={28} />
        </Link>
    );
};

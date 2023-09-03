import Link from 'next/link';
import HeadingBox from '../../components/HeadingBox';

export default function Contact() {
    return (
        <main className="flex-grow bg-slate-700">
            <section className="py-16 space-y-8 text-center">
                <div>
                    <HeadingBox text="Want To Get In Contact?" />
                </div>
                <div className="space-y-4">
                    <Link href="https://www.linkedin.com/in/jordan-vink" target="_blank" className="block underline">Visit My Linkedin</Link>
                    <Link href="https://github.com/jvink10" target="_blank" className="block underline">Check Out My Github</Link>
                    <p>Contact me at jordanvink10@gmail.com</p>
                </div>
            </section>
        </main>
    );
};

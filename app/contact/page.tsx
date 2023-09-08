import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';

import HeadingBox from '../../components/HeadingBox';
import ContactForm from '../../components/ContactForm';

export default function Contact() {
    return (
        <main className="flex-grow bg-malibu-900">
            <section className="my-16 space-y-8 text-center">
                <div>
                    <HeadingBox text="Want To Get In Contact?" />
                </div>
                <div className="space-y-4">
                    <div className="flex flex-row justify-between mx-auto max-w-[256px]">
                        <h2>Visit My Linkedin</h2>
                        <Link href="https://www.linkedin.com/in/jordan-vink" target="_blank" className="hover:opacity-75 active:opacity-50">
                            <GoArrowUpRight size={28} />
                        </Link>
                    </div>
                    <div className="flex flex-row justify-between mx-auto max-w-[256px]">
                        <h2>Check Out My Github</h2>
                        <Link href="https://github.com/jvink10" target="_blank" className="hover:opacity-75 active:opacity-50">
                            <GoArrowUpRight size={28} />
                        </Link>
                    </div>
                    <p>Contact me at jordanvink10@gmail.com</p>
                </div>
                <ContactForm />
            </section>
        </main>
    );
};

import Link from 'next/link';
import ContactForm from '../../components/ContactForm';

export default function Contact() {
    return (
        <main className="flex-grow bg-slate-700">
            <section className="py-16 space-y-8 text-center">
                <h1 className="text-2xl">Want To Get In Contact?</h1>
                <div className="space-y-4">
                    <Link href="https://www.linkedin.com/in/jordan-vink" target="_blank" className="block underline">Visit My Linkedin</Link>
                    <Link href="https://github.com/jvink10" target="_blank" className="block underline">Check Out My Github</Link>
                </div>
                <div className="hidden">
                    <ContactForm />
                </div>
            </section>
        </main>
    );
};

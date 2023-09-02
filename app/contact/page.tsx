import Link from 'next/link';
import ContactForm from '../../components/ContactForm';

export default function Contact() {
    return (
        <main className="flex-grow bg-slate-700">
            <section className="py-16 space-y-8 text-center">
                <div className="mx-8 md:mx-16 lg:mx-32 bg-gradient-to-r from-transparent via-white to-transparent py-px">
					<div className="py-4 w-full h-full bg-slate-700">
                    <h1 className="text-center text-xl">Want To Get In Contact?</h1>
                    </div>
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

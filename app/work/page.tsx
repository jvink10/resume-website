import Link from 'next/link';
import Image from 'next/image';

import SkillTag from '../../components/SkillTag';

export default function Work() {
    return (
        <main className="flex-grow bg-slate-700">
            <section className="my-16 space-y-16">
                <div id="myxos-and-musings" className="flex flex-col lg:flex-row justify-evenly mx-8 space-x-4">
                    <div className="basis-1/2 self-center mx-4 sm:mx-8 lg:mx-0 lg:max-w-[512px]">
                        <h2 className="mb-2 text-xl">Myxos and Musings Book Sale</h2>
                        <div className="mb-4">
                            <SkillTag text="Next.js" />
                            <SkillTag text="Tailwind CSS" />
                            <SkillTag text="Typescript" />
                            <SkillTag text="React" />
                        </div>
                        <div>
                            <p>Designed and developed the front end, back end, and payment system of the website for the sale of the Myxos and Musings book by Steve Young.</p>
                        </div>
                    </div>
                    <div className="basis-1/2 mx-auto lg:mx-0 mt-8 lg:mt-0">
                        <Image src="/work/myxos-and-musings/myxos-and-musings-collage.png" alt="Collage of the Myxos and Musings website" width={960} height={540} className="hidden lg:block transition hover:scale-105" />
                        <Image src="/work/myxos-and-musings/myxos-and-musings-home-desktop.png" alt="Home page of the Myxos and Musings website" width={901} height={1444} className="block lg:hidden" />
                    </div>
                </div>
                <div id="wamos-portugal" className="flex flex-col lg:flex-row-reverse justify-evenly mx-8 space-x-4">
                    <div className="basis-1/2 mx-4 sm:mx-8 lg:mx-0 lg:max-w-[512px] lg:text-right">
                        <h2 className="mb-2 text-xl">Wamos Portugal Web Development Intern</h2>
                        <div className="mb-4">
                            <SkillTag text="Laravel" />
                            <SkillTag text="SASS" />
                            <SkillTag text="jQuery" />
                            <SkillTag text="PHP" />
                        </div>
                        <div>
                            <p>Four month internship at Wamos Portugal, tasked with completing an internal security test and the rework of a data table interface.</p>
                        </div>
                    </div>
                    <div className="basis-1/2">
                        <Image src="/work/wamos-portugal/wamos-air-plane.png" alt="Wamos air plane" width={1280} height={853} />
                        <div className="mx-8 lg:mx-0 text-xs lg:text-right text-white/25">
                            <Link href="https://creativecommons.org/licenses/by-sa/4.0" target="_blank" className="inline-block">William Verguet. Modifications were made.</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

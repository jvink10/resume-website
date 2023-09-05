import Link from 'next/link';
import Image from 'next/image';

import SkillTag from '../../components/SkillTag';

export default function Work() {
    return (
        <main className="flex-grow bg-slate-700">
            <section>
                <div id="myxos-and-musings" className="flex flex-col lg:flex-row justify-evenly mx-8 my-16 gap-x-4">
                    <div className="basis-1/2 self-center mx-4 lg:mx-0 lg:max-w-[512px]">
                        <h2 className="mb-2 text-xl">Myxos and Musings Book Sale</h2>
                        <div className="mb-4">
                            <SkillTag text="Next.js" description="Next.js is a front-end and back-end javascript framework" />
                            <SkillTag text="Tailwind CSS" description="Tailwind is a CSS library" />
                            <SkillTag text="Typescript" description="Typescript is a stricter form of javascript" />
                            <SkillTag text="React" description="React is a javascript library" />
                        </div>
                        <div>
                            <p>Designed and developed the front end, back end, and payment system of the website for the sale of the Myxos and Musings book by Steve Young.</p>
                        </div>
                    </div>
                    <div className="relative group basis-1/2 mx-auto lg:mx-0 mt-8 lg:mt-0 lg:h-96 xl:h-[512px] 2xl:h-[640px]">
                        <Image src="/work/myxos-and-musings/myxos-and-musings-home-desktop.png" alt="Home page of the Myxos and Musings website" width={450} height={722} className="relative inset-y-0 lg:left-0 w-full h-full object-contain z-10 transition group-hover:scale-105" />
                        <Image src="/work/myxos-and-musings/myxos-and-musings-purchase-desktop-90.png" alt="Purchase page of the Myxos and Musings website" width={505} height={908} className="absolute inset-y-0 lg:-left-16 lg:top-8 w-full h-1/2 lg:h-full object-contain group-hover:z-20 transition group-hover:rotate-90 lg:group-hover:translate-x-16 lg:group-hover:-translate-y-8 group-hover:scale-[1.4] lg:group-hover:scale-105" />
                    </div>
                </div>
                <div id="wamos-portugal" className="flex flex-col lg:flex-row-reverse justify-evenly mx-8 my-16 gap-x-4">
                    <div className="basis-1/2 mx-4 lg:mx-0 lg:max-w-[512px] lg:text-right">
                        <h2 className="mb-2 text-xl">Wamos Portugal Web Development Intern</h2>
                        <div className="mb-4">
                            <SkillTag text="Laravel" description="Laravel is a back end PHP framework" />
                            <SkillTag text="SASS" description="SASS is a CSS preprocessor that extends CSS&apos;s capabilities" />
                            <SkillTag text="jQuery" description="jQuery is a javascript library" />
                            <SkillTag text="PHP" description="PHP is a server side programming language" />
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

import Link from 'next/link';
import Image from 'next/image';

import SkillTag from '../../components/SkillTag';

export default function Work() {
    return (
        <main className="flex-grow bg-malibu-900">
            <section>
                <div id="myxos-and-musings" className="flex flex-col lg:flex-row justify-evenly mx-8 md:mx-12 lg:mx-8 my-16 gap-x-4">
                    <div className="basis-1/2 self-center mx-4 lg:mx-0 lg:max-w-[512px]">
                        <h2 className="mb-2 text-xl">Myxos and Musings Book Sale</h2>
                        <div className="mb-4">
                            <SkillTag text="Next.js" description="Full stack javascript framework" />
                            <SkillTag text="Tailwind CSS" description="CSS framework" />
                            <SkillTag text="TypeScript" description="Javascript with types" />
                            <SkillTag text="React" description="Javascript library" />
                        </div>
                        <div className="space-y-2">
                            <p className="text-sm opacity-50">July 2023 - September 2023</p>
                            <p>Designed and developed the front end, back end, and payment system, reducing transaction fees to 1.75% from PayPal&apos;s 2.6%, resulting in a cost savings of 30%.</p>
                            <p>Managed and optimised postage costs for domestic shipments, successfully maintaining a flat rate pricing of $10.60 for all items, from the book&apos;s 0.4kg weight up to 12 books at 5kg, saving up to $11.35 per shipment compared to the rate of $21.95 for large 5kg parcels.</p>
                            <p>Strategically managed international postage by implementing a zone-based approach, optimising shipping costs for each individual country.</p>
                        </div>
                    </div>
                    <div className="basis-1/2 lg:mx-0 mt-12 lg:mt-0 lg:h-96 xl:h-[512px] 2xl:h-[640px]">
                        <div className="relative group mx-auto lg:aspect-square max-w-full max-h-full">
                            <Image src="/work/myxos-and-musings/myxos-and-musings-home-desktop.png" alt="Home page of the Myxos and Musings website" width={450} height={722} className="relative inset-y-0 w-full h-full object-contain z-10 transition-transform group-hover:scale-105" />
                            <Image src="/work/myxos-and-musings/myxos-and-musings-purchase-desktop-90.png" alt="Purchase page of the Myxos and Musings website" width={505} height={908} className="absolute mx-auto lg:mx-0 inset-x-0 lg:-left-16 top-1/4 lg:top-8 bottom-0 lg:w-full h-1/2 lg:h-full object-contain group-hover:z-20 transition-transform rotate-90 lg:rotate-0 lg:group-hover:rotate-90 lg:group-hover:translate-x-16 lg:group-hover:-translate-y-8 group-hover:scale-[1.35] lg:group-hover:scale-105" />
                        </div>
                    </div>
                </div>
                <div id="wamos-portugal" className="flex flex-col lg:flex-row-reverse justify-evenly mx-8 my-16 gap-x-4">
                    <div className="basis-1/2 mx-4 lg:mx-0 lg:max-w-[512px] lg:text-right">
                        <h2 className="mb-2 text-xl">Wamos Portugal Web Development Intern</h2>
                        <div className="mb-4">
                            <SkillTag text="Laravel" description="Back end PHP framework" />
                            <SkillTag text="SASS" description="CSS preprocessor" />
                            <SkillTag text="jQuery" description="Javascript library" />
                            <SkillTag text="PHP" description="Server side programming language" />
                        </div>
                        <div className="space-y-2">
                            <p className="text-sm opacity-50">February 2022 - June 2022</p>
                            <p>Conducted an internal security test by recreating the Microsoft website with intentional flaws, avoiding security risk detection, and developing an exportable data table for excel.</p>
                            <p>Completed the rework of a data table interface, including edit and remove functionality, a modal for adding data, and a toggleable drop down for filtering.</p>
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

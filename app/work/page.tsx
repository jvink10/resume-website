import Image from 'next/image';

import SkillTag from '../../components/SkillTag';

export default function Work() {
    return (
        <main className="flex-grow bg-slate-700">
            <section className="mt-16 space-y-16">
                <div id="myxos-and-musings" className="flex flex-row">
                    <div className="basis-1/2 space-y-4">
                        <h2 className="ml-64 text-xl">Myxos and Musings Book Sale</h2>
                        <div className="ml-64 space-x-2">
                            <SkillTag text="Next.js" />
                            <SkillTag text="Tailwind CSS" />
                            <SkillTag text="Typescript" />
                            <SkillTag text="React" />
                        </div>
                        <div className="ml-64">
                            <p>Designed and developed the front end, back end, and payment system of the website for the sale of the Myxos and Musings book by Steve Young.</p>
                        </div>
                    </div>
                    <div className="basis-1/2">
                        {/*Image of the website here*/}
                    </div>
                </div>
                <div id="wamos-portugal" className="flex flex-row-reverse">
                    <div className="basis-1/2 space-y-4 text-right">
                        <h2 className="mr-64 text-xl">Wamos Portugal Web Development Intern</h2>
                        <div className="mr-64 space-x-2">
                            <SkillTag text="Laravel" />
                            <SkillTag text="SASS" />
                            <SkillTag text="jQuery" />
                            <SkillTag text="PHP" />
                        </div>
                        <div className="mr-64">
                            <p>Four month internship at Wamos Portugal, tasked with completing an internal security test and the rework of a data table interface.</p>
                        </div>
                    </div>
                    <div className="basis-1/2">
                        {/*Some imagery*/}
                    </div>
                </div>
            </section>
        </main>
    );
};

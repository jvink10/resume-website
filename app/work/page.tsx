import Image from 'next/image';

import SkillTag from '../../components/SkillTag';

export default function Work() {
    return (
        <main className="flex-grow bg-slate-700">
            <section className="mt-16 space-y-16">
                <div id="myxos-and-musings" className="flex flex-row">
                    <div className="ml-64">
                        <h2 className="mb-4 text-xl">Myxos and Musings Book Sale</h2>
                        <div className="space-x-2">
                            <SkillTag text="Next.js" />
                            <SkillTag text="Tailwind CSS" />
                            <SkillTag text="Typescript" />
                            <SkillTag text="React" />
                        </div>
                        <p></p>
                    </div>
                    <div>
                        {/*Image of the website here*/}
                    </div>
                </div>
                <div id="wamos-portugal" className="flex flex-row-reverse">
                    <div className="mr-64">
                        <h2 className="mb-4 text-right text-xl">Wamos Portugal Web Development Intern</h2>
                        <div className="space-x-2 text-right">
                            <SkillTag text="Laravel" />
                            <SkillTag text="SASS" />
                            <SkillTag text="jQuery" />
                            <SkillTag text="PHP" />
                        </div>
                        <p></p>
                    </div>
                    <div>
                        {/*Some imagery*/}
                    </div>
                </div>
            </section>
        </main>
    );
};

import Image from 'next/image';

import HeadingBox from '../../components/HeadingBox';
import PhotoSphere from '../../components/PhotoSphere';

export default function About() {
    return (
        <main className="flex-grow bg-malibu-900">
            <section className="my-16">
                <div className="my-16">
                    <HeadingBox text="Improvement" />
                </div>
                <div className="px-4 space-y-8 lg:space-y-32">
                    <div className="flex flex-col lg:flex-row justify-evenly items-center">
                        <div className="max-w-[384px] space-y-2">
                            <h2 className="text-lg">Next.js</h2>
                            <p className="ml-1">Presently, Jordan wants to focus on continuing to develop his skills in Next.js to a greater level.</p>
                            <p className="ml-1">Once he feels that he has progressed to a comfortable level of expertise, he intends on expanding his web development abilities beyond Next.js and React.</p>
                        </div>
                        <div>
                            <Image src="/about/next-react.png" alt="Next.js and React image" width={384} height={216} />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row-reverse justify-evenly items-center">
                        <div className="max-w-[384px] space-y-2">
                            <h2 className="text-lg">Laravel and PHP</h2>
                            <p className="ml-1">Following learning Next.js, Laravel, and its focus on back end PHP, will be Jordan&apos;s next goal.</p>
                            <p className="ml-1">He wants to learn Laravel due to its popularity and it being the first framework he touched in his Wamos Portugal internship.</p>
                        </div>
                        <div>
                            <Image src="/about/laravel.png" alt="Laravel image" width={384} height={192} />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-evenly items-center">
                        <div className="max-w-[384px] space-y-2">
                            <h2 className="text-lg">Create Art and Designs</h2>
                            <p className="ml-1">However, programming is only half the workload in web development. Jordan wants to be well rounded enough that he can complete the entire process to a high standard, alone.</p>
                            <p className="ml-1">As such, he has decided that learning the art and design related components, including designing layouts, choosing colours, and creating imagery should be part of his skill set.</p>
                        </div>
                        <div>
                            <Image src="/about/web-design.png" alt="Web design image" width={384} height={256} />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row-reverse justify-evenly items-center">
                        <div className="max-w-[384px] space-y-2">
                            <h2 className="text-lg">Desktop Application Development</h2>
                            <p className="ml-1">After finally developing his web related skills to a satisfactory level, Jordan intends on branching out of web development, likely into desktop application development first.</p>
                            <p className="ml-1">Any further progress is not currently under consideration.</p>
                        </div>
                        <div>
                        <Image src="/about/csharp-and-java.png" alt="C sharp and java image" width={384} height={192} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

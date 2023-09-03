import PhotoSphere from '../../components/PhotoSphere';

export default function About() {
    return (
        <main className="flex-grow bg-slate-700">
            <section>
                <div>
                    <div className="mx-8 md:mx-16 lg:mx-32 my-16 bg-gradient-to-r from-transparent via-white to-transparent py-px">
                        <div className="py-4 w-full h-full bg-slate-700">
                            <h1 className="text-center text-xl">Goals for Future Improvement</h1>
                        </div>
                    </div>
                </div>
                <div className="mx-auto xl:mx-96 px-4 max-w-[384px] space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-lg">Next.js</h2>
                        <p className="ml-1">Jordan want to focus on continuing to develop his skills in Next.js to a greater level.</p>
                        <p className="ml-1">Once he feels that he has progressed to a comfortable level of expertise, he intends on expanding his web development abilities beyond Next.js and React.</p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-lg">Laravel and PHP</h2>
                        <p className="ml-1">Following learning Next.js, Laravel, and its focus on back end PHP, will be Jordan&apos;s next goal.</p>
                        <p className="ml-1">He wants to learn Laravel due to its popularity and it being the first framework he touched in his Wamos Portugal internship.</p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-lg">Create Art and Designs</h2>
                        <p className="ml-1">However, programming is only half the workload in web development. Jordan wants to be well rounded enough that he can complete the entire process to a high standard, alone.</p>
                        <p className="ml-1">As such, he has decided that learning the art and design related components, including designing layouts, choosing colours, and creating imagery should be part of his skill set.</p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-lg">Desktop Application Development</h2>
                        <p className="ml-1">After finally developing his web related skills to a satisfactory level, Jordan intends on branching out of web development, likely into desktop application development first.</p>
                        <p className="ml-1">Any further progress is not currently under consideration.</p>
                    </div>
                </div>
            </section>
            <section className="flex flex-col mx-auto my-16 space-y-4">
                <div className="mx-8 md:mx-16 lg:mx-32 xl:mx-64 bg-gradient-to-r from-transparent via-white to-transparent py-px">
                    <div className="py-4 w-full h-full bg-slate-700">
                        <h1 className="text-center text-lg">Personal Interests</h1>
                    </div>
                </div>
                <div className="mx-auto max-w-[512px] text-center">
                    <p>Jordan enjoys taking photo spheres with his phone and going on long walks, which he combines into some fantastic photo sphere shots of his home city, Brisbane</p>
                </div>
                <div className="hidden sm:inline-block mx-auto p-2 max-w-max bg-white">
                    <PhotoSphere image="/photo-spheres/bardon-esplanade-park.jpg" imageWidth={512} imageHeight={384} />
                </div>
            </section>
        </main>
    );
};

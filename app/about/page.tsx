import Image from 'next/image';

import HeadingBox from '../../components/HeadingBox';
import PhotoSphere from '../../components/PhotoSphere';

export default function About() {
    return (
        <main className="flex-grow bg-malibu-900">
            <section>
                <div className="my-16">
                    <HeadingBox text="Background" />
                </div>
                <div className="flex flex-col lg:flex-row justify-evenly items-center lg:items-start space-y-8 lg:space-y-0">
                    <div className="max-w-[384px] space-y-2">
                        <h2 className="text-lg">School</h2>
                        <p className="ml-1">Jordan was introduced to programming in his first year of high school, in grade eight, 2014.</p>
                        <p className="ml-1">His first projects in class were made with a modified language, made to be similar, but easier, than Java.</p>
                        <p className="ml-1">The majority of assignments were game creation, during which he always overestimated his ability to develop realistic movement, resulting in characters able to accelerate infinitely.</p>
                        <p className="ml-1">He graduated from Kelvin Grove State College at the end of 2018. The classes taken were English, Math B, Math C, Physics, Engineering, and IT.</p>
                    </div>
                    <div className="max-w-[384px] space-y-2">
                        <h2 className="text-lg">University</h2>
                        <p className="ml-1">Jordan initially took a double bachelor of Science and IT, however, after a full year of learning, he came to the conclusion that it wasn't what he wanted to do anymore.</p>
                        <p className="ml-1">He then considered a degree in Mathematics, but quickly realised that that wasn't what he was interested in either.</p>
                        <p className="ml-1">It was only when he was presented with the opportunity of a web development internship at Wamos Portugal that his passion for programming was rekindled, now targeted specifically at web development.</p>
                    </div>
                </div>
            </section>
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
            <section className="flex flex-col mx-auto my-16 space-y-4">
                <div className="my-8">
                    <HeadingBox text="Interests" />
                </div>
                <div className="mx-auto px-4 max-w-[512px] space-y-2">
                    <p>Due to having relatives living in Portugal, Jordan has begun the arduous journey of learning a second language. While he is only at a beginner level currently, he hopes to make significant progress in the coming years.</p>
                    <p>In his free time, he enjoys reading a book, able to spend the entire day immersed without realising it if he never checks the time.</p>
                    <p>Jordan enjoys taking photo spheres with his phone and going on long walks, which he combines into some fantastic photo sphere shots of his home city, Brisbane</p>
                </div>
                <div className="hidden sm:inline-block mx-auto p-2 max-w-max bg-white">
                    <PhotoSphere image="/photo-spheres/bardon-esplanade-park.jpg" imageWidth={512} imageHeight={384} />
                </div>
            </section>
        </main>
    );
};

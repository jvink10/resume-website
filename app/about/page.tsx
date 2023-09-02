import PhotoSphere from '../../components/PhotoSphere';

export default function About() {
    return (
        <main className="flex-grow bg-slate-700">
            <section className="mx-64">
                <div>
                    <h1 className="text-xl">Planned Methods Of Improvement</h1>
                </div>
                <div>
                    <h2 className="text-lg">Next.js</h2>
                </div>
                <div>
                    <h2 className="text-lg">Laravel and PHP</h2>
                </div>
                <div>
                    <h2 className="text-lg">Create Art and Designs</h2>
                </div>
                <div>
                    <h2 className="text-lg">Desktop Application Development</h2>
                </div>
            </section>
            <section className="flex flex-col mx-auto my-16 space-y-4">
                <div className="mx-auto max-w-[512px] text-center">
                    <p>Jordan enjoys taking photo spheres with his phone and going on long walks, which he combines into some fantastic photo sphere shots of his home city, Brisbane</p>
                </div>
                <div className="inline-block mx-auto p-2 max-w-max bg-white">
                    <PhotoSphere image="/photo-spheres/bardon-esplanade-park.jpg" imageWidth={512} imageHeight={384} />
                </div>
            </section>
        </main>
    );
};

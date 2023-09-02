import PhotoSphere from '../../components/PhotoSphere';

export default function About() {
    return (
        <main className="flex-grow bg-slate-700">
            <div className="flex flex-col lg:flex-row mx-64 my-16 space-x-16">
                <div>
                    <p>Jordan enjoys taking photo spheres with his phone, and going on long walks, which he combines into some fantastic photo sphere shots of his home city, Brisbane</p>
                </div>
                <div className="inline-block p-2 bg-white">
                    <PhotoSphere image="/photo-spheres/bardon-esplanade-park.jpg" imageWidth={512} imageHeight={384} />
                </div>
            </div>
        </main>
    );
};

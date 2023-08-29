import Image from 'next/image';

type Props = {
    title: string;
    image: string;
    imageWidth: number;
    imageHeight: number;
    summary: string;
};

export default function ProjectSummary(props: Props) {
    return (
        <div className="rounded-xl p-4 max-w-[512px] max-h-96 bg-slate-600 text-center">
            <h2 className="mb-4 text-lg">{props.title}</h2>
            <div className={`inline-block rounded-lg p-4 w-[${props.imageWidth}px] h-[${props.imageHeight}px] bg-white`}>
                <Image src={props.image} alt={`${props.title} image`} width={props.imageWidth} height={props.imageHeight} />
            </div>
            <p className="text-left">{props.summary}</p>
        </div>
    );
};

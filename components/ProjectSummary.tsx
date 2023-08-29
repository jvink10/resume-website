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
        <div className={`rounded-xl w-[${props.imageWidth}px] max-w-[512px] max-h-96 bg-slate-600`}>
            <div className={`rounded-t-xl p-4 w-[${props.imageWidth}px] h-[${props.imageHeight}px] bg-white`}>
                <Image src={props.image} alt={`${props.title} image`} width={props.imageWidth} height={props.imageHeight} />
            </div>
            <div className="p-4">
                <h2 className="my-2 text-lg">{props.title}</h2>
                <p>{props.summary}</p>
            </div>
        </div>
    );
};

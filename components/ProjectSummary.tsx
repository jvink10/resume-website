import Link from 'next/link';
import Image from 'next/image';
import { GoArrowUpRight } from 'react-icons/go';

type Props = {
    title: string;
    image: string;
    imagePadding?: boolean;
    imageWidth?: number;
    imageHeight?: number;
    summary: string;
    linkId?: string;
};

export default function ProjectSummary(props: Props) {
    const {
        imagePadding = false,
        imageWidth = 512,
        imageHeight = 384,
    } = props;

    return (
        <div className="mx-auto rounded-xl max-w-[512px] max-h-96 bg-slate-600">
            <div className={`rounded-t-xl ${props.imagePadding ? 'p-4' : ''} bg-white`}>
                <Image src={props.image} alt={`${props.title} image`} width={props.imageWidth} height={props.imageHeight} className={`${props.imagePadding ? '' : 'rounded-t-xl'} mx-auto`} />
            </div>
            <div className="p-4">
                <h2 className="inline-block my-2 text-xl">{props.title}</h2>
                {props.linkId ? 
                    <Link href={`/work#${props.linkId}`} className="inline-block mt-1.5 float-right">
                        <GoArrowUpRight size={28} />
                    </Link>
                : null}
                <p>{props.summary}</p>
            </div>
        </div>
    );
};

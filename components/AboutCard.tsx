import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';

type Props = {
    title: string;
    summary: string;
    linkId?: string;
};

export default function AboutCard(props: Props) {
    return (
        <div className="max-w-[256px] text-black">
            <div className="flex flex-row justify-between">
                <h2 className="my-2 text-lg">{props.title}</h2>
                {props.linkId ? 
                    <Link href={`${props.linkId}`} className="my-2 hover:opacity-50 active:opacity-25">
                        <GoArrowUpRight size={28} />
                    </Link>
                : null}
            </div>
            <p>{props.summary}</p>
        </div>
    );
};

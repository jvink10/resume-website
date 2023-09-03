import Image from 'next/image';

type Props = {
    image: string;
    imageWidth: number;
    imageHeight: number;
};

export default function BrandImage(props: Props) {
    return (
        <div className="inline-block">
            <Image src={`${props.image}`} alt="Vink web development logo" width={props.imageWidth} height={props.imageHeight} />
        </div>
    );
};
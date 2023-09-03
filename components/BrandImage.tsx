import Image from 'next/image';

export default function BrandImage() {
    return (
        <div>
            <Image src="/brand/logo-transparent.png" alt="Vink web development logo" width={200} height={76} />
        </div>
    );
};
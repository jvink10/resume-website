import Image from 'next/image';

export default function BrandImage() {
    return (
        <div className="inline-block">
            <Image src="/brand/logo-transparent-no-slogan.png" alt="Vink web development logo" width={200} height={56} />
        </div>
    );
};
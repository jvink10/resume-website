'use client'
import { useState, useEffect } from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

type Props = {
    image: string;
    imageWidth: number;
    imageHeight: number;
};

export default function PhotoSphere(props: Props) {
    const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth);
    
    useEffect(() => {
        setViewportWidth(window.innerWidth);

        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        return() => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <div>
                <ReactPhotoSphereViewer
                    src={props.image}
                    width={`${viewportWidth ? Math.min(viewportWidth, props.imageWidth) : props.imageWidth}`}
                    height={`${props.imageHeight}`}
                    container={''}
                    fisheye={true}
                ></ReactPhotoSphereViewer>
            </div>
        </div>
    );
};

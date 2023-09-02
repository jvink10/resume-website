'use client'
import { useState, useEffect } from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

type Props = {
    image: string;
    imageWidth: number;
    imageHeight: number;
};

export default function PhotoSphere(props: Props) {

    //Resizing doesn't work. Got no clue why

    const [viewportWidth, setViewportWidth] = useState<number | undefined>(undefined);
    
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

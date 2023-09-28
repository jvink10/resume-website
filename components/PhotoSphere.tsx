'use client'
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

type Props = {
    image: string;
    imageWidth: number;
    imageHeight: number;
};

export default function PhotoSphere(props: Props) {
    return (
        <div>
            <div>
                <ReactPhotoSphereViewer
                    src={props.image}
                    width={`${props.imageWidth}`}
                    height={`${props.imageHeight}`}
                    container={''}
                    fisheye={true}
                    navbar={['fullscreen']}
                ></ReactPhotoSphereViewer>
            </div>
        </div>
    );
};

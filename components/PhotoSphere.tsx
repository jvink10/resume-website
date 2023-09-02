'use client'
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

type Props = {
    image: string;
    imageWidth: string | number;
    imageHeight: string | number;
};

export default function PhotoSphere(props: Props) {
    return (
        <div>
            <div>
                <ReactPhotoSphereViewer src={props.image} width={`${props.imageWidth}`} height={`${props.imageHeight}`} container={''} fisheye={true}></ReactPhotoSphereViewer>
            </div>
        </div>
    );
};

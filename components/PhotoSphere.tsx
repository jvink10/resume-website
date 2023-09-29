'use client'
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

type Props = {
    image: string;
};

export default function PhotoSphere(props: Props) {
    return (
        <div className="h-full w-full">
            <ReactPhotoSphereViewer
                src={props.image}
                height={"100%"}
                width={"100%"}
                container={''}
                fisheye={true}
                navbar={['fullscreen']}
            ></ReactPhotoSphereViewer>
        </div>
    );
};

type Props = {
    text: string;
};

export default function HeadingBox(props: Props) {
    return (
        <div className="mx-auto border-b border-white border-opacity-25 w-fit py-4 bg-malibu-700">
            <h1 className="text-center text-xl">{props.text}</h1>
        </div>
    );
};

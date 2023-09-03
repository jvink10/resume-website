type Props = {
    text: string;
};

export default function HeadingBox(props: Props) {
    return (
        <div className="mx-auto w-2/3 bg-gradient-to-r from-transparent via-white to-transparent py-px">
            <div className="py-4 w-full h-full bg-slate-700">
                <h1 className="text-center text-xl">{props.text}</h1>
            </div>
        </div>
    );
};

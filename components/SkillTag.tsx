type Props = {
    text: string;
    description: string;
    textColour?: string;
    bgColour?: string;
};

export default function SkillTag(props: Props) {
    const {
        textColour = "black",
        bgColour = "white",
    } = props;

    return (
        <div className={`relative group inline-block m-1 rounded-full bg-${bgColour} text-center`}>
            <p className={`px-4 py-1 text-${textColour}`}>{props.text}</p>
            <p className={`hidden group-hover:block absolute rounded-lg px-2 py-1 z-10 -inset-x-8 top-10 bg-${bgColour} text-sm text-${textColour}`}>{props.description}</p>
        </div>
    );
};

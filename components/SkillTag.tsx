type Props = {
    text: string;
    textColour?: string;
    bgColour?: string;
};

export default function SkillTag(props: Props) {
    const {
        textColour = "black",
        bgColour = "white",
    } = props;

    return (
        <div className={`inline-block m-1 rounded-full bg-${bgColour}`}>
            <p className={`px-4 py-1 text-${textColour}`}>{props.text}</p>
        </div>
    );
};

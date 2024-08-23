import Text from "./DialogueComponents/Text";
import Controls from "./Controls";

export default function Intro(props) {
    return (
        <div className="mb-16 font-bold">
            <Text content={props.content} />
            <img className="my-4" src={ props.content.img } alt="" />            
            <Controls content={props.content} />
        </div>
    )
}
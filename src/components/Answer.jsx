import Text from "./Text";
import Controls from "./Controls";

export default function Answer(props) {
    return (
        <div className="answer">
            <Text content={props.content} />
            {props.content.img && <img className="my-4" src={ props.content.img } alt="" />   }         
            <Controls content={props.content} />
        </div>
    )
}
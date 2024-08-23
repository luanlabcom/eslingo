import Text from "./Text";
import Controls from "./Controls";

export default function Question(props) {
    return (
        <div className="question">
            <Text content={props.content} />
            {props.content.img && <img className="my-4" src={ props.content.img } alt="" />   }         
            <Controls content={props.content} />
        </div>
    )
}
import Text from "./Text";
import Controls from "./Controls";

export default function Narrative(props) {
    return (
        <div className="narrative">
            <Text content={props.content} />
            {props.content.img && <img className="my-4" src={ props.content.img } alt="doorbell" />   }         
            <Controls content={props.content} />
        </div>
    )
}
import Text from "./Text";
import Controls from "./Controls";
import Image from "./Image"

export default function Intro(props) {
    return (
        <div className="border-b-2 font-bold">
            <Text content={props.content} />            
            <Image src={props.content.img.src} alt={props.content.img.alt} />
            <Controls content={props.content} />
        </div>
    )
}
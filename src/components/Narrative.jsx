import React from "react"
import Text from "./Text";
import Controls from "./Controls";
import Image from "./Image";

const Narrative = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="narrative">
            <Text content={props.content} />
            {props.content.img.src && <Image src={props.content.img.src} alt={props.content.img.alt} />  }
            <Controls content={props.content} />
        </div>
    )
})

export default Narrative
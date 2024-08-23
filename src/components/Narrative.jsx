import React from "react"
import Text from "./Text";
import Controls from "./Controls";

const Narrative = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="narrative">
            <Text content={props.content} />
            {props.content.img && <img className="my-4" src={ props.content.img } alt="doorbell" />   }         
            <Controls content={props.content} />
        </div>
    )
})

export default Narrative
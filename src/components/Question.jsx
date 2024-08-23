import React from "react"
import Text from "./Text";
import Controls from "./Controls";

const Question = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="question">
            <Text content={props.content} />
            {props.content.img && <img className="my-4" src={ props.content.img } alt="" />   }         
            <Controls content={props.content} />
        </div>
    )
})

export default Question
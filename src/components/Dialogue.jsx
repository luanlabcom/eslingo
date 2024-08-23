import React from "react"
import Text from "./Text"
import Controls from "./Controls"

const Dialogue = React.forwardRef((props, ref) => {    
    return(
        <div ref={ref} className="dialogue">
            {/* speaker info */}
            <div className="flex items-center gap-2">
                <img src={ props.content.speakerInfo.avatar } alt="" className="h-12 w-12 rounded-full bg-neutral-400" />
                <div className="speaker-name flex flex-col gap-1 text-xs font-semibold">
                    <span>{ props.content.speakerInfo.targetLangName }</span>
                    <span>{ props.content.speakerInfo.ipaName }</span>
                </div>
            </div>

            {/* Dialogue Text */}
            <Text content={props.content} />

            {/* Controls Panel */}
            <Controls content={props.content}/>
        </div>
    )
})



export default Dialogue
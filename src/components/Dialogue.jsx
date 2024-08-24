import React from "react"
import Text from "./Text"
import Controls from "./Controls"
import Image from "./Image"

const Dialogue = React.forwardRef((props, ref) => {    
    const [bgColor, textColor] = props.content.colors
    const customClassName = `dialogue ${bgColor} ${textColor}`
    console.log(customClassName)
    return(
        <div ref={ref} className={customClassName}>
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

            {props.content.img.src && <Image src={props.content.img.src} alt={props.content.img.alt} />  }

            {/* Controls Panel */}
            <Controls content={props.content}/>
        </div>
    )
})



export default Dialogue
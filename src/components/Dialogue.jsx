import React from "react"
import DialogueText from "./DialogueComponents/DialogueText"

export default function Dialogue(props) {    
    return(
        <div className="dialogue">
            {/* speaker info */}
            <div className="flex items-center gap-2">
                <img src={ props.content.speakerInfo.avatar } alt="" className="h-12 w-12 rounded-full bg-neutral-400" />
                <div className="speaker-name flex flex-col gap-1 text-xs font-semibold">
                    <span>{ props.content.speakerInfo.targetLangName }</span>
                    <span>{ props.content.speakerInfo.ipaName }</span>
                </div>
            </div>

            {/* Dialogue Text */}
            <DialogueText content={props.content} />
            
        </div>
    )
}
import React from "react"
import { PlayAudioInRangeContext } from "../App"


export default function Controls(props) {
    const translationRef = React.useRef(null)

    const handleReplayAudioInRange = React.useContext(PlayAudioInRangeContext)
    
    function displayTranslation() {
        translationRef.current.classList.toggle("hidden")
    }
    return (
        <div className="font-normal">
            <div className="flex justify-between text-xs my-4">                    
                <button 
                    className="underline" 
                    onClick={displayTranslation}
                >Translation</button>

                <button onClick={() => handleReplayAudioInRange(props.content.timeline)}>Replay</button>
            </div>

            <div className="hidden" ref={translationRef}>                    
                <p className="text-blue-700">{ props.content.text.translationText }</p>
            </div>
        </div>
    )
}
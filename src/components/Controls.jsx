import React from "react"
import { PlayAudioInRangeContext } from "../App"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'


export default function Controls(props) {
    const translationRef = React.useRef(null)

    const handleReplayAudioInRange = React.useContext(PlayAudioInRangeContext)

    const readAloudIcon = <FontAwesomeIcon icon={faVolumeHigh} />
    
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

                <button onClick={() => handleReplayAudioInRange(props.content.timeline)}>
                    { readAloudIcon }
                    <span className="ml-1">Replay</span>
                </button>
            </div>

            <div className="hidden" ref={translationRef}>                    
                <p className="text-blue-700">{ props.content.text.translationText }</p>
            </div>
        </div>
    )
}
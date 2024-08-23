import React from "react"


export default function Controls(props) {
    const translationRef = React.useRef(null)

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

                <button>Replay</button>
            </div>

            <div className="hidden" ref={translationRef}>                    
                <p className="text-blue-700">{ props.content.text.translationText }</p>
            </div>
        </div>
    )
}
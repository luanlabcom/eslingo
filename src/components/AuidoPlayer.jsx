import React from "react"

const AudioPlayer = React.forwardRef((props, ref) => {
    return (        
        <audio ref={ref} onTimeUpdate={props.handlePausedTime}>
            <source src="/chapter-2-qa.mp3" type="audio/mp3" />
        </audio>       
    )
})

export default AudioPlayer
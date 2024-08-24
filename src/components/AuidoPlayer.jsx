import React from "react"

const AudioPlayer = React.forwardRef((props, ref) => {
    return (        
        <audio ref={ref} onTimeUpdate={props.handlePausedTime}>
            <source src="/assets/audio/chapter-2-qa.mp3" type="audio/mpeg" />
        </audio>       
    )
})

export default AudioPlayer
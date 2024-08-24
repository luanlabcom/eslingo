import React from "react"

const AudioPlayer = React.forwardRef((props, ref) => {
    return (        
        <audio ref={ref} onTimeUpdate={props.handlePausedTime}>
            <source src="/Chapter 2.mp3" type="audio/mp3" />
        </audio>       
    )
})

export default AudioPlayer
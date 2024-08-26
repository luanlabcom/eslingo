import React from "react"
import Dialogue from "./components/Dialogue"
import Intro from "./components/Intro"
import Narrative from "./components/Narrative"
import Question from "./components/Question"
import Answer from "./components/Answer"
import AudioPlayer from "./components/AuidoPlayer"
import chapter2Data from "./data/data-chapter-2-qa"

import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Study from "./pages/Study"
import Practice from "./pages/Practice"

export const PlayAudioInRangeContext = React.createContext()

export default function App() {
    const data = chapter2Data
    const intro = data[0]
    const [contents, setContents] = React.useState([intro])

    // Ref for the last element
    const endOfElementsRef = React.useRef(null)

    // AudioPlayer related
    const audioRef = React.useRef(null)
    const endTimeRef = React.useRef(0)

    React.useEffect(() => {
        if (endOfElementsRef.current) {
            endOfElementsRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center"
            })
        }
    }, [contents])

    const elements = contents.map((content, index) => {
        let jsx
        const setRef = (node) => {
            if (index === contents.length - 1) {
                endOfElementsRef.current = node
            }
        }
        if (content.type === "intro") {
            jsx = <Intro key={content.id} content={content} />
        } else if (content.type === "narrative") {
            jsx = <Narrative ref={setRef} key={content.id} content={content} />
        } else if (content.type === "question") {
            jsx = <Question ref={setRef} key={content.id} content={content} />
        } else if (content.type === "answer") {
            jsx = <Answer ref={setRef} key={content.id} content={content} />
        } else if (content.type === "dialogue") {
            jsx = <Dialogue ref={setRef} key={content.id} content={content} />
        }
        return jsx
    })

    function addNewContent() {
        if (contents.length < data.length) {
            setContents(prev => [...prev, data[prev.length]])
            playAudioInRange()
        } else {
            console.log("done")
        }
    }    
    
    // AudioPlayer related
    function playAudioInRange() {
        const [startTime, endTime] = data[contents.length].timeline
        audioRef.current.playbackRate = 0.75
        audioRef.current.currentTime = startTime
        endTimeRef.current = endTime
        audioRef.current.play()
    }

    // AudioPlayer related
    function handlePausedTime() {
        if (audioRef.current.currentTime >= endTimeRef.current) {
            audioRef.current.pause()
        }
    }

    // AudioPlayer related
    function handleReplayAudioInRange(timeline) {
        const [startTime, endTime] = timeline
        audioRef.current.playbackRate = 0.75
        audioRef.current.currentTime = startTime
        endTimeRef.current = endTime
        audioRef.current.play()
    }

    {/* 
    <div className="flex flex-col gap-4 max-w-md mx-auto min-h-screen p-4"> 
        <AudioPlayer ref={audioRef} handlePausedTime={handlePausedTime} />    
        <PlayAudioInRangeContext.Provider value={handleReplayAudioInRange}>{ elements }</PlayAudioInRangeContext.Provider>                              
        <div className="flex justify-center mt-4">
            {contents.length < data.length ? 
            <button 
                className="rounded-full bg-neutral-950 px-12 py-2 font-semibold text-neutral-50" 
                onClick={addNewContent}>Continue</button>
            :
            <p className="bg-green-600 w-full text-center p-2 font-semibold text-sm text-neutral-950 rounded-sm ">🎊 You've Finished The Lesson 🎊</p>
            }            
        </div>
    </div>            
    */}

    return(        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />}>
                    <Route index element={<Study />} />
                    <Route path="/practice" element={<Practice />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


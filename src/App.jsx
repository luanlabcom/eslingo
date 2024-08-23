import React from "react"
import Dialogue from "./components/Dialogue"
import Intro from "./components/Intro"
import data from "../data"
import Narrative from "./components/Narrative"
import Question from "./components/Question"
import Answer from "./components/Answer"

export default function App() {
    const intro = data[0]
    const [contents, setContents] = React.useState([intro])
    // Ref for the last element
    const endOfElementsRef = React.useRef(null)

    // console.log(endOfElementsRef.current)

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
        } else {
            console.log("done")
        }
    }

    return(
        <div className="flex flex-col gap-4 max-w-md mx-auto min-h-screen p-4">
                { elements }
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
    )
}
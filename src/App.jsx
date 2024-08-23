import Dialogue from "./components/Dialogue"
import Intro from "./components/Intro"
import data from "../data"
import Narrative from "./components/Narrative"
import Question from "./components/Question"
import Answer from "./components/Answer"

export default function App() {

    return(
        <div className="flex flex-col gap-4 max-w-md mx-auto min-h-screen p-4">
                <Intro content={data[0]} />
                <Narrative content={data[1]} />
                <Question content={data[2]} />
                <Answer content={data[3]} />
                <Dialogue content={data[4]} />
            <div className="flex justify-center mt-4">
                <button className="rounded-full bg-neutral-950 px-12 py-2 font-semibold text-neutral-50">Continue</button>
            </div>
        </div>
    )
}
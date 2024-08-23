import Dialogue from "./components/Dialogue"
import Intro from "./components/Intro"
import data from "../data"
import Narrative from "./components/Narrative"
import Question from "./components/Question"

export default function App() {

    return(
        <div className="max-w-md mx-auto min-h-screen p-4">
            <Intro content={data[0]} />
            <Narrative content={data[1]} />
            <Question content={data[2]} />
            <Dialogue content={data[4]} />
        </div>
    )
}
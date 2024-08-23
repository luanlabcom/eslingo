import Dialogue from "./components/Dialogue"
import Intro from "./components/Intro"
import data from "../data"

export default function App() {

    return(
        <div className="max-w-md mx-auto min-h-screen p-4">
            <Intro content={data[0]} />
            <Dialogue content={data[4]} />
        </div>
    )
}
import Dialogue from "./components/Dialogue"
import data from "../data"

export default function App() {
    const content = data
    return(
        <div className="bg-neutral-400 max-w-md mx-auto min-h-screen p-4">
            <Dialogue content={content} />
        </div>
    )
}
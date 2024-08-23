import Dialogue from "./components/Dialogue"

export default function App() {
    const content = {
        id: 0,
        type: "dialogue",
        speakerInfo: {
            avatar: "/public/liming.jpeg",
            ipaName: "Tiánzhōng",
            targetLangName: "田中"
        },
        timeline: [
            0,
            3.459
        ],
        text: {
            ipaText: "Nǐmen |hǎo|!",
            targetLangText: "你们|好|!",
            translationText: "Tanaka: Hello guys!"
        },
        img: "",
        colors: ["bg-neutral-400", "text-neutral-800"],        
    }
    return(
        "Hello"
    )
}
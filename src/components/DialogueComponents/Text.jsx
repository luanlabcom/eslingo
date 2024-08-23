export default function Text(props) {
    const ipaTextArr = props.content.text.ipaText.split("|")
    const targetLangTextArr = props.content.text.targetLangText.split("|")    

    const textElements = ipaTextArr.map((ipaText, index) => {
        return (
            <div key={crypto.randomUUID()} className="flex flex-col mt-4 text-center">
                <span className="text-xs text-red-600">{ipaText}</span>
                <span className="text-2xl text-neutral-800">{targetLangTextArr[index]}</span>
            </div>
        )
    })    
    return(
        <div className="flex gap-3">
            { textElements }
        </div>
    )
}
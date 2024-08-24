export default function Image(props) {
    return (
        <img className="my-4 w-72 mx-auto" src={ props.src } alt={ props.alt } />
    )
}
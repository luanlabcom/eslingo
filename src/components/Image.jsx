export default function Image(props) {
    console.log("../assets/images/" + props.src)
    
    return (
        <img className="my-4 w-72 mx-auto" src={ "/assets/images/" + props.src } alt={ props.alt } />
    )
}
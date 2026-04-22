function Button(props){
    return (
        <div className = {props.class}>
            <p>{props.content}</p>
        </div>
    )
}
export default Button
function Button(props){
    console.log(props)
    return(
        <button style={{backgroundColor:'red',color:'white',padding:'20px'}}>{props.text} {props.number}</button>
    )
}
export default Button


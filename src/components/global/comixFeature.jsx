
const ComixFeature = (props)=> {
    return(
        <div className="flex montserrat-regular">
            <img src={props.icon} alt="list-icon" />
            <p className="px-2">{props.value}</p>
        </div>
    )
}

export default ComixFeature;
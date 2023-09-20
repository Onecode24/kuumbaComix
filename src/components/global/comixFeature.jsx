
import listIcon from "../../assets/icons/losange.svg";
const ComixFeature = (props)=> {
    return(
        <div className="flex montserrat-regular">
            <img src={listIcon} alt="list-icon" />
            <p className="px-2">{props.value}</p>
        </div>
    )
}

export default ComixFeature;
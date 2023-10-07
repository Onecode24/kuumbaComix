import '../../styles/index.css';
import { Link, useNavigate } from 'react-router-dom';
const BDCard = (props) => {

    let navigate = useNavigate()
    const comixRedirect=()=>{
        let path = `${props.url}`;
        navigate(path)
    }

    return(
        <div className='w-3/4 cursor-pointer border-orange-ligth rounded-t-xl' onClick={comixRedirect}>
            <img src={props.img} alt={props.title} className="w-full rounded-t-xl" />
            <div className="px-10 py-5 ">
                <h3 className="montserrat-bold">{props.title}</h3>
                <p className="hidden montserrat-regular"  >{props.description}</p>
                <Link to={props.url} className="text-orange montserrat-medium" >Lire</Link>
            </div>
        </div>
    );
};

export default BDCard;

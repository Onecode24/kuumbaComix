import '../../styles/index.css';
import { Link } from 'react-router-dom';
const BDCard = (props) => {
    return(
        <div className='w-3/4 border-orange rounded-t-xl' >
            <img src={props.img} alt={props.title} className="w-full rounded-t-xl" />
            <div className="py-5 px-10 ">
                <h3 className="montserrat-bold">{props.title}</h3>
                <p className="hidden montserrat-regular"  >{props.description}</p>
                <Link to={props.url} className="text-orange montserrat-medium" >Lire</Link>
            </div>
        </div>
    );
};

export default BDCard;

import '../../styles/index.css'

const Input = (props) => {
    return (
        <div className="w-full bg-input py-1 px-3">
            <span className='block montserrat-light bg-input text-sm'>{props.label}</span>
            <input type={props.type} name={props.name} placeholder={props.label}  className='py-1 w-full outline-none bg-transparent montserrat-regular text-lg'/>
        </div>
    );
};

export default Input;
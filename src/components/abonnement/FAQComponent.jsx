import React, { useState } from 'react';
import crossIcon from '../../assets/icons/cross-icon.svg';
const FaqComponent = (props) => {
    const [isVisible, setIsVisible] = useState(false);

    function display() {
        setIsVisible(!isVisible);
    }

    return (
        <div className='px-5 py-2 my-3 bg-orange-light montserrat-medium'>
            <div className='flex justify-between' onClick={display}>
                <h4>{props.question}</h4>
                <img src={crossIcon} alt="+" />
            </div >
           {isVisible && ( <p className='mt-2 text-sm transition duration-[2s] montserrat-regular '>
                {props.answer}
            </p>)}
        </div>
    );
}

export default FaqComponent;
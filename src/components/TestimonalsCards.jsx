import Star from '../assets/icons/star.svg'
const TestimonalsCards = (props) => {
    return (
        <article className="w-full p-5 bg-testimonal h-full rounded-xl border border-[#FFA500]">
            <div className='flex items-center'>
                <img src={props.profile} alt="profile" />
                <div className='ml-3'>
                    <h4 className='montserrat-bold text-'>{props.name}</h4>
                    <div className='flex '>
                        {/* //  TODO: Crete components who take a number and return a star rating */}
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                    </div>
                </div>
            </div>
            <p className='montserrat-regular text-sm text-justify mt-3'>{props.testimonal.slice(0,200) + '...'}</p>
        </article>
    );
}

export default TestimonalsCards;
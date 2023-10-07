import working from '../../assets/worker.png';

const NotFound = () => {
    return (
        <div className="w-hull h-[100vh] patternBG ">
            <div>
                <h1 className='montserrat-black text-3xl px-20 py-10'>
                    <a href="/">KuumbaComix.</a>
                </h1>
            </div>
            <div className='flex justify-evenly items-center mobile-block'>
                <img src={working} alt="" className='w-1/3 mobile-w-full' />
                <div className='mobile-text-center mobile-py-20'>
                    <h1 className='montserrat-bold text-2xl'>En cours de developpement</h1>
                    {/* <p className='montserrat-regular text-lg'>Please wait this is coming soon </p> */}
                    <div className='montserrat-regular'>
                    <p className=' text-lg'>Please wait this is coming soon </p>
                    <button className='bg-orange text-lg mt-2 px-5 py-2 '>
                        <a href="/">Home Page</a>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
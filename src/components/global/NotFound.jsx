import working from '../../assets/worker.png';

const NotFound = () => {
    return (
        <div className="w-hull h-[100vh] patternBG ">
            <div>
                <h1 className='montserrat-black text-3xl px-20 py-10'>KuumbaComix.</h1>
            </div>
            <div className='flex justify-evenly items-center'>
                <img src={working} alt="" className='w-1/3' />
                <div>
                    <h1 className='montserrat-bold text-2xl'>En cours de developpement</h1>
                    <p className='montserrat-regular text-lg'>Please wait this is coming soon </p>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
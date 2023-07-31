import AfricaBanniere from '../assets/africa-banniere.png';
import '../styles/index.css';
const Home = () => {
    return (
         <div>
            <div className='flex patternBG py-16 justify-around'>
                <div  className='w-1/2'>
                    <h1 className=' text-4xl montserrat-black'>Découvrez autrement l’histoire de l’Afrique.</h1>
                    <p className='montserrat-medium py-8 text-justify'>Nous vous plongeons au cœur de l'histoire africaine avec nos bandes dessinées passionnantes. Découvrez chaque événement, chaque personnage emblématique et chaque moment clé de l'Afrique. Prêt à embarquer ? Consultez notre bibliothèque maintenant !...</p>
                    <div className='flex w-1/2 justify-around cat montserrat-regular'>
                        <button className='bg-orange'>Commencez</button>
                        <button className='border-black border'>En savoir plus</button>    
                    </div>
                </div> 
                <img src={AfricaBanniere} alt="Africa" className='w-1/4' />    
            </div>
            <div className='flex justify-around py-10 items-center'>
                <div className='w-2/3'>
                    <h2 className='text-2xl montserrat-black'>Une expérience unique vous attend</h2>
                    <p className='montserrat-medium  text-justify'>Passionné d'art, de culture ou des récits, notre plateforme vous fait vivre une expérience de lecture époustouflante. Embarquez dans un voyage épique à travers les époques, des légendes ancestrales aux récits contemporains.</p>
                </div>
                <button className='bg-orange py-4 px-8 rounded-lg h-min montserrat-regular'>Explorez</button>
            </div>
         </div>
         
    );
};

export default Home;
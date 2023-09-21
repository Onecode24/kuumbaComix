import AfricaBanniere from '../assets/africa-banniere.png';
import BDCard from '../components/global/BDCard';
import '../styles/index.css';
import BDGuezo from '../assets/bd-guezo.png';
import BDTolegba from '../assets/bd-tolegba.png';
import BDPygmes from '../assets/bd-pygmes.png';
import BDPanthere from '../assets/bd-panthere.png';
import TestimonalsCards from '../components/TestimonalsCards';
import Input from '../components/global/Input';

import profile from '../assets/profile.svg';
const Home = () => {
    return (
         <div>
            <div className='flex justify-around py-16 patternBG block-reverse mobile-py-20 mobile-px-10'>
                <div  className='w-1/2 mobile-w-full mobile-py-20'>
                    <h1 className='text-4xl montserrat-black mobile-text-size-2em'>Découvrez autrement l’histoire de l’Afrique.</h1>
                    <p className='py-3 text-justify montserrat-medium md:py-8 mobile-text-align'>Nous vous plongeons au cœur de l'histoire africaine avec nos bandes dessinées passionnantes. Découvrez chaque événement, chaque personnage emblématique et chaque moment clé de l'Afrique. Prêt à embarquer ? Consultez notre bibliothèque maintenant !...</p>
                    <div className='flex justify-around w-1/2 cat montserrat-regular mobile-w-full mobile-pt-20'>
                        <button className='bg-orange'>Commencez</button>
                        <button className='border border-black mobile-border-blue mobile-text-color-blue'>En savoir plus</button>    
                    </div>
                </div> 
                <img src={AfricaBanniere} alt="Africa" className='w-1/4 mobile-w-full ' />    
            </div>
            <div className='flex items-center justify-around py-10 mobile-block mobile-px-10'>
                <div className='w-2/3 mobile-w-full mobile-pb-20'>
                    <h2 className='pb-2 text-2xl montserrat-black'>Une expérience unique vous attend</h2>
                    <p className='text-justify montserrat-medium'>Passionné d'art, de culture ou des récits, notre plateforme vous fait vivre une expérience de lecture époustouflante. Embarquez dans un voyage épique à travers les époques, des légendes ancestrales aux récits contemporains.</p>
                </div>
                <button className='px-8 py-4 rounded-lg bg-orange h-min montserrat-regular mobile-radius-none'>Explorez</button>
            </div>
            <div>
                <div className='flex my-10 justify-evenly mobile-block '>
                    <div className='flex justify-center mobile-mb-40'>
                        <BDCard img={BDGuezo} title='Les Aventures de Guézo' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' url='/comix/1' />
                    </div>
                    <div className='flex justify-center '>
                        <BDCard img={BDTolegba} title='Le Roi Tolègba' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' url='/comix/2' />
                    </div>
                </div>
                <div className='flex my-10 justify-evenly mobile-block'>
                    <div className='flex justify-center mobile-mb-40'>
                        <BDCard img={BDPygmes} title='Les pygmées mystérieux' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' url='/comix/3' />
                    </div>
                    <div className='flex justify-center '>
                        <BDCard img={BDPanthere} title='Le Roi Panthere' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' url='/comix/4' />
                    </div>
                </div>
            </div>
            <section about='avis' className='px-10 mobile-px-20' >
                <div className='px-4 mobile-px-10'>
                    <h3 className='text-2xl montserrat-black'>Avis de lecteurs</h3>
                    <p className='w-2/3 my-3 text-sm montserrat-medium mobile-w-full'>Les utilisateurs sont conquis par notre bibliothèque d'histoires africaines en BD. Ils sont transportés dans un monde captivant où l'art et l'histoire s'entremêlent. Découvrez leurs avis élogieux  ici :</p>
                </div>
                <div className='flex mobile-overflow-x-scroll '>
                    <div className='w-1/2 p-4 min-mobile-w-95'><TestimonalsCards profile={profile} name="Jeau-Eudes COKOU" testimonal="Les BD sont bien réalisées, avec des histoires riches et des illustrations nickel. J'ai redécouvert l'histoire et la culture africaines en explorant la bibliothèque. Je recommande vivement cette plateforme pour tous les amoureux de BD en quête d'aventures uniques !" /></div>
                    <div className='w-1/2 p-4 min-mobile-w-95'><TestimonalsCards profile={profile} name="Jeau-Eudes COKOU" testimonal="Je suis littéralement accro à cette plateforme ! Les BD africaines proposées sont une source infinie d'inspiration et de divertissement. Les personnages sont si attachants et les récits si captivants. Je passe des heures à explorer les différentes histoires sans m'ennuyer. Merci de me permettre de découvrir l'Afrique d'une manière si passionnante ! " /></div>
                    <div className='w-1/2 p-4 min-mobile-w-95'><TestimonalsCards profile={profile} name="Jeau-Eudes COKOU" testimonal="Les BD sont bien réalisées, avec des histoires riches et des illustrations nickel. J'ai redécouvert l'histoire et la culture africaines en explorant la bibliothèque. Je recommande vivement cette plateforme pour tous les amoureux de BD en quête d'aventures uniques !" /></div>
                    <div className='w-1/2 p-4 min-mobile-w-95'><TestimonalsCards profile={profile} name="Jeau-Eudes COKOU" testimonal="Les BD sont bien réalisées, avec des histoires riches et des illustrations nickel. J'ai redécouvert l'histoire et la culture africaines en explorant la bibliothèque. Je recommande vivement cette plateforme pour tous les amoureux de BD en quête d'aventures uniques !" /></div>
                </div>
            </section>
            <section about='newsletter'  className='p-10 mx-16 my-10 bg-orange mobile-px-20 mobile-mx-20'>
                <h4 className='text-3xl montserrat-extrabold'>Abonnez-vous à notre Newsletter</h4>
                <p className='my-3 montserrat-regular'>Ne ratez rien de nos actualités en vous abonnant à notre Newsletter.  Restez à l'affût des dernières BD, des promotions spéciales et plongez dans l'univers captivant des histoires africaines. Abonnez-vous dès maintenant !</p>
                <div className='flex items-center mt-5 newsletter montserrat-regular mobile-block'>
                    <input type="text" name="name" placeholder="Votre nom*" className='w-full mobile-py-10' />
                    <input type="email" name="e-mail" placeholder="Email*" className='w-full mobile-py-10' />
                    <input type="button" value="S'abonner" className='w-full text-white cursor-pointer btn-bg-gris mobile-py-10' />
                </div>
            </section>
         </div>
         
    );
};

export default Home;
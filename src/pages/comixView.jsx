import ComixFeature from "../components/global/comixFeature";
import '../styles/index.css'
import Tags from "../components/global/Tags";
import BDCard from '../components/global/BDCard';
import BDGuezo from '../assets/bd-guezo.png';
import BDTolegba from '../assets/bd-tolegba.png';
import BDPygmes from '../assets/bd-pygmes.png';
import BDPanthere from '../assets/bd-panthere.png';
import listIcon from "../assets/icons/losange.svg";

export default function ComixView(){
    return(
        <div className="">
            <section className="md:flex md:w-full">
                <div className="flex items-center justify-center md:w-2/3">
                    <img src={BDGuezo} alt="comix-cover" className="md:h-[60vh]" />
                </div>
                <div className="px-3 py-5 md:w-1/3">
                    <h3 className="text-xl montserrat-bold">Les Aventures de Guézo</h3>
                    <p className="my-2 text-justify montserrat-medium">Description : "Les Aventures de Guézo" est une bande dessinée qui s'inspire du roi béninois Guézo, un souverain remarquable qui a lutté pour garder l'indépendance de son royaume et a révolutionné son économie. Dans cette série palpitante, suivez les péripéties de Guézo et découvrez ses initiatives bienveillantes, son courage et sa détermination à protéger son peuple.</p>
                    <div className="py-2">
                        <ComixFeature value="354 Pages" icon={listIcon} ></ComixFeature>
                        <ComixFeature value="80 % d’illustrations" icon={listIcon}></ComixFeature>
                        <ComixFeature value="Publié le : 12 Janvier 2016" icon={listIcon}></ComixFeature>
                    </div>
                    <div className="mt-6 montserrat-medium">
                        <button className='block w-3/4 px-6 py-3 mx-auto my-3 text-black bg-orange md:w-full'>Commencer la lecture</button>    
                        <button className='block w-3/4 px-6 py-3 mx-auto my-3 border border-blue-500 mobile-border-blue mobile-text-color-blue md:w-full'>Ajouter au favoris</button>    
                    </div>
                </div>
            </section>
            <article className="px-3 md:px-10">
                <h3 className="py-4 text-xl montserrat-bold">Synopsis</h3>
                <p className="text-justify md:w-2/3 montserrat-regular ">
                    Plongez dans les récits captivants des aventures de Guézo, un roi béninois qui a marqué l'histoire de son royaume par son leadership visionnaire. À travers les pages de cette bande dessinée, découvrez les hauts faits de Guézo, de ses batailles pour l'indépendance de son royaume à ses efforts pour révolutionner l'économie locale. Suivez Guézo dans ses quêtes pour protéger son peuple contre les forces adverses, tout en défendant les valeurs de l'honneur, de la justice et de la prospérité. Avec sa bravoure, sa sagesse et sa vision, Guézo est un héros inspirant dont les aventures vous transporteront dans un monde d'action, d'intrigue et d'émotions fortes.
                </p>
                <div className="flex flex-wrap my-10 md:justify-around md:w-1/3">
                    <Tags value="Action"></Tags>
                    <Tags value="Fantasy"></Tags>
                    <Tags value="Aventure"></Tags>
                    <Tags value="Historique"></Tags>
                </div>
            </article>
            <section className="my-16 ">
                <h3 className="px-10 text-xl montserrat-bold">Bandes dessinés de la même catégories</h3>
                <div className='flex my-10 justify-evenly mobile-block '>
                    <div className='flex justify-center mobile-mb-40'>
                        <BDCard img={BDGuezo} title='Les Aventures de Guézo' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' url='/bd/1' />
                    </div>
                    <div className='flex justify-center '>
                        <BDCard img={BDTolegba} title='Le Roi Tolègba' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' url='/bd/2' />
                    </div>
                    <div className='flex justify-center mobile-mb-40'>
                        <BDCard img={BDPygmes} title='Les pygmées mystérieux' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' url='/bd/3' />
                    </div>
                </div>
                <div className='hidden my-10 md:flex justify-evenly '>
                    <div className='flex justify-center '>
                        <BDCard img={BDPanthere} title='Le Roi Panthere' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' url='/bd/4' />
                    </div>
                    <div className='flex justify-center '>
                        <BDCard img={BDTolegba} title='Le Roi Tolègba' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' url='/bd/2' />
                    </div>
                    <div className='flex justify-center mobile-mb-40'>
                        <BDCard img={BDGuezo} title='Les Aventures de Guézo' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' url='/bd/1' />
                    </div>
                </div>
            </section>
        </div>
    )
}
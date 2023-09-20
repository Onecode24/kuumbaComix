import ComixFeature from "../components/global/comixFeature";
import Cover from "../assets/bd-guezo.png"; 
import '../styles/index.css'
export default function ComixView(){
    return(
        <div className="">
            <section className="md:flex md:w-full">
                <div className="flex items-center justify-center md:w-2/3">
                    <img src={Cover} alt="comix-cover" className="md:h-[60vh]" />
                </div>
                <div className="px-3 py-5 md:w-1/3">
                    <h3 className="text-xl montserrat-bold">Les Aventures de Guézo</h3>
                    <p className="montserrat-medium">Description : "Les Aventures de Guézo" est une bande dessinée qui s'inspire du roi béninois Guézo, un souverain remarquable qui a lutté pour garder l'indépendance de son royaume et a révolutionné son économie. Dans cette série palpitante, suivez les péripéties de Guézo et découvrez ses initiatives bienveillantes, son courage et sa détermination à protéger son peuple.</p>
                    <div className="py-2">
                        <ComixFeature value="354 Pages"></ComixFeature>
                        <ComixFeature value="80 % d’illustrations"></ComixFeature>
                        <ComixFeature value="Publié le : 12 Janvier 2016"></ComixFeature>
                    </div>
                    <div className="mt-6 montserrat-medium">
                        <button className='block w-3/4 px-6 py-3 mx-auto my-3 text-black bg-orange md:w-full'>Commencer la lecture</button>    
                        <button className='block w-3/4 px-6 py-3 mx-auto my-3 border border-blue-500 mobile-border-blue mobile-text-color-blue md:w-full'>Ajouter au favoris</button>    
                    </div>
                </div>
            </section>
            <article className="px-3">
                <h3 className="py-4 text-xl montserrat-bold">Synopsis</h3>
                <p>
                    Plongez dans les récits captivants des aventures de Guézo, un roi béninois qui a marqué l'histoire de son royaume par son leadership visionnaire. À travers les pages de cette bande dessinée, découvrez les hauts faits de Guézo, de ses batailles pour l'indépendance de son royaume à ses efforts pour révolutionner l'économie locale. Suivez Guézo dans ses quêtes pour protéger son peuple contre les forces adverses, tout en défendant les valeurs de l'honneur, de la justice et de la prospérité. Avec sa bravoure, sa sagesse et sa vision, Guézo est un héros inspirant dont les aventures vous transporteront dans un monde d'action, d'intrigue et d'émotions fortes.
                </p>
            </article>
        </div>
    )
}
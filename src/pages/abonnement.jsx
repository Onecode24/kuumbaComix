import ComixFeature from "../components/global/comixFeature"
import blueCheck from "../assets/icons/check-blue.svg"
import grayCross from "../assets/icons/cross-gray.svg"
import whiteCheck from "../assets/icons/check-white.svg"
import "../styles/index.css"


const Abonnement = () => {
    return (
        <main>
            <div className="patternBG md:py-20  py-10 text-center">
                <div className="md:w-1/2 mx-auto px-5 md:px-3 ">
                    <h1 className="montserrat-black md:text-4xl text-3xl">Débloque encore plus d’histoire insteressante</h1>
                    <p className="montserrat-regular my-5">Condimentum fusce sit mi lorem posuere mattis diam. Ut eget tempus aliquet ut. Tincidunt aliquet eu dui venenatis scelerisque in eget donec mattis. Rhoncus purus ac ornare quam cursus semper. Faucibus malesuada </p>
                </div>
            </div>
            <section id="pricing">
                <div className="md:flex my-10 px-10 justify-around">
                    {/* Fisrt offer */}
                    <div className="w-full shadow-xl pricing-card-width h-min my-5">
                        <div className="px-3">
                            <div className="">
                                <h3 className="text-3xl py-5 montserrat-bold text-orange">Standart</h3>
                                <p className="text-gray-ligth montserrat-regular md:w-4/5 text-sm">
                                    <span className="text-gray-975 text-base">Lecture limité</span> <br />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies cursus
                                </p>
                            </div>
                            <div className=" mb-5 mt-10">
                                <p className="text-3xl montserrat-bold">1000 FCFA <span className="montserrat-light text-base">/mois</span></p>
                            </div>
                            <div className="py-3">
                                <button className="block poppins-regular  px-6 py-3 mx-auto my-3 text-orange border-orange bg-white w-full">Souscrire à cette offre</button>
                            </div>
                            <div className="pricing-feature text-sm pb-10">
                                <ComixFeature value="10 Livres" icon={blueCheck}></ComixFeature>
                                <ComixFeature value="Notation de bande dessiné" icon={blueCheck}></ComixFeature>
                                <ComixFeature value="Participation à des évènements de la communauté" icon={grayCross}></ComixFeature>
                                <ComixFeature value="Lecture hors-ligne" icon={grayCross}></ComixFeature>
                                <ComixFeature value="Lecture de livre en avant première" icon={grayCross}></ComixFeature>
                            </div>
                        </div>
                    </div>
                    {/* Second offer */}
                    <div className="w-full shadow-xl pricing-card-width bg-blue my-5 mt-[-15px]">
                        <div className="px-3 md:py-10 text-white">
                            <div className="">
                                <h3 className="text-3xl py-5 montserrat-bold ">Acces +</h3>
                                <p className=" montserrat-regular md:w-4/5 text-sm">
                                    <span className=" text-base">Lecture limité</span> <br />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies cursus
                                </p>
                            </div>
                            <div className=" mb-5 mt-10">
                                <p className="text-3xl montserrat-bold">2000 FCFA <span className="montserrat-light text-base">/mois</span></p>
                            </div>
                            <div className="py-3">
                                <button className="block poppins-regular px-6 py-3 mx-auto my-3 text-orange bg-white md:w-full">Souscrire à cette offre</button>
                            </div>
                            <div className="pricing-feature text-sm pb-10">
                                <ComixFeature value="20 Livres" icon={whiteCheck}></ComixFeature>
                                <ComixFeature value="Notation de bande dessiné" icon={whiteCheck}></ComixFeature>
                                <ComixFeature value="Participation à des évènements de la communauté" icon={whiteCheck}></ComixFeature>
                                <ComixFeature value="Lecture hors-ligne" icon={whiteCheck}></ComixFeature>
                                <ComixFeature value="Lecture de livre en avant première" icon={grayCross}></ComixFeature>
                            </div>
                        </div>
                    </div>
                    {/* Third offer */}
                    <div className="w-full shadow-xl pricing-card-width h-min my-5">
                        <div className="px-3">
                            <div className="">
                                <h3 className="text-3xl py-5 montserrat-bold text-orange">Royal</h3>
                                <p className="text-gray-ligth montserrat-regular md:w-4/5 text-sm">
                                    <span className="text-gray-975 text-base">Full lecture</span> <br />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies cursus
                                </p>
                            </div>
                            <div className=" mb-5 mt-10">
                                <p className="text-3xl montserrat-bold">3000 FCFA <span className="montserrat-light text-base">/mois</span></p>
                            </div>
                            <div className="py-3">
                                <button className="block poppins-regular px-6 py-3 mx-auto my-3 text-orange border-orange bg-white md:w-full">Souscrire à cette offre</button>
                            </div>
                            <div className="pricing-feature text-sm pb-10">
                                <ComixFeature value="Illimité" icon={blueCheck}></ComixFeature>
                                <ComixFeature value="Notation de bande dessiné" icon={blueCheck}></ComixFeature>
                                <ComixFeature value="Participation à des évènements de la communauté" icon={blueCheck}></ComixFeature>
                                <ComixFeature value="Lecture hors-ligne" icon={blueCheck}></ComixFeature>
                                <ComixFeature value="Lecture de livre en avant première" icon={blueCheck}></ComixFeature>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="faq" className="mb-10">
                <h2 className="montserrat-black text-xl text-center">Foire aux questions</h2>
            </section>
        </main>
        
    )
}

export default Abonnement
import ComixFeature from "../components/global/comixFeature"
import blueCheck from "../assets/icons/check-blue.svg"
import grayCross from "../assets/icons/cross-gray.svg"
import whiteCheck from "../assets/icons/check-white.svg"
import "../styles/index.css"
import FAQComponent from "../components/abonnement/FAQComponent"

const Abonnement = () => {
    return (
        <main>
            <div className="py-10 text-center patternBG md:py-20">
                <div className="px-5 mx-auto md:w-1/2 md:px-3 ">
                    <h1 className="text-3xl montserrat-black md:text-4xl">Débloque encore plus d’histoire insteressante</h1>
                    <p className="my-5 montserrat-regular">Condimentum fusce sit mi lorem posuere mattis diam. Ut eget tempus aliquet ut. Tincidunt aliquet eu dui venenatis scelerisque in eget donec mattis. Rhoncus purus ac ornare quam cursus semper. Faucibus malesuada </p>
                </div>
            </div>
            <section id="pricing">
                <div className="justify-around px-10 my-10 md:flex">
                    {/* Fisrt offer */}
                    <div className="w-full my-5 shadow-xl pricing-card-width h-min">
                        <div className="px-3">
                            <div className="">
                                <h3 className="py-5 text-3xl montserrat-bold text-orange">Standart</h3>
                                <p className="text-sm text-gray-ligth montserrat-regular md:w-4/5">
                                    <span className="text-base text-gray-975">Lecture limité</span> <br />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies cursus
                                </p>
                            </div>
                            <div className="mt-10 mb-5 ">
                                <p className="text-3xl montserrat-bold">1000 FCFA <span className="text-base montserrat-light">/mois</span></p>
                            </div>
                            <div className="py-3">
                                <button className="block w-full px-6 py-3 mx-auto my-3 bg-white poppins-regular text-orange border-orange">Souscrire à cette offre</button>
                            </div>
                            <div className="pb-10 text-sm pricing-feature">
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
                        <div className="px-3 text-white md:py-10">
                            <div className="">
                                <h3 className="py-5 text-3xl montserrat-bold ">Acces +</h3>
                                <p className="text-sm montserrat-regular md:w-4/5">
                                    <span className="text-base ">Lecture limité</span> <br />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies cursus
                                </p>
                            </div>
                            <div className="mt-10 mb-5 ">
                                <p className="text-3xl montserrat-bold">2000 FCFA <span className="text-base montserrat-light">/mois</span></p>
                            </div>
                            <div className="py-3">
                                <button className="block px-6 py-3 mx-auto my-3 bg-white poppins-regular text-orange md:w-full">Souscrire à cette offre</button>
                            </div>
                            <div className="pb-10 text-sm pricing-feature">
                                <ComixFeature value="20 Livres" icon={whiteCheck}></ComixFeature>
                                <ComixFeature value="Notation de bande dessiné" icon={whiteCheck}></ComixFeature>
                                <ComixFeature value="Participation à des évènements de la communauté" icon={whiteCheck}></ComixFeature>
                                <ComixFeature value="Lecture hors-ligne" icon={whiteCheck}></ComixFeature>
                                <ComixFeature value="Lecture de livre en avant première" icon={grayCross}></ComixFeature>
                            </div>
                        </div>
                    </div>
                    {/* Third offer */}
                    <div className="w-full my-5 shadow-xl pricing-card-width h-min">
                        <div className="px-3">
                            <div className="">
                                <h3 className="py-5 text-3xl montserrat-bold text-orange">Royal</h3>
                                <p className="text-sm text-gray-ligth montserrat-regular md:w-4/5">
                                    <span className="text-base text-gray-975">Full lecture</span> <br />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies cursus
                                </p>
                            </div>
                            <div className="mt-10 mb-5 ">
                                <p className="text-3xl montserrat-bold">3000 FCFA <span className="text-base montserrat-light">/mois</span></p>
                            </div>
                            <div className="py-3">
                                <button className="block px-6 py-3 mx-auto my-3 bg-white poppins-regular text-orange border-orange md:w-full">Souscrire à cette offre</button>
                            </div>
                            <div className="pb-10 text-sm pricing-feature">
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
                <h2 className="text-xl text-center montserrat-black">Foire aux questions</h2>
                <div className="px-5 mx-auto md:px-0 md:w-4/5">
                <FAQComponent question="Est-ce que je peux me désabonner à tout moment" answer=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, laboriosam soluta dolorum possimus minus deserunt quis laborum sapiente corrupti eius nisi eveniet illo aliquid excepturi at odit officiis veniam! Nihil. Minus, et! Nam, accusantium." />
                <FAQComponent question="Est-ce que je peux me désabonner à tout moment" answer=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, laboriosam soluta dolorum possimus minus deserunt quis laborum sapiente corrupti eius nisi eveniet illo aliquid excepturi at odit officiis veniam! Nihil. Minus, et! Nam, accusantium." />
                </div>
            </section>
        </main>
        
    )
}

export default Abonnement
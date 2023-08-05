import Input from '../components/global/Input'
import '../styles/index.css' 
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div className='bg-viewport patternBG flex items-center centerCard pl-10 '>
            <div className='w-1/2 bg-white py-5 px-10 respCard '>
                <h2 className='text-3xl montserrat-bold'>Connection</h2>

                <form action="" className='my-10'>
                    {/* <div className='flex justify-between'>
                        <div className='w-[45%]'>
                            <Input type='text' label="Nom" name="lastname" />
                        </div>
                        <div className='w-[45%]'>
                            <Input type='text' label="Prénoms" name="firstname" />
                        </div>
                    </div> */}
                    <div className='my-5'>
                        <Input type='email' label="Adress e-mail" name="email" />
                    </div>
                    <div>
                        <Input type='password' label="Mot de passe" name="password" />
                    </div>
                    <div className='flex my-5 justify-between montserrat-regular'>
                        <div>
                            <input type="checkbox" name="remenber-me" id="remenber-me" />
                            <span className='px-2'>Se souvenir de moi</span>
                        </div>
                        <p>
                            <Link >Mot de passe oublié</Link>
                        </p>
                    </div>
                    {/* <div className='my-5'>
                        <Input type='password' label="Confirmer mot de passe" name="password" />
                    </div> */}
                    <input type="button" value="Se connecter" className='montserrat-medium py-3 w-full bg-orange text-lg cursor-pointer' />
                    <p className='text-gris montserrat-regular py-2 text-center'>Vous n'avez pas un compte?
                        <span className='text-orange'>
                            <Link to="/signin"> S'inscrire</Link>
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
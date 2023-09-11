import React, { useState } from 'react';
import Input from '../components/global/Input'
import '../styles/index.css'
import { Link} from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://143.198.201.85/api/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Extrayez les données JSON de la réponse
        const data = await response.json();
    
        if (data.access) {
            // Sauvegarde du jeton côté utilisateur
            localStorage.setItem('tokenkumba', data.access);
            // Le formulaire a été soumis avec succès, redirigez l'utilisateur
            alert('Vous êtes maintenant connecté et le token est crée');
            // Redirigez l'utilisateur vers la page de son choix après la connexion réussie
            
          } else {
            // Gérez les cas où la réponse ne contient pas de jeton
            console.error('La réponse ne contient pas de jeton.');
          }
      } else {
        // Gérez les erreurs ici, par exemple, affichez un message d'erreur à l'utilisateur
        setErrorMessage("Email ou mot de passe incorrect.");
      }
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire', error);
    }
  };

  return (
    <div className='bg-viewport patternBG flex items-center centerCard pl-10 '>
      <div className='w-1/2 bg-white py-5 px-10 respCard '>
        <h2 className='text-3xl montserrat-bold'>Connexion</h2>

        <form onSubmit={handleSubmit} className='my-10'>
          {errorMessage && (
            <p className='text-red-600 text-sm'>{errorMessage}</p>
          )}
          <div className='my-5'>
            <Input
              type='text'
              label="Nom d'utilisateur"
              name="username"
              required={true}
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Input
              type='password'
              label="Mot de passe"
              name="password"
              required={true}
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className='flex my-5 justify-between montserrat-regular'>
            <div>
              <input type="checkbox" name="remember-me" id="remember-me" />
              <span className='px-2'>Se souvenir de moi</span>
            </div>
            <p>
              <Link to='/forgot-password'>Mot de passe oublié</Link>
            </p>
          </div>
          <input type="submit" value="Se connecter" className='montserrat-medium py-3 w-full bg-orange text-lg cursor-pointer' />
          <p className='text-gris montserrat-regular py-2 text-center'>Vous n'avez pas de compte?
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

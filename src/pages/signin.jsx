import React, { useState} from 'react';
import Input from '../components/global/Input';
import '../styles/index.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
  // État local pour stocker les valeurs du formulaire
  const [formData, setFormData] = useState({
    last_name: '',
    first_name: '',
    email: '',
    password: '',
    username: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  // Fonction de gestion des changements de saisie dans les champs du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérifiez si les deux mots de passe sont identiques
    if (formData.password.trim() !== formData.confirmPassword.trim()) {
      setErrorMessage("Les mots de passe ne correspondent pas.");
      return; // Arrêtez la soumission du formulaire si les mots de passe ne correspondent pas
    }

    // Définissez le champ 'username' avec la valeur de 'email'
    formData.username = formData.email;

    try {
      // Utilisez la fonction fetch pour envoyer les données du formulaire à votre endpoint
      const response = await fetch('https://kuumbacomix.com/api/user/', {
        method: 'POST', // ou 'PUT' ou 'PATCH' en fonction de votre API
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Le formulaire a été soumis avec succès, redirigez ou effectuez d'autres actions ici
       alert('Formulaire soumis avec succes');
      } else {
        // Gérez les erreurs ici, par exemple, affichez un message d'erreur à l'utilisateur
        setErrorMessage('Cet utilisateur existe déjà !');
      }
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire', error);
    }
  };

  return (
    <div className='bg-viewport patternBG flex items-center centerCard pl-10 '>
      <div className='w-1/2 bg-white py-5 px-10 respCard '>
        <h2 className='text-3xl montserrat-bold'>Créer votre compte</h2>

        <form onSubmit={handleSubmit} className='my-10'>
          <div className='flex justify-between'>
            <div className='w-[45%]'>
              <Input
                type='text'
                label='Nom'
                name='last_name'
                required={true}
                value={formData.last_name}
                onChange={handleInputChange}
              />
            </div>
            <div className='w-[45%]'>
              <Input
                type='text'
                label='Prénoms'
                name='first_name'
                required={true}
                value={formData.first_name}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className='my-5'>
            <Input
              type='email'
              label='Adresse e-mail'
              name='email'
              required={true}
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Input
              type='password'
              label='Mot de passe'
              name='password'
              required={true}
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className='my-5'>
            <Input
              type='password'
              label='Confirmer mot de passe'
              name='confirmPassword'
              required={true}
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </div>
          {errorMessage && (
            <p className='text-red-600 text-sm'>{errorMessage}</p>
          )}
          <button
            type='submit'
            className='montserrat-medium py-3 w-full bg-orange text-lg cursor-pointer'
          >
            S'inscrire
          </button>
          <p className='text-gris montserrat-regular py-2 text-center'>
            Vous avez déjà un compte?
            <span className='text-orange'>
              <Link to='/login'> Se connecter</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

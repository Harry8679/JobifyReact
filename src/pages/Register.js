import React, { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: false,
    showAlert: false
}

const Register = () => {
  const [values, setValues] = useState(initialState);
  // Global state and useNavigate

  const handleChange = (e) => {
    console.log(e.target);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  }

  const toogleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  }
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={handleSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Connexion' : 'Inscription'}</h3>
        {values.showAlert && <Alert />}
        {/* name input */}
        {!values.isMember && (    
        <FormRow 
            type='text' name='name'
            value={values.name}
            handleChange={handleChange}
            labelText='Nom'
        />
        )}

        {/* email input */}
        <FormRow 
            type='email' name='email'
            value={values.email}
            handleChange={handleChange}
            labelText='Email'
        />

        {/* password input */}
        <FormRow 
            type='password' name='password'
            value={values.password}
            handleChange={handleChange}
            labelText='Mot de passe'
        />
        <button type='submit' className='btn btn-block'>Valider</button>

        <p>
            {values.isMember ? 'Vous n\'avez pas encore de compte ?' : 'Avez-vous un compte ?'}
            <button type='button' onClick={toogleMember} className='member-btn'>
                {values.isMember ? 'Inscription' : 'Connexion'}
            </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register

import React from 'react';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <Wrapper>
      <div>
        <img src={img} alt="Not Found" />
        <h3>Oooo ! Damn it, Page Non Trouvée</h3>
        <p>Nous n'avons pas réussi à trouver la page que vous demandez, vous pouvez revenir à la</p>
        <Link to='/'>Page d'accueil</Link>
      </div>
    </Wrapper>
  )
}

export default Error;

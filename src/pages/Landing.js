import React from 'react';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo />
        </nav>
        <div className="container page">
            <div className="info">
                <h1>Application de <span>Recherche</span> d'Emplois</h1>
                <p>
                    Vous êtes quelqu'un de motivé, de régulier qui ne fléchit devant rien et qui n'a pas peur d'apprendre ?
                    Ce site est fait pour vous. Vous trouvez votre bonheur parmi nos offres.
                    N'hésitez pas à vous préparer au mieux pour vos entretiens afin de trouver le travail parfait à votre stature.
                </p>
                <Link to='/inscription' className='btn btn-hero'>Inscription/Connexion</Link>
            </div>
            <img src={main} alt="Sprint vers le travail" className='img main-img' />
        </div>
    </Wrapper>
  )
}



export default Landing;

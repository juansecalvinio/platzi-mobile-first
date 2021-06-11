import React from 'react'
import { HeaderContainer } from './styled';
import logoSvg from './../../assets/img/logo.svg';

const Header = () => {
    return (
        <HeaderContainer>
            <img src={logoSvg} alt="logo" />
            <div className="header--title-container">
                <h1>La próxima revolución en el intercambio de cryptomonedas</h1>
                <p>Batatabit te ayuda a navegar entre los diferentes precios y tendencias.</p>
                <a href="." className="header--button">
                    Conoce nuestros planes <span></span>
                </a>
            </div>
        </HeaderContainer>
    )
}

export default Header;

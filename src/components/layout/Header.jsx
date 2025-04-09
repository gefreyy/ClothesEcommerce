import { Link } from 'react-router-dom';
import './Header.css';
import { useEffect, useState } from 'react';

export default function Header() {
    // isMenuOpen es una variable booleana que indica si el menu esta abierto o cerrado, es decir, true o false
    // setIsMenuOpen es una funcion que cambia el estado del isMenuOpen
    // useState permite cambiar el estado de este
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev)
    };

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }, [isMenuOpen]);

    return (
        <header id='header-section'>
            <button onClick={toggleMenu} className='hamburguer-button'><img src="../src/assets/img/hamburguer-menu-icon.png" alt="hamburguer-button-icon" /></button>
            <div className={isMenuOpen ? 'lateral-menu open' : 'lateral-menu'}>
                <div className="menu-top">
                    <h1>Fortnite Shop</h1>
                    <button className='close-btn' onClick={toggleMenu}><img src="../src/assets/img/close-icon.png" alt="close-icon" /></button>
                </div>
                <ul>
                    <li><Link className='home-li link-menu' to="/">Inicio</Link></li>
                    <li><Link className='products-li link-menu' to="/products">Productos</Link></li>
                    <li><Link className='contact-li link-menu' to="/contact">Contacto</Link></li>
                    <li><Link className='about-li link-menu' to="/about-us">Sobre Nosotros</Link></li>
                </ul>
            </div>

            <a href="#"><img className='logo-img' src="../src/assets/img/lorem-lorem.svg" alt="logo-shop" /></a>
            <nav>
                <ul>
                <li>
                    <Link className='home-li link' to="/">Inicio</Link></li>
                    <li><Link className='products-li link' to="/products">Productos</Link></li>
                    <li><Link className='contact-li link' to="/contact">Contacto</Link></li>
                    <li><Link className='about-li link' to="/about-us">Sobre Nosotros</Link></li>
                </ul>
            </nav>
            <div className="options-icons">
                <a href="#" className='icon-header'><img src="../src/assets/img/search-icon.png" alt="search-icon" /></a>
                <a href="#" className='icon-header'><img src="../src/assets/img/user-icon.png" alt="user-icon" /></a>
                <a href='#' className='icon-header'><img src="../src/assets/img/shopping-cart-icon.png" alt="shopping-cart-icon" /></a>
            </div>
        </header>
    )
}
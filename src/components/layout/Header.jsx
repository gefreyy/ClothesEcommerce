import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import { useEffect, useState } from 'react';

export default function Header({setSearchTerm}) {
    // isMenuOpen es una variable booleana que indica si el menu esta abierto o cerrado, es decir, true o false
    // setIsMenuOpen es una funcion que cambia el estado del isMenuOpen
    // useState permite cambiar el estado de este
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(true)

    const navigate = useNavigate();
    const location = useLocation();
    const searchParameters = new URLSearchParams(location.search)
    const [localSearchTerm, setLocalSearchTerm] = useState(searchParameters.get('q') || '')

    useEffect(() => {
        const searchQuery = searchParameters.get('q') || ''
        setLocalSearchTerm(searchQuery)
        if(setSearchTerm) {
            setSearchTerm(searchQuery)
        }
    }, [location.search, setSearchTerm])

    const handleSearch = (e) => {
        if(localSearchTerm.trim()) {
            // if(setSearchTerm) {
            //     setSearchTerm(localSearchTerm.trim())
            // }
            navigate(`/products?q=${encodeURIComponent(localSearchTerm.trim())}`)
        } 
    };

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev)
    };

    const toggleSearch = () => {
        setIsSearchOpen(prev => !prev)
    }

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }, [isMenuOpen]);

    return (
        <header id='header-section'>
            
            <button onClick={toggleMenu} className='hamburguer-button'><img src="src/assets/img/hamburguer-menu-icon.png" alt="hamburguer-button-icon" /></button>
            <div className={isMenuOpen ? 'lateral-menu open' : 'lateral-menu'}>
                <div className="menu-top">
                    <h1>Fortnite Shop</h1>
                    <button className='close-btn' onClick={toggleMenu}><img src="src/assets/img/close-icon.png" alt="close-icon" /></button>
                </div>
                <ul>
                    <li><Link className='home-li link-menu' to="/">Inicio</Link></li>
                    <li><a className='products-li link-menu' href="/products">Productos</a></li>
                    <li><Link className='contact-li link-menu' to="/contact">Contacto</Link></li>
                    <li><Link className='about-li link-menu' to="/about-us">Sobre Nosotros</Link></li>
                </ul>
            </div>

            <a href="#"><img className='logo-img' src="src/assets/img/lorem-lorem.svg" alt="logo-shop" /></a>
            <nav className={isSearchOpen ? 'nav-menu show' : 'nav-menu hide'}>
                <ul>
                <li>
                    <Link className='home-li link' to="/">Inicio</Link></li>
                    <li><a className='products-li link' href="/products">Productos</a></li>
                    <li><Link className='contact-li link' to="/contact">Contacto</Link></li>
                    <li><Link className='about-li link' to="/about-us">Sobre Nosotros</Link></li>
                </ul>
            </nav>
            <div className="options-icons">
                <button onClick={toggleSearch} className={isSearchOpen ? 'close-search hide' : 'close-search show'}>×</button>
                <button onClick={toggleSearch} className={isSearchOpen ? 'button-search show' : 'button-search hide'}><img src="src/assets/img/search-icon.png" alt="search-icon" /></button>
                <div className={isSearchOpen ? 'search-input hide' : 'search-input show'}>
                    <input 
                        type="text"
                        value={localSearchTerm}
                        onChange={(e) => setLocalSearchTerm(e.target.value)}
                        onKeyDown={(e) => {
                            if(e.key === 'Enter') {                               
                                handleSearch();
                            }
                        }}/>
                </div>
                <Link to="/login" className='icon-header'><img src="src/assets/img/user-icon.png" alt="user-icon" /></Link>
                <Link href='#' className='icon-header'><img src="src/assets/img/shopping-cart-icon.png" alt="shopping-cart-icon" /></Link>
            </div>
        </header>
    )
}
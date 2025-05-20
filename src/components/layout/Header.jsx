import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import { useEffect, useState } from 'react';

export default function Header({search}) {
    // isMenuOpen es una variable booleana que indica si el menu esta abierto o cerrado, es decir, true o false
    // setIsMenuOpen es una funcion que cambia el estado del isMenuOpen
    // useState permite cambiar el estado de este
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(true);

    // Pa que luego el componente no renderice mientras el valor del search term cambia
    const [localSearchTerm, setLocalSearchTerm] = useState('')

    const navigate = useNavigate();
    // const location = useLocation();
    // const searchParameters = new URLSearchParams(location.search)
    // const [localSearchTerm, setLocalSearchTerm] = useState(searchParameters.get('q') || '')

    // useEffect(() => {
    //     const searchQuery = searchParameters.get('q') || ''
    //     setLocalSearchTerm(searchQuery)
    //     if(setSearchTerm) {
    //         setSearchTerm(searchQuery)
    //     }
    // }, [location.search, setSearchTerm])

    // const handleSearch = (e) => {
    //     if(localSearchTerm === '') {
    //         navigate(`/products`)
    //     } else {
    //         navigate(`/products?q=${encodeURIComponent(localSearchTerm.trim())}`)
    //     } 
    // };

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
            
            <button onClick={toggleMenu} className='hamburguer-button'><img src="/img/hamburguer-menu-icon.png" alt="hamburguer-button-icon" /></button>
            <div className={isMenuOpen ? 'lateral-menu open' : 'lateral-menu'}>
                <div className="menu-top">
                    <h1>Fortnite Shop</h1>
                    <button className='close-btn' onClick={toggleMenu}><img src="/img/close-icon.png" alt="close-icon" /></button>
                </div>
                <ul>
                    <li><Link className='home-li link-menu' to="/">Inicio</Link></li>
                    <li><Link className='products-li link-menu' to={`/products?p=1`}>Productos</Link></li>
                    <li><Link className='contact-li link-menu' to="/contact">Contacto</Link></li>
                    <li><Link className='about-li link-menu' to="/about-us">Sobre Nosotros</Link></li>
                </ul>
            </div>

            <a href="#"><img className='logo-img' src="/img/lorem-lorem.svg" alt="logo-shop" /></a>
            <nav className={isSearchOpen ? 'nav-menu show' : 'nav-menu hide'}>
                <ul>
                    <li><Link className='home-li link' to="/">Inicio</Link></li>
                    <li><Link className='products-li link' to={`/products?p=1`}>Productos</Link></li>
                    <li><Link className='contact-li link' to="/contact">Contacto</Link></li>
                    <li><Link className='about-li link' to="/about-us">Sobre Nosotros</Link></li>
                </ul>
            </nav>
            <div className="options-icons">
                <button onClick={toggleSearch} className={isSearchOpen ? 'close-search hide' : 'close-search show'}>×</button>
                <button onClick={toggleSearch} className={isSearchOpen ? 'button-search show' : 'button-search hide'}><img src="/img/search-icon.png" alt="search-icon" /></button>
                <div className={isSearchOpen ? 'search-input hide' : 'search-input show'}>
                    <input 
                        type="text"
                        value={localSearchTerm}
                        onChange={(e) => setLocalSearchTerm(e.target.value)}
                        onKeyDown={(e) => {
                            if(e.key === 'Enter') {
                                // Primero, guarda el valor actual (antes de limpiarlo)
                                const currentSearchTerm = localSearchTerm.trim();
                                
                                // Actualiza la UI
                                setIsSearchOpen(true);
                                
                                // Navega según corresponda
                                if(currentSearchTerm === '') {
                                    navigate(`/products?p=1`);
                                } else {
                                    navigate(`/products?p=1&q=${encodeURIComponent(currentSearchTerm)}`);
                                    
                                    // Llama a search con el valor actual
                                    if (typeof search === 'function') {
                                        search(currentSearchTerm);
                                    }
                                }
                                
                                // Finalmente, limpia el input
                                setLocalSearchTerm('');
                            }
                        }}/>
                </div>
                <Link to="/login" className='icon-header'><img src="/img/user-icon.png" alt="user-icon" /></Link>
                <Link to="/cart" className='icon-header'><img src="/img/shopping-cart-icon.png" alt="shopping-cart-icon" /></Link>
            </div>
        </header>
    )
}
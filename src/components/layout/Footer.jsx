import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer id="footer-section">
      <div className="footer-top">
        <div className="footer-desc-nav-container">
          <div className="footer-desc">
            <img src="/img/store.png" alt="store-icon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quis assumenda consequatur corrupti aut beatae iste nam corporis, modi ullam harum, mollitia ducimus, velit voluptatem inventore doloribus minima magnam commodi!</p>
          </div>
          <div className="footer-nav">
            <h3>Navegación</h3>
            <nav>
              <ul>
                <li><Link className='home-li link-menu' to="/">Inicio</Link></li>
                <li><Link className='contact-li link-menu' to="/contact">Contacto</Link></li>
                <li><Link className='about-li link-menu' to="/about-us">Sobre Nosotros</Link></li>
                <li><Link className='tos-li link-menu' to="/tos">Terminos y condiciones</Link></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="footer-contact">
          <div className="footer-contact-us-section">
              <h3>Comunicate con nosotros</h3>
              <div className="contact">
                <div className="ways-to-contact">
                  <img src="/img/phone-call-icon.png" alt="phone-call-icon" />
                  <span>+51 999 999 999</span>
                </div>
                <div className="ways-to-contact">
                  <img src="/img/email-icon.png" alt="phone-call-icon" /> 
                  <span>tienda@gmail.com</span>
                </div>
              </div>
            </div>
          </div> 
      </div>
      
      <div className="footer-social">
        <div className="social-icons">
          <a href="#"><img src="/img/facebook-icon.png" alt="facebook-icon" /></a>
          <a href="#"><img src="/img/instagram-icon.png" alt="instagram-icon" /></a>
          <a href="#"><img src="/img/tik-tok-icon.png" alt="tik-tok-icon" /></a>
        </div>
      </div>
      <div className="copyright">
        Copyright © Tienda 2025, All rights reserved
      </div>
    </footer>
  );
}
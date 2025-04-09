import './Footer.css'

export default function Footer() {
  return (
    <footer id="footer-section">
      <div className="footer-top">
        <div className="footer-desc-nav-container">
          <div className="footer-desc">
            <img src="../src/assets/img/store.png" alt="store-icon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quis assumenda consequatur corrupti aut beatae iste nam corporis, modi ullam harum, mollitia ducimus, velit voluptatem inventore doloribus minima magnam commodi!</p>
          </div>
          <div className="footer-nav">
            <h3>Navegación</h3>
            <nav>
              <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Empresa</a></li>
                <li><a href="#">Contáctanos</a></li>
                <li><a href="#">Sobre Nosotros</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="footer-contact">
          <div className="footer-contact-us-section">
              <h3>Comunicate con nosotros</h3>
              <div className="contact">
                <div className="ways-to-contact">
                  <img src="../src/assets/img/phone-call-icon.png" alt="phone-call-icon" />
                  <span>+51 999 999 999</span>
                </div>
                <div className="ways-to-contact">
                  <img src="../src/assets/img/email-icon.png" alt="phone-call-icon" /> 
                  <span>tienda@gmail.com</span>
                </div>
              </div>
            </div>
          </div> 
      </div>
      
      <div className="footer-social">
        <div className="social-icons">
          <a href="#"><img src="../src/assets/img/facebook-icon.png" alt="facebook-icon" /></a>
          <a href="#"><img src="../src/assets/img/instagram-icon.png" alt="instagram-icon" /></a>
          <a href="#"><img src="../src/assets/img/tik-tok-icon.png" alt="tik-tok-icon" /></a>
        </div>
      </div>
      <div className="copyright">
        Copyright © Tienda 2025, All rights reserved
      </div>
    </footer>
  );
}
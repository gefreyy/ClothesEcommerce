import './RegisterBody.css'
import { Link } from 'react-router-dom'

export default function RegisterBody() {
    return(
        <section id="register-body">
            <div className="register-img-container">
                <img src="https://images.unsplash.com/photo-1734262399619-e28d4a9cc10f?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="register-img" />
            </div>
            <div className="register-form-container">
                <Link className="back-to-login" to="/login">◄ Volver</Link>
                <Link className="reg-back-to-home" to="/">Ir al inicio ►</Link>
                <div className="register-top-text">
                    <h1>Crear cuenta</h1>
                    <p>Cree una cuenta para poder realizar compras</p>
                </div>
                <form action="">
                    <div className="name-register-container box">
                        <label htmlFor="names">Nombre(s)</label>
                        <input type="text" name="name" id="names" placeholder='Introduzca su nombre...' required />
                    </div>
                    <div className="lastname-register-container box">
                        <label htmlFor="lastname">Apellidos</label>
                        <input type="text" name='lastname' id='lastname' placeholder='Introduzca sus apellidos...' required />
                    </div>
                    <div className="username-register-container box">
                        <label htmlFor="username">Usuario</label>
                        <input type="text" name='username' id='username' placeholder="Introduzca un usuario..." required />
                    </div>
                    <div className="email-register-container box">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' id='email' placeholder="Introduzca su email..." required />
                    </div>
                    <div className="password-register-container box">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name='password' id='password' placeholder="Introduzca una contraseña..." required />
                    </div>
                    <div className="confirm-password-register-container box">
                        <label htmlFor="confirm-password">Confirme su contraseña</label>
                        <input type="password" name='confirm-password' id='confirm-password' placeholder="Confirme la contraseña..." required />
                    </div>

                    <div className="terms-and-conditions-container">
                        <input type="checkbox" name='checkboxTermsCondition' id='checkboxTermsCondition'/>
                        <label htmlFor="checkboxTermsCondition">Acepto los <a href="#">términos y condiciones</a> de esta pagina. (Obligatorio)</label>
                    </div>
                    <div className="newsletter-container">
                        <input type="checkbox" name='checkboxOffers' id='checkboxOffers'/>
                        <label htmlFor="checkboxOffers">Deseo recibir las últimas ofertas y tendencias en moda. (Opcional)</label>
                    </div>
                    
                    <button type="submit">Registrarse</button>
                </form>
            </div>
        </section>
    )
}
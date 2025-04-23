import './LoginBody.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function LoginBody() {

    const [showPassword, setShowPassword] = useState(false)
    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    }

    return(
        <section id='login-body'>
            <div className="login-card-container">
                <Link to="/" className='back-to-home'>◄ Volver al inicio</Link>
                <div className="login-form-container">
                    <div className="login-top-text">
                        <h1>Inicia Sesión</h1>
                        <p>Porfavor, ingrese sus credenciales para poder realizar compras</p>
                    </div>
                    <form action="" method="post" className='login-form'>
                        <div className="email-container">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder='Escribe tu email' required />
                        </div>
                        <div className="password-container">
                            <label htmlFor="password">Contraseña</label>
                            <div className="pass-input-container">
                                <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder='Escribe tu contraseña' required />
                                <button type='button' className='btn-hide-pass' onClick={togglePasswordVisibility}>
                                    <svg 
                                    className="eye-icon" 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24"
                                    >
                                    <path 
                                        className="eye-outline" 
                                        d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2"
                                    />
                                    
                                    <circle 
                                        cx="12" 
                                        cy="12" 
                                        r="3" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2"
                                        className={showPassword ? "visible" : "hidden"}
                                    />
                                    
                                    {!showPassword && (
                                        <path 
                                        d="M2 12 Q12 15 22 12" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2"
                                        />
                                    )}
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <a href='#'>Olvidaste tu contraseña?</a>
                        <button type='submit'>Iniciar Sesión</button>
                    </form>
                    <div className="separator-login"><span>Otras opciones</span></div>
                    <div className="other-login-options">
                        <button><img src="/img/google-icon.webp" alt="google-icon" width="24" height="24"/>Google</button>
                        <button><img src="/img/fb-icon.png" alt="fb-icon" width="24"/>Facebook</button>
                    </div>
                </div>
                <div className='register-text'>
                    <span>No tienes una cuenta? <Link to="/register">registrate aquí</Link></span>
                </div>
            </div>
            <img src="https://images.unsplash.com/photo-1615420733091-6b320329987b?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="model-img" />
        </section>
    )
}
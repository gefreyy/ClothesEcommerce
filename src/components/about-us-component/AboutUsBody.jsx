import './AboutUsBody.css'

export default function AboutUsBody() {
    return (
        <section id="about-us-body">
            <div className='about-us-container'>
                <div className="floating-header-container">
                    <h1>Quienes somos</h1>
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img_shop" />
                    <p>En Lorem Lorem, somos más que una tienda de ropa: somos una comunidad apasionada por el estilo, la comodidad y la autenticidad. Nacimos con la idea de ofrecer prendas modernas y accesibles que se adapten a todos los estilos y personalidades. Nuestra tienda online fue diseñada para brindar una experiencia fácil, rápida y segura, donde cada cliente pueda encontrar lo que necesita para destacar con confianza.</p>
                </div>
                <hr className='separator' />
                <div className="mission-vision-container">
                    <section className='our-mission-container'>
                        <h1>Nuestra Misión</h1>
                        <div className="left-side">
                            <img src="https://images.unsplash.com/photo-1549116259-a400a614c455?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="our_mission_img" />
                            <p>Nuestra misión es ofrecer ropa de calidad, con diseños que sigan las últimas tendencias, a precios justos y con una experiencia de compra digital fluida. Queremos inspirar a cada persona a expresar su identidad a través de lo que viste, apostando siempre por la diversidad y la originalidad.</p>
                        </div>
                    </section>
                    <section className='our-vision-container'>
                        <h1>Nuestra Visión</h1>
                        <div className="right-side">
                            <p>Ser reconocidos como una tienda online líder en moda urbana y casual, expandiendo nuestra presencia y comunidad en todo el país. Aspiramos a innovar constantemente, manteniéndonos al día con las tendencias y mejorando la experiencia de nuestros clientes en cada visita.</p>
                            <img src="https://images.unsplash.com/photo-1560277090-a757a2312f59?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="our_vision_img" />
                        </div>
                    </section>
                </div>
                <hr className='separator' />

            </div>
            <div className="bottom-container">
                <h1>Viste con actitud. <br /> Vive a tu estilo</h1>
                <h2>Lorem Lorem te acompaña donde vayas.</h2>
                <div className="img-container"></div>
            </div>
        </section>

    )
}
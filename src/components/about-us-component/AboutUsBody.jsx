import './AboutUsBody.css'

export default function AboutUsBody() {
    return(
        <section id="about-us-body">
            <div className="floating-header-container">
                <h1>Quienes somos</h1>
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img_shop" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestiae et numquam quis perspiciatis mollitia unde possimus ex, quibusdam fugiat soluta doloribus omnis consequatur quos exercitationem eius alias excepturi corporis?</p>
            </div>
            <hr className='separator'/>
            <div className="mission-vision-container">
                <section className='our-mission-container'>
                    <h1>Nuestra Misión</h1>
                    <div className="left-side">
                        <img src="https://images.unsplash.com/photo-1549116259-a400a614c455?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="our_mission_img" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ipsam maiores esse. Alias quas quia dolorum soluta perspiciatis eaque ad ducimus dolore eos totam, non illo sunt laborum dicta distinctio!</p>
                    </div>
                </section>
                <section className='our-vision-container'>
                    <h1>Nuestra Visión</h1>
                    <div className="right-side">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ipsam maiores esse. Alias quas quia dolorum soluta perspiciatis eaque ad ducimus dolore eos totam, non illo sunt laborum dicta distinctio!</p>
                        <img src="https://images.unsplash.com/photo-1560277090-a757a2312f59?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="our_vision_img" />
                    </div>   
                </section>
            </div>
        </section>
    )
}
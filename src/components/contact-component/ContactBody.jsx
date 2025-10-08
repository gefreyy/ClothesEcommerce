import './ContactBody.css'

export default function ContactBody() {
    const cities = [
        {
            nameCity: "Lima",
            phone: "01 0000 0000"
        },
        {
            nameCity: "Arequipa",
            phone: "01 0000 0000"
        },
        {
            nameCity: "Trujillo",
            phone: "01 0000 0000"
        },
        {
            nameCity: "Huánuco",
            phone: "01 0000 0000"
        }
    ]

    const stores = [
        {
            imgStore: "https://images.unsplash.com/photo-1666961999032-0850777adcaf?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            city: "Lima",
            location: "Miraflores - Av. Benavides 15074"
        },
        {
            imgStore: "https://images.unsplash.com/photo-1728382068805-d0e5cdd90c2f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            city: "Trujillo",
            location: "Mall Plaza - Av. Mansiche 2112"
        },
        {
            imgStore: "https://images.unsplash.com/photo-1645118152093-139401d7b776?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            city: "Arequipa",
            location: "Real Plaza - Av. Ejército 1009"
        },
        {
            imgStore: "https://images.unsplash.com/photo-1596854701922-3f3cbaed4ce2?q=80&w=1478&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            city: "Huánuco",
            location: "Real Plaza - Jr. Independencia 1601"
        }
    ]

    return(
        <div id="contact-us">
            <div className="banner-contact-us">
                <div className="support-top-text-container">
                    <h1>Contáctanos</h1>
                    <p>Escribenos un mensaje o llamanos, escuchar al cliente es importante para nosotros.</p>
                </div>
                <div className="support-img-container">
                    <img src="/img/client-support.jpeg" alt="client-support-img" />
                </div>
            </div>
            <section className="ways-to-contact-container">
                <div className="article-support-container">
                    <article className='phone-number-art'>
                        <img src="/img/phone-call-big-icon.png" alt="phone-icon" />
                        <h2>Llámanos</h2>
                        <p>Contamos con los siguientes números de teléfono para cada ciudad.</p>
                        <div className="phone-container">
                            {cities.map((city, index) => (
                                <div className="phone-number-by-departments" key={index}>
                                    <h4>Servicio al cliente - {city.nameCity}</h4>
                                    <p>{city.phone}</p>
                                </div>
                            ))}
                        </div>
                        <span><strong>Horario de atención:</strong> Lunes a sábado de 9:00am a 6:00pm</span>
                    </article>
                    <article className='email-art'>
                        <img src="/img/chats-icon.png" alt="chats-icon" />
                        <h2>Escribenos</h2>
                        <p>Te contestaremos lo antes posible.</p>
                        <div className="form-container">
                            <form id="contact-us-form">
                                <p>E-mail:</p>
                                <input type="text" name="email-input" id="email-input" placeholder='Correo Electrónico...'/>
                                <p>Nombre:</p>
                                <input type="text" name="name-input" id="name-input" placeholder='Nombre...' />
                                <p>Descripción:</p>
                                <textarea name="desc-input" id="desc-input" placeholder='Descripción...' maxLength={300}></textarea>
                            </form>
                            <input type="submit" form="contact-us-form" value="Enviar" />
                        </div>             
                    </article>
                </div>
            </section>
            <hr className='separator'/>
            <section className='fisical-stores'>
                <h1>También puede acercarse a nuestros modulos presenciales de atencion al cliente.</h1>
                <div className="w-full max-w-[860px] grid place-items-center grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-7 my-20">
                    {stores.map((store, index) => (
                        <article
                            key={index}
                            className="relative flex flex-col w-3/4 aspect-square border border-gray-300 rounded-[15px] square overflow-hidden cursor-pointer shadow-[0_0_21px_6px_rgba(0,0,0,0.12)] transition-transform duration-300 ease-in-out hover:scale-105"
                        >
                            <div className="w-full h-full">
                                <img src={store.imgStore} className=" object-cover" alt="store-img" />
                            </div>
                            <div className="absolute bottom-0 w-full flex flex-col bg-white p-4 gap-2">
                                <h2 className="font-semibold">{store.city}</h2>
                                <p className="text-[clamp(0.8rem,1vw,1rem)]">{store.location}</p>
                            </div>
                            <div className="absolute bottom-16 right-3 z-10">
                                <img
                                    className="flex border-gray-300 border-[1px] rounded-full p-1 bg-white"
                                    src="/img/pin-icon.png"
                                    alt="pin-icon"
                                />
                            </div>
                      </article>
                    ))}
                </div>
            </section>
        </div>
    )
}
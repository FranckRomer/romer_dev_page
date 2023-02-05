import React from 'react'
import styles from '@/styles/Contact/Contact.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

const ContactPage = () => {
    return (
        <div className={styles.body}>
            <Head>
                <title>Contact</title>
                <meta name="description" content="Contacta a Francisco Angel Romero Tepal" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/corazon.ico" />
            </Head>
            <header className={styles.header}>
                <div className={styles.header_logos}>
                    <h3>Romer-Dev.com</h3>
                </div>
                <div className={styles.header_links}>
                    <Link href={"/"}>Consultoria</Link>
                    <Link href={"/portfolio"}>Portafolio</Link>
                </div>
            </header>
            <main className={styles.main}>
                <h1 className={styles.titulo}>
                    Pagina de contacto
                </h1>
                <p className={styles.subtitulo}>
                    Podemos crear los mejores proyectos juntos
                </p>

                <section className={styles.grid}>

                    <div className={styles.formulario}>
                        <input
                            type="text"
                            placeholder='Empresa'
                        />
                        <input
                            type="email"
                            placeholder='Correo'
                        />
                        <textarea
                            name="Mensaje" id=""
                            placeholder='Escribe tu mensaje'
                        ></textarea>

                        <button>Enviar</button>
                    </div>

                    <div className={styles.info}>
                        <h2 className={styles.info_msg}>
                            “La tecnología esta en una constante evolución, por lo que la mejor forma de estar actualizado es con un constante aprendizaje”
                        </h2>
                        <div className={styles.nombre}>
                            <div>
                                <Image
                                    src={"/imgs/agente.png"}
                                    alt="Agente"
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <p>Francisco Romero</p>
                        </div>
                        <hr />
                        <div className={styles.redes}>
                            <h1>Redes</h1>
                            <div className={styles.redes_iconos}>
                                <Link href={"https://www.linkedin.com/in/francisco-angel-romero-tepal-a942b5202/"} className={styles.redsocial}>
                                    <Image
                                        src={"/social/linkedin.png"}
                                        alt="Agente"
                                        width={50}
                                        height={50}
                                    />
                                    <p>Linkedin</p>
                                </Link>
                                <Link href={"https://github.com/FranckRomer"} className={styles.redsocial}>
                                    <Image
                                        src={"/social/github.png"}
                                        alt="Agente"
                                        width={50}
                                        height={50}
                                    />
                                    <p>Github</p>
                                </Link>
                                <div className={styles.redsocial}>
                                    <Image
                                        src={"/icons/contact_red.png"}
                                        alt="Agente"
                                        width={50}
                                        height={50}
                                    />
                                    <p>Correo y telefono</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            </main>
        </div>
    )
}

export default ContactPage
import React from 'react'
import styles from '@/styles/Portfolio/Portfolio.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import HeaderContactos from '@/components/headers/contactos'

const PortfolioPage = () => {
    return (
        <>
            <Head>
                <title>Portfolio</title>
                <meta name="description" content="Portfolio de Francisco Angel Romero Tepal" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/corazon.ico" />
            </Head>
            {/* 
                //?-------------- hEADER --------------
            */}
            <header className={styles.header}>
                <div className={styles.header_logo}>
                    <h3>Romer-Dev.com</h3>
                    <p>Portfolio</p>
                </div>
                <div className={styles.header_menu}>
                    <a href="#home">Inicio</a>
                    <a href="#About">Sobre mi</a>
                    <a href="#project">Proyectos</a>
                </div>
                <HeaderContactos></HeaderContactos>
            </header>

            {/* 
                //?-------------- MAIN --------------
            */}
            <main className={styles.main}>

                {/* //*-------------------- Home --------------------*/}
                <section className={styles.home}>
                    <div className={styles.home_info}>
                        <div>
                            <h1 className={styles.home_info_titulo}>Francisco Romero</h1>
                            <h2 className={styles.home_info_subtitulo}>Desarrollador web</h2>
                        </div>
                        <div className={styles.home_info_descarga}>Descarga CV</div>

                    </div>
                    <div className={styles.home_carrucel_main}>
                        <div className={styles.home_carrucel_contain}>

                            <div className={styles.home_carrucel} id="carrucel1">
                                <div className={styles.home_carrucel_info}>
                                    <h3>Custom Page</h3>
                                    <p>Creation of web pages and web applications</p>
                                    <div className={styles.home_carrucel_button}><h3>Contact</h3></div>
                                </div>
                                <div className={styles.home_carrucel_img}>
                                    <Image
                                        src={"/imgs/ventana-web.png"}
                                        alt="Agente"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            </div>
                            <div className={styles.home_carrucel} id="carrucel2">
                                <div className={styles.home_carrucel_info}>
                                    <h3>Custom Page</h3>
                                    <p>Creation of web pages and web applications</p>
                                    <div className={styles.home_carrucel_button}><h3>Data</h3></div>
                                </div>
                                <div className={styles.home_carrucel_img}>
                                    <Image
                                        src={"/imgs/backend.png"}
                                        alt="Agente"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            </div>
                            <div className={styles.home_carrucel} id="carrucel3">
                                <div className={styles.home_carrucel_info}>
                                    <h3>Custom Page</h3>
                                    <p>Creation of web pages and web applications</p>
                                    <div className={styles.home_carrucel_button}><h3>On/Off</h3></div>
                                </div>
                                <div className={styles.home_carrucel_img}>
                                    <Image
                                        src={"/imgs/domotica.png"}
                                        alt="Agente"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            </div>

                        </div>
                        <div></div>
                        <div className={styles.scroll_selection}>
                            <a href="#carrucel1"></a>
                            <a href="#carrucel2"></a>
                            <a href="#carrucel3"></a>
                        </div>
                    </div>
                </section>

                {/* //*-------------------- About -------------------- */}
                <section className={styles.about}>
                    <div className={styles.about_info}>
                        <h1>Francisco Angel Romero Tepal</h1>
                        <p>Mi nombre es Francisco Angel Romero Tepal, trabajo en el mundo de la tecnología creando y dando vida a ideas.</p>
                        <p>Soy Desarrollador <b>Full-Stack</b> con conocimientos en <b>Frontend, Backend y IoT</b>. Desarrollo sitios web, aplicaciones web, herramientas para usuarios y dispositivos de IoT.</p>
                        <div></div>
                    </div>
                    <div className={styles.about_img}>
                        <Image
                            src={"/mi_foto.jpeg"}
                            alt="Agente"
                            width={400}
                            height={400}
                        />
                    </div>
                </section>

                {/* //*-------------------- Skills --------------------*/}
                <section className={styles.skills}>
                    <div></div>
                </section>

                {/* //*-------------------- Projects --------------------*/}
                <section className={styles.projects}>
                    <div></div>
                </section>


            </main>
        </>
    )
}

export default PortfolioPage
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
                <section className={styles.home} id="home">
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
                <section className={styles.skills} id="About">
                    <h1>Habilidades</h1>
                    <hr />

                    {/* //? ------- Frontend ------- */}
                    <section className={styles.skills_Frontend}>
                        <div className={styles.skills_info}>
                            <h2>Frontend</h2>
                            <p>Como desarrollador Frontend he realizado sitios usando solo Html, Css y JavaScript, sin embargo para crear aplicaciones por lo general uso herramientas como lo son React y Next js.</p>
                            <div className={styles.skills_contain}>
                                <div className={styles.skill}>
                                    <Image
                                        src={"/skills/html.png"}
                                        alt="Agente"
                                        width={60}
                                        height={60}
                                    />
                                    <p>Html</p>
                                </div>
                                <div className={styles.skill}>
                                    <Image
                                        src={"/skills/css.png"}
                                        alt="Agente"
                                        width={60}
                                        height={60}
                                    />
                                    <p>Css</p>
                                </div>
                                <div className={styles.skill}>
                                    <Image
                                        src={"/skills/js.png"}
                                        alt="Agente"
                                        width={60}
                                        height={60}
                                    />
                                    <p>JavaScript</p>
                                </div>
                                <div className={styles.skill}>
                                    <Image
                                        src={"/skills/react.png"}
                                        alt="Agente"
                                        width={60}
                                        height={60}
                                    />
                                    <p>React</p>
                                </div>
                                <div className={styles.skill}>
                                    <Image
                                        src={"/skills/nextjs.png"}
                                        alt="Agente"
                                        width={60}
                                        height={60}
                                    />
                                    <p>Next js</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.skills_img}>
                            <Image
                                src={"/imgs/frontend.png"}
                                alt="Agente"
                                width={400}
                                height={400}
                            />
                        </div>
                    </section>
                    {/* //? ------- Backend ------- */}
                    <section className={styles.skills_Backend}>
                        <div className={styles.skills_img}>
                            <Image
                                src={"/imgs/analisis-de-los-datos.png"}
                                alt="Agente"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className={styles.skills_info}>
                            <h2>Backend</h2>
                            <p>Como desarrollador Backend en un principio lo utilice para comunicar mis dispositivos de IoT a una Base de datos como lo es MongoDb y posteriormente he creado nuevas rutas para hacer una consulta de los datos y visualizar en tiempo real en una pagina web.</p>
                            <div className={styles.skills_contain}>
                                <div className={styles.skill}>
                                    <Image
                                        src={"/skills/js.png"}
                                        alt="Agente"
                                        width={60}
                                        height={60}
                                    />
                                    <p>JavaScript</p>
                                </div>
                                <div className={styles.skill}>
                                    <Image
                                        src={"/skills/nodejs.png"}
                                        alt="Agente"
                                        width={60}
                                        height={60}
                                    />
                                    <p>Node Js</p>
                                </div>
                                <div className={styles.skill}>
                                    <Image
                                        src={"/skills/nest.png"}
                                        alt="Agente"
                                        width={60}
                                        height={60}
                                    />
                                    <p>Nest Js</p>
                                </div>
                                <div className={styles.skill}>
                                    <Image
                                        src={"/skills/mongodb.png"}
                                        alt="Agente"
                                        width={60}
                                        height={60}
                                    />
                                    <p>MongoDB</p>
                                </div>
                                <div className={styles.skill}>
                                    <Image
                                        src={"/skills/postgres.png"}
                                        alt="Agente"
                                        width={60}
                                        height={60}
                                    />
                                    <p>Postgres</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* //? ------- Iot ------- */}
                    <section className={styles.skills_Iot} >
                        <div className={styles.skills_info}>
                            <h2>Internet of Things</h2>
                            <p>En un principio aprendí a programar Microcontroladores (como lo son los Pic18f4580), después migre a programar en Arduino (principal mente usando el ESP32), en esta plataforma se han creado diversos proyectos, todos con la posibilidad de conectar se a internet.</p>
                            <div className={styles.skills_contain}>
                                <div className={styles.skill}>
                                    <Image
                                        src={"/skills/C++.png"}
                                        alt="Agente"
                                        width={60}
                                        height={60}
                                    />
                                    <p>C++</p>
                                </div>
                                <div className={styles.skill}>
                                    <Image
                                        src={"/skills/arduino.png"}
                                        alt="Agente"
                                        width={60}
                                        height={60}
                                    />
                                    <p>Arduino</p>
                                </div>
                                <div className={styles.skill}>
                                    <Image
                                        src={"/skills/microchip.png"}
                                        alt="Agente"
                                        width={60}
                                        height={60}
                                    />
                                    <p>Microchip</p>
                                </div>
                                <div className={styles.skill}>
                                    <Image
                                        src={"/skills/raspberry.png"}
                                        alt="Agente"
                                        width={60}
                                        height={60}
                                    />
                                    <p>RaspBerry</p>
                                </div>
                                <div className={styles.skill}>
                                    <Image
                                        src={"/skills/http.png"}
                                        alt="Agente"
                                        width={60}
                                        height={60}
                                    />
                                    <p>Http</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.skills_img}>
                            <Image
                                src={"/imgs/domotica.png"}
                                alt="Agente"
                                width={400}
                                height={400}
                            />
                        </div>
                    </section>
                    {/* //? ------- Other ------- */}
                    <section className={styles.skills_Other} >
                        <div className={styles.skills_img}>
                            <Image
                                src={"/imgs/trabajo.png"}
                                alt="Agente"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className={styles.skills_info}>
                            <h2>Otras Skills</h2>
                            <p>Cuento con diversos conocimientos que me ayudan a desarrollar de maneras diversas como lo es conocimientos en Redes, conocimientos avanzados en Electronica, conocimientos en Inteligencia Artificial, practica con la Linea de comandos y manejo de GitHub</p>
                            <div className={styles.skills_contain}>
                                <div className={styles.skill}>
                                    <Image
                                        src={"/skills/git.png"}
                                        alt="Agente"
                                        width={60}
                                        height={60}
                                    />
                                    <p>Git</p>
                                </div>
                                <div className={styles.skill}>
                                    <Image
                                        src={"/skills/linux.png"}
                                        alt="Agente"
                                        width={60}
                                        height={60}
                                    />
                                    <p>Terminal</p>
                                </div>
                                <div className={styles.skill}>
                                    <Image
                                        src={"/skills/matlab.png"}
                                        alt="Agente"
                                        width={60}
                                        height={60}
                                    />
                                    <p>Matlab</p>
                                </div>
                                <div className={styles.skill}>
                                    <Image
                                        src={"/skills/python.png"}
                                        alt="Agente"
                                        width={60}
                                        height={60}
                                    />
                                    <p>Python</p>
                                </div>
                                <div className={styles.skill}>
                                    <Image
                                        src={"/skills/figma.png"}
                                        alt="Agente"
                                        width={60}
                                        height={60}
                                    />
                                    <p>Figma</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                {/* //*-------------------- Projects --------------------*/}
                <section className={styles.projects} id="project">
                    <h1>Proyectos</h1>
                    <p>Los proyectos mas relevantes:</p>
                    <hr />
                    <section className={styles.project_contain}>

                        {/* ------------------ */}
                        <div className={styles.project}>
                            <div className={styles.project_img}>
                                <h3>Portafolio</h3>
                                <Image
                                    src={"/projects/portfolio.png"}
                                    alt="Agente"
                                    width={500}
                                    height={300}
                                />
                            </div>
                            <div className={styles.project_info}>
                                <h2>Portfolio</h2>
                                <p>Portafolio personal</p>
                                <div className={styles.project_info_enlace}>
                                    <Image
                                        src={"/icons/enlace.png"}
                                        alt="Agente"
                                        width={20}
                                        height={20}
                                    />
                                    <p>Ver proyecto</p>
                                </div>
                            </div>
                        </div>

                        {/* ------------------ */}
                        <div className={styles.project}>
                            <div className={styles.project_img}>
                                <h3>Dana</h3>
                                <Image
                                    src={"/projects/dana.jpeg"}
                                    alt="Agente"
                                    width={500}
                                    height={300}
                                />
                            </div>
                            <div className={styles.project_info}>
                                <h2>Dana</h2>
                                <p>Proyecto de Domotica </p>
                                <div className={styles.project_info_enlace}>
                                    <Image
                                        src={"/icons/enlace.png"}
                                        alt="Agente"
                                        width={20}
                                        height={20}
                                    />
                                    <p>Ver proyecto</p>
                                </div>
                            </div>
                        </div>



                        {/* ------------------ */}
                        <div className={styles.project}>
                            <div className={styles.project_img}>
                                <h3>Train</h3>
                                <Image
                                    src={"/projects/train.jpeg"}
                                    alt="Agente"
                                    width={500}
                                    height={300}
                                />
                            </div>
                            <div className={styles.project_info}>
                                <h2>Train</h2>
                                <p>Proycto de trasporte publico</p>
                                <div className={styles.project_info_enlace}>
                                    <Image
                                        src={"/icons/enlace.png"}
                                        alt="Agente"
                                        width={20}
                                        height={20}
                                    />
                                    <p>Ver proyecto</p>
                                </div>
                            </div>
                        </div>




                    </section>

                    <div className={styles.allproyects}>
                        <Link href={"/"}>
                            <Image
                                src={"/icons/enlace.png"}
                                alt="Agente"
                                width={30}
                                height={30}
                            />
                            <p>Ver todos los proyectos</p>
                        </Link>
                    </div>

                </section>


            </main>
        </>
    )
}

export default PortfolioPage
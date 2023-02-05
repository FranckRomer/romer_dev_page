import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import HeaderContactos from '@/components/headers/contactos'

// import { Inter } from '@next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    // *--------------------------------------------------------
    <>
      <Head>
        <title>Romer-Dev</title>
        <meta name="description" content="Pagina oficial de Francisco Angel Romero Tepal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/corazon.ico" />
      </Head>

      {/* 
          //?-------------- HEADER --------------
      */}
      <header className={styles.header}>
        <div className={styles.header_logo}>
          <h3>Romer-Dev.com</h3>
          <p>Portfolio</p>
        </div>
        <div className={styles.header_menu}>
          <a href="#home">Inicio</a>
          <a href="#desarrollo">Desarrollo</a>
          <a href="#end">Mas Información</a>
        </div>
        <HeaderContactos></HeaderContactos>
      </header>


      <main className={styles.main}>
        {/* //? ----------------------------- */}
        <section className={styles.portada} id="home">
          

          <div className={styles.portada_main}>

            <div className={styles.portada_imgs}>
              {/* //!-- */}
              <Image
                src="/imgs/Imagen_principal.png"
                alt="Link a portafolio"
                width={450}
                height={450}
              />
            </div>

            <div className={styles.portada_info}>
              <div>
                <h1 className={styles.portada_info_tituloPrin}>
                  Desarrollo de aplicaciones web y automatización de dispositivos
                </h1>
                <Link href={"/contact"} className={styles.portada_info_contacto}>
                  <Image
                    src="/icons/contact_red.png"
                    alt="Link a portafolio"
                    width={95}
                    height={95}
                  />
                  <p>Contacta me</p>
                </Link>
              </div>
            </div>

          </div>
        </section>
        {/* //? ----------------------------- */}
        <section className={styles.datos}>
          <div className={styles.datos_info}>
            <h1>Crea y analiza datos</h1>
            <p>
              Genera un gran cantidad de datos que pueden ser analizados por expertos.
            </p>
            <p>
              Gracias a los datos se pueden hacer cambios sustanciales que mejoren la experiencia de los usuarios.
            </p>
          </div>
          <div className={styles.datos_img}>
            <Image
              src="/imgs/analitic.png"
              alt="Link a portafolio"
              width={450}
              height={450}
            />
          </div>
        </section>
        {/* //? ----------------------------- */}
        <div className={styles.desarrollo} id="desarrollo">

          {/* //*---------------------------------- */}
          <section className={styles.desarrollo_web}>
            <div className={styles.desarrollo_web_info}>
              <h1>Desarrollo web</h1>
              <p>Desarrollamos aplicaciones web de todo propósito.</p>
              <p>Creación de sitios web con inicio de usuario, bases de datos, formularios y gestión de datos.</p>
              <p>Nos dedicamos a darle vida a esas ideas atreves de metodologías de gestión de proyectos.</p>
            </div>
            <div className={styles.desarrollo_web_img}>
              <Image
                src="/imgs/ventana-web.png"
                alt="Link a portafolio"
                width={450}
                height={450}
              />
            </div>
          </section>

          {/* //*---------------------------------- */}
          <section className={styles.desarrollo_responsive}>
            <div className={styles.desarrollo_responsive_img}>
              <Image
                src="/imgs/smartphone.png"
                alt="Link a portafolio"
                width={400}
                height={400}
              />
            </div>
            <div className={styles.desarrollo_responsive_info}>
              <h1>Desarrollo Móvil</h1>
              <p>Desarrollo móvil enfocado a la web.</p>
              <p>Creamos aplicaciones responsive desing (desarrollos para todas las plataformas).</p>
              <p>Procuramos que todos los usuarios tengan la mejor experiencia al estar navegando en la web.</p>
            </div>
          </section>

          {/* //*---------------------------------- */}
          <section className={styles.desarrollo_automatizacion}>
            <div className={styles.desarrollo_automatizacion_info}>
              <h1>Automatización</h1>
              <p>Una de nuestras especialidades es la automatización.</p>
              <p>En busca de patrones y procesos repetitivos se puede crear una tecnología que realice la tarea mas rápidamente y segura.</p>
              <p>La automación va mas aya de un dispositivo que repita la tarea, y nos enfocamos en usuarios y operadores.</p>
            </div>
            <div className={styles.desarrollo_automatizacion_img}>
              <Image
                src="/imgs/domotica.png"
                alt="Link a portafolio"
                width={400}
                height={400}
              />
            </div>
          </section>
        </div>
        {/* //? ----------------------------- */}
        <section className={styles.final} id="end">
          <h1>Gracias por visitar</h1>
          <div className={styles.final_grid}>
            <div className={styles.final_img}>
              <Image
                src="/imgs/trabajo.png"
                alt="Link a portafolio"
                width={400}
                height={400}
              />
            </div>
            <div className={styles.final_info}>
              <h1>No te olvides de ir a</h1>
              <Link href={"/portfolio"} className={styles.final_link}>
                <Image
                  src="/imgs/portafolio.png"
                  alt="Link a portafolio"
                  width={75}
                  height={75}
                />
                <h3 className={styles.final_portfolio}>
                  Portafolio
                </h3>
              </Link>
              <Link href={"/contact"} className={styles.final_link}>
                <Image
                  src="/imgs/agente.png"
                  alt="Link a portafolio"
                  width={75}
                  height={75}
                />
                <h3 className={styles.final_contacto}>
                  Contacto
                </h3>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

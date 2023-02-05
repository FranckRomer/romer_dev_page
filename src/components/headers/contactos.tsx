import React from 'react'
import styles from "@/styles/headers/HeaderContactos.module.css"
import Link from 'next/link'
import Image from 'next/image'

const HeaderContactos = () => {
    return (
        <div className={styles.header_contacto_contain}>
            <div className={styles.header_contacto_activacion}>
                <Image
                    src={"/icons/contacto2.png"}
                    alt="Agente"
                    width={30}
                    height={30}
                />
                <h3>Contactos</h3>
            </div>
            <hr />
            <Link href={"/contact"} className={styles.header_contacto}>
                <Image
                    src={"/imgs/agente.png"}
                    alt="Agente"
                    width={30}
                    height={30}
                />
                <h3>Contacto</h3>
            </Link>
            <Link href={"/"} className={styles.header_contacto}>
                <Image
                    src={"/imgs/smartphone.png"}
                    alt="Agente"
                    width={30}
                    height={30}
                />
                <h3>Consultoria</h3>
            </Link>
            <Link href={"/portfolio"} className={styles.header_contacto}>
                <Image
                    src={"/imgs/portafolio.png"}
                    alt="Agente"
                    width={30}
                    height={30}
                />
                <h3>Portafolio</h3>
            </Link>
            <hr />
            <Link href={"https://www.linkedin.com/in/francisco-angel-romero-tepal-a942b5202/"} className={styles.header_contacto}>
                <Image
                    src={"/social/linkedin.png"}
                    alt="Agente"
                    width={30}
                    height={30}
                />
                <h3>Linkedin</h3>
            </Link>
            <Link href={"https://github.com/FranckRomer"} className={styles.header_contacto}>
                <Image
                    src={"/social/github.png"}
                    alt="Agente"
                    width={30}
                    height={30}
                />
                <h3>Github</h3>
            </Link>

        </div>
    )
}

export default HeaderContactos
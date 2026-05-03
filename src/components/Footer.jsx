import React from 'react'
import styles from './Footer.module.css'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <div className={styles.logo}>JL</div>
                        <div>
                            <h3>Jose Luis Sánchez</h3>
                            <p>Backend Java Developer especializado en Spring Boot, APIs REST y microservicios</p>
                        </div>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.column}>
                            <h4>Navegación</h4>
                            <ul>
                                <li><a href="#home">Inicio</a></li>
                                <li><a href="#about">Sobre mí</a></li>
                                <li><a href="#experience">Experiencia</a></li>
                                <li><a href="#projects">Proyectos</a></li>
                            </ul>
                        </div>

                        <div className={styles.column}>
                            <h4>Recursos</h4>
                            <ul>
                                <li><a href="#skills">Stack</a></li>
                                <li><a href="#contact">Contacto</a></li>
                                <li><a href="https://github.com/joseluis57355/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                                <li><a href="https://www.linkedin.com/in/jose-luis-sanchez-tebar" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            </ul>
                        </div>

                        <div className={styles.column}>
                            <h4>Ubicación</h4>
                            <ul>
                                <li>Valencia, España</li>
                                <li><a href="mailto:joseluis57355@gmail.com">joseluis57355@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.bottom}>
                    <p>&copy; {currentYear} Jose Luis Sánchez. Todos los derechos reservados.</p>
                    <p>Diseño y desarrollo propio | Disponible para nuevas oportunidades</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

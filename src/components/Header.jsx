import React from 'react'
import styles from './Header.module.css'

function Header({ scrolled }) {
    const handleNavClick = (e) => {
        e.preventDefault()
        const href = e.currentTarget.getAttribute('href')
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className="container">
                <div className={styles.nav}>
                    <div className={styles.logo}>
                        <a href="#home">
                            <span className={styles.logoText}>JL</span>
                        </a>
                    </div>

                    <nav className={styles.menu}>
                        <a href="#about" onClick={handleNavClick}>Sobre mí</a>
                        <a href="#experience" onClick={handleNavClick}>Experiencia</a>
                        <a href="#projects" onClick={handleNavClick}>Proyectos</a>
                        <a href="#skills" onClick={handleNavClick}>Stack</a>
                        <a href="#contact" onClick={handleNavClick}>Contacto</a>
                    </nav>

                    <div className={styles.cta}>
                        <a href="#contact" className="btn btn-secondary" onClick={handleNavClick}>
                            Contactar
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header

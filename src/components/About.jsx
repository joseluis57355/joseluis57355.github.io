import React from 'react'
import styles from './About.module.css'

function About() {
    return (
        <section id="about" className={styles.about}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Sobre mí</h2>
                    <p className={styles.subtitle}>Desarrollador backend con experiencia real en entornos empresariales</p>
                </div>

                <div className={styles.content}>
                    <div className={styles.text}>
                        <p className={styles.paragraph}>
                            Soy desarrollador backend con <strong>más de 3 años de experiencia</strong> trabajando en aplicaciones Java, microservicios, APIs REST y bases de datos relacionales. He trabajado en <strong>entornos empresariales</strong> resolviendo incidencias, desarrollando nuevas funcionalidades, manteniendo aplicaciones en producción y colaborando con herramientas reales de desarrollo.
                        </p>

                        <p className={styles.paragraph}>
                            Mi perfil se caracteriza por ser <strong>práctico, resolutivo y orientado a producción</strong>. He participado en ciclos completos de desarrollo: desde el diseño e implementación de soluciones backend, hasta el mantenimiento y evolución de sistemas en producción. Tengo experiencia real con tecnologías empresariales como Maven, IntelliJ IDEA, Jira, TortoiseSVN, Hibernate/JPA y bases de datos Oracle.
                        </p>

                        <p className={styles.paragraph}>
                            Actualmente estoy <strong>ampliando mi perfil hacia DevOps y cloud</strong>, desarrollando proyectos propios orientados a producción con Docker, AWS EC2, GitHub Actions, PostgreSQL, Redis y Spring Boot Actuator. Como próximos objetivos técnicos, estoy planificando la incorporación de Kafka, Kubernetes, Prometheus y Grafana. Mi objetivo es consolidarme como <strong>Backend  completo</strong> con capacidad de despliegue, automatización y operación en cloud.
                        </p>
                            
                        <p className={styles.paragraph}>
                            <strong>Soy un desarrollador práctico, con experiencia real y disponibilidad inmediata</strong> a equipos que busquen solidez técnica, capacidad de resolución de problemas y orientación a resultados.
                        </p>
                    </div>

                    <div className={styles.highlights}>
                        <div className={styles.highlight}>
                            <div className={styles.icon}>💼</div>
                            <h3>Experiencia Empresarial</h3>
                            <p>3+ años en entornos profesionales reales, resolviendo incidencias y manteniendo sistemas en producción.</p>
                        </div>

                        <div className={styles.highlight}>
                            <div className={styles.icon}>🏗️</div>
                            <h3>Arquitectura Backend</h3>
                            <p>APIs REST, microservicios, persistencia con JPA/Hibernate y arquitectura por capas.</p>
                        </div>

                        <div className={styles.highlight}>
                            <div className={styles.icon}>☁️</div>
                            <h3>Cloud & DevOps</h3>
                            <p>Ampliando perfil con Docker, AWS EC2, GitHub Actions, Redis y observabilidad básica con Spring Boot Actuator.</p>
                        </div>

                        <div className={styles.compactHighlights}>
                            <div className={styles.compactHighlight}>
                                <span>🛠️</span>
                                <p>Herramientas empresariales</p>
                            </div>

                            <div className={styles.compactHighlight}>
                                <span>🎯</span>
                                <p>Orientación a resultados</p>
                            </div>

                            <div className={styles.compactHighlight}>
                                <span>📈</span>
                                <p>Mejora continua</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

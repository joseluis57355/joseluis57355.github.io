import React from 'react'
import styles from './Hero.module.css'

function Hero() {
    const handleScroll = (sectionId) => {
        const element = document.querySelector(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="home" className={styles.hero}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.main}>
                        <div className={`${styles.badge} fade-in-up`}>
                            <span className={styles.badgeDot}></span>
                            Disponible para oportunidades
                        </div>

                        <h1 className={`${styles.title} fade-in-up`}>
                            Jose Luis Sánchez
                        </h1>

                        <h2 className={`${styles.subtitle} fade-in-up`}>
                            Backend Java Developer <span className={styles.pipe}>|</span> Spring Boot <span className={styles.pipe}>|</span> Microservicios <span className={styles.pipe}>|</span> DevOps <span className={styles.pipe}>|</span> APIs REST
                        </h2>

                        <p className={`${styles.description} fade-in-up`}>
                            Desarrollador backend con más de 3 años de experiencia profesional en entornos empresariales, creando y manteniendo aplicaciones Java, APIs REST y sistemas basados en microservicios.
                        </p>

                        <p className={`${styles.highlight} fade-in-up`}>
                            "Experiencia real en entornos empresariales, mantenimiento en producción y desarrollo backend con Java."
                        </p>

                        <div className={`${styles.buttons} fade-in-up`}>
                            <button
                                className="btn btn-primary"
                                onClick={() => handleScroll('#projects')}
                            >
                                Ver Proyectos
                            </button>
                            <a href="#contact" className="btn btn-secondary" onClick={(e) => {
                                e.preventDefault()
                                handleScroll('#contact')
                            }}>
                                Descargar CV
                            </a>
                            <a href="https://github.com/joseluis57355" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/jose-luis-sanchez-tebar" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                                LinkedIn
                            </a>
                        </div>

                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <div className={styles.statNumber}>3+</div>
                                <div className={styles.statLabel}>Años Experiencia</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.statNumber}>5+</div>
                                <div className={styles.statLabel}>Proyectos</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.statNumber}>100%</div>
                                <div className={styles.statLabel}>Disponibilidad</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.visual}>
                        <div className={styles.codeBg}>
                            <div className={styles.codeBlock}>
                                <div className={styles.codeLine}>
                                    <span className={styles.keyword}>class</span> <span className={styles.className}>BackendDeveloper</span> {'{'}
                                </div>

                                <div className={styles.codeLine} style={{ marginLeft: '20px' }}>
                                    <span className={styles.keyword}>private</span> <span className={styles.type}>String</span> name = <span className={styles.string}>"Jose Luis Sánchez"</span>;
                                </div>

                                <div className={styles.codeLine} style={{ marginLeft: '20px' }}>
                                    <span className={styles.keyword}>private</span> <span className={styles.type}>String</span> role = <span className={styles.string}>"Backend Java Developer"</span>;
                                </div>

                                <div className={styles.codeLine} style={{ marginLeft: '20px' }}>
                                    <span className={styles.keyword}>private</span> <span className={styles.type}>int</span> yearsOfExperience = <span className={styles.number}>3</span>;
                                </div>

                                <div className={styles.codeLine} style={{ marginLeft: '20px' }}>
                                    <span className={styles.keyword}>private</span> List&lt;<span className={styles.type}>String</span>&gt; professionalStack = Arrays.asList(
                                </div>

                                <div className={styles.codeLine} style={{ marginLeft: '60px' }}>
                                    <span className={styles.string}>"Java"</span>, <span className={styles.string}>"Spring Boot"</span>, <span className={styles.string}>"Microservices"</span>,
                                </div>

                                <div className={styles.codeLine} style={{ marginLeft: '60px' }}>
                                    <span className={styles.string}>"REST APIs"</span>, <span className={styles.string}>"Hibernate"</span>, <span className={styles.string}>"JPA"</span>,
                                </div>

                                <div className={styles.codeLine} style={{ marginLeft: '60px' }}>
                                    <span className={styles.string}>"Oracle"</span>, <span className={styles.string}>"Maven"</span>, <span className={styles.string}>"Jira"</span>
                                </div>

                                <div className={styles.codeLine} style={{ marginLeft: '20px' }}>
                                    );
                                </div>

                                <div className={styles.codeLine} style={{ marginLeft: '20px' }}>
                                    <span className={styles.keyword}>private</span> List&lt;<span className={styles.type}>String</span>&gt; frontendStack = Arrays.asList(
                                </div>

                                <div className={styles.codeLine} style={{ marginLeft: '60px' }}>
                                    <span className={styles.string}>"HTML"</span>, <span className={styles.string}>"CSS"</span>, <span className={styles.string}>"JavaScript"</span>, <span className={styles.string}>"ZK"</span>
                                </div>

                                <div className={styles.codeLine} style={{ marginLeft: '20px' }}>
                                    );
                                </div>

                                <div className={styles.codeLine} style={{ marginLeft: '20px' }}>
                                    <span className={styles.keyword}>private</span> List&lt;<span className={styles.type}>String</span>&gt; learningStack = Arrays.asList(
                                </div>

                                <div className={styles.codeLine} style={{ marginLeft: '60px' }}>
                                    <span className={styles.string}>"Docker"</span>, <span className={styles.string}>"AWS EC2"</span>, <span className={styles.string}>"PostgreSQL"</span>,
                                </div>

                                <div className={styles.codeLine} style={{ marginLeft: '60px' }}>
                                    <span className={styles.string}>"GitHub Actions"</span>, <span className={styles.string}>"Redis"</span>, <span className={styles.string}>"Mockito"</span>,
                                </div>

                                <div className={styles.codeLine} style={{ marginLeft: '60px' }}>
                                    <span className={styles.string}>"Spring Boot Actuator"</span>, <span className={styles.string}>"Micrometer"</span>,
                                </div>

                                <div className={styles.codeLine} style={{ marginLeft: '60px' }}>
                                    <span className={styles.string}>"H2"</span>, <span className={styles.string}>"Python"</span>, <span className={styles.string}>"React"</span>, <span className={styles.string}>"Node"</span>
                                </div>
                                <div className={styles.codeLine} style={{ marginLeft: '20px' }}>
                                    );
                                </div>

                                <div className={styles.codeLine} style={{ marginLeft: '20px' }}>
                                    <span className={styles.keyword}>private</span> List&lt;<span className={styles.type}>String</span>&gt; roadmap = Arrays.asList(
                                </div>
                                <div className={styles.codeLine} style={{ marginLeft: '60px' }}>
                                    <span className={styles.string}>"Kafka"</span>, <span className={styles.string}>"Kubernetes"</span>, <span className={styles.string}>"Prometeus"</span>, <span className={styles.string}>"Grafana"</span>
                                </div>
                                <div className={styles.codeLine} style={{ marginLeft: '20px' }}>
                                    );
                                </div>


                                <div className={styles.codeLine} style={{ marginLeft: '20px' }}>
                                    <span className={styles.keyword}>private</span> <span className={styles.type}>String</span> focus = <span className={styles.string}>"Backend + DevOps"</span>;
                                </div>

                                <div className={styles.codeLine}>{'}'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.scroll}>
                <div className={styles.scrollText}>Scroll para explorar</div>
                <div className={styles.scrollIcon}>↓</div>
            </div>
        </section>
    )
}

export default Hero

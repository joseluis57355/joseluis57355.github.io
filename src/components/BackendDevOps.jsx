import React from 'react'
import styles from './BackendDevOps.module.css'

function BackendDevOps() {
    return (
        <section className={styles.backendDevOps}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.left}>
                        <h2>Backend + Cloud + DevOps</h2>
                        <p className={styles.subtitle}>
                           Construyendo experiencia práctica en despliegue, automatización y cloud
                        </p>

                        <div className={styles.description}>
                            <p>
                                Además de mi experiencia profesional como desarrollador Java, estoy construyendo <strong>proyectos propios enfocados en entornos de producción realistas</strong> que integran observabilidad con Spring Boot Actuator y Micrometer, gestión de caché con Redis, Docker, GitHub Actions y despliegue cloud.
                            </p>

                            <div className={styles.pillars}>
                                <div className={styles.pillar}>
                                    <div className={styles.pillarIcon}>🛠️</div>
                                    <h4>Backend Solid</h4>
                                    <p>Arquitectura, APIs, persistencia, caché y patrones profesionales</p>
                                </div>

                                <div className={styles.pillar}>
                                    <div className={styles.pillarIcon}>📦</div>
                                    <h4>Containerización</h4>
                                    <p>Docker, Docker Compose, multi-stage builds</p>
                                </div>

                                <div className={styles.pillar}>
                                    <div className={styles.pillarIcon}>☁️</div>
                                    <h4>Cloud & Orquestación</h4>
                                    <p>Cloud AWS EC2, despliegue de aplicaciones y configuración de entornos</p>
                                </div>

                                <div className={styles.pillar}>
                                    <div className={styles.pillarIcon}>🔄</div>
                                    <h4>CI/CD</h4>
                                    <p>GitHub Actions, automatización de despliegues</p>
                                </div>

                                <div className={styles.pillar}>
                                    <div className={styles.pillarIcon}>📊</div>
                                    <h4>Observabilidad</h4>
                                    <p>Spring Boot Actuator, health checks, logs de aplicación y métricas básicas</p>
                                </div>

                                <div className={styles.pillar}>
                                    <div className={styles.pillarIcon}>🧪</div>
                                    <h4>Testing y Validación</h4>
                                    <p>JUnit, Mockito, MockMvc, tests de integración y health checks</p>
                                </div>
                            </div>

                            <p className={styles.goal}>
                                <strong>Mi objetivo:</strong> Consolidarme como Backend completo con capacidad integral de <strong>desarrollo, despliegue, automatización y operación en cloud</strong>. Busco roles que valoren esta integración de skillsets y que ofrezcan oportunidades de crecimiento en ambas áreas.
                            </p>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <div className={styles.diagram}>
                            <div className={styles.flow}>
                                <div className={styles.flowBox}>
                                    <div className={styles.icon}>💻</div>
                                    <div>Desarrollo</div>
                                </div>
                                <div className={styles.arrow}>→</div>

                                <div className={styles.flowBox}>
                                    <div className={styles.icon}>📦</div>
                                    <div>Docker</div>
                                </div>
                                <div className={styles.arrow}>→</div>

                                <div className={styles.flowBox}>
                                    <div className={styles.icon}>🔄</div>
                                    <div>CI/CD</div>
                                </div>
                                <div className={styles.arrow}>↓</div>

                                <div className={styles.flowBox}>
                                    <div className={styles.icon}>☁️</div>
                                    <div>AWS EC2/Kube</div>
                                </div>
                                <div className={styles.arrow}>→</div>

                                <div className={styles.flowBox}>
                                    <div className={styles.icon}>📊</div>
                                    <div>Monitor</div>
                                </div>
                                <div className={styles.arrow}>→</div>

                                <div className={styles.flowBox}>
                                    <div className={styles.icon}>✅</div>
                                    <div>Producción</div>
                                </div>
                            </div>

                            <div className={styles.stats}>
                                <div className={styles.stat}>
                                    <div className={styles.statNumber}>3+</div>
                                    <div className={styles.statText}>Años Backend Profesional</div>
                                </div>
                                <div className={styles.stat}>
                                    <div className={styles.statNumber}>3+</div>
                                    <div className={styles.statText}>Proyectos DevOps/Cloud</div>
                                </div>
                                <div className={styles.stat}>
                                    <div className={styles.statNumber}>AWS</div>
                                    <div className={styles.statText}>Docker, EC2 y CI/CD</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BackendDevOps

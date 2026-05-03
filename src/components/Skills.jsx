import React from 'react'
import styles from './Skills.module.css'

function Skills() {
    const skillsData = {
        professional: {
            title: 'Experiencia Profesional',
            description: 'Tecnologías con las que he trabajado en entornos empresariales reales',
            categories: [
                {
                    name: 'Backend',
                    skills: ['Java', 'Spring Boot', 'Hibernate', 'JPA', 'APIs REST', 'Arquitectura de Microservicios']
                },
                {
                    name: 'Bases de Datos',
                    skills: ['Oracle SQL', 'Modelo Relacional']
                },
                {
                    name: 'Herramientas y Procesos',
                    skills: ['Maven', 'IntelliJ IDEA', 'VSCode', 'Eclipse', 'Jira', 'TortoiseSVN', 'Git']
                },
                {
                    name: 'Frontend',
                    skills: ['ZK Framework','HTML', 'CSS', 'JavaScript']
                },
                {
                    name: 'Especializaciones',
                    skills: ['Jaspersoft', 'Soporte a Producción', 'Resolución de Incidencias', 'Entornos DevOps']
                }
            ]
        },
        learning: {
            title: 'Aprendizaje y Proyectos Propios',
            description: 'Tecnologías aplicadas o en proceso de aprendizaje mediante proyectos personales orientados a producción',
            categories: [
               {
                    name: 'DevOps & Cloud',
                    skills: ['Docker', 'Docker Compose', 'AWS EC2', 'GitHub Actions', 'CI/CD']
                },
                {
                    name: 'DevOps en aprendizaje',
                    skills: ['Kubernetes básico', 'Prometheus básico', 'Grafana básico']
                },
                {
                    name: 'Backend Avanzado',
                    skills: ['PostgreSQL', 'Redis', 'Spring Boot Actuator', 'Swagger/OpenAPI', 'DTOs', 'Mappers', 'Validaciones', 'Exception Handling', 'JUnit', 'Mockito', 'H2', 'Testing Backend', 'Kafka básico']
                },
                {
                    name: 'Tools & Monitoring',
                    skills: ['Logs de Aplicación', 'Monitorización básica', 'Observabilidad básica']
                },
                {
                    name: 'Frontend Moderno',
                    skills: ['React', 'CSS Modules', 'Responsive Design', 'GitHub Pages']
                },
                {
                    name: 'IA y Automatización',
                    skills: ['Python', 'Web Scraping', 'LLMs Locales', 'APIs de IA']
                }
            ]
        }
    }

    return (
        <section id="skills" className={styles.skills}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Stack Tecnológico</h2>
                    <p className={styles.subtitle}>Competencias distribuidas en experiencia real y aprendizaje activo</p>
                </div>

                <div className={styles.skillsGrid}>
                    {/* Experiencia Profesional */}
                    <div className={styles.skillsBlock}>
                        <div className={styles.blockHeader}>
                            <h3>{skillsData.professional.title}</h3>
                            <p>{skillsData.professional.description}</p>
                        </div>

                        <div className={styles.categories}>
                            {skillsData.professional.categories.map((cat) => (
                                <div key={cat.name} className={styles.category}>
                                    <h4>{cat.name}</h4>
                                    <div className={styles.skillsList}>
                                        {cat.skills.map((skill) => (
                                            <div key={skill} className={styles.skill}>
                                                <span className={styles.skillBadge}>{skill}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Aprendizaje y Proyectos */}
                    <div className={styles.skillsBlock}>
                        <div className={styles.blockHeader}>
                            <h3>{skillsData.learning.title}</h3>
                            <p>{skillsData.learning.description}</p>
                        </div>

                        <div className={styles.categories}>
                            {skillsData.learning.categories.map((cat) => (
                                <div key={cat.name} className={styles.category}>
                                    <h4>{cat.name}</h4>
                                    <div className={styles.skillsList}>
                                        {cat.skills.map((skill) => (
                                            <div key={skill} className={styles.skill}>
                                                <span className={`${styles.skillBadge} ${styles.secondary}`}>{skill}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Proficiency Matrix */}
                <div className={styles.matrix}>
                    <h3>Matriz de Competencias</h3>
                    <div className={styles.matrixGrid}>
                        <div className={styles.matrixItem}>
                            <div className={styles.matrixLevel}>⭐⭐⭐⭐⭐</div>
                            <div className={styles.matrixLabel}>Java, Spring Boot, APIs REST</div>
                        </div>
                        <div className={styles.matrixItem}>
                            <div className={styles.matrixLevel}>⭐⭐⭐⭐</div>
                            <div className={styles.matrixLabel}>Oracle SQL, Hibernate/JPA, Microservicios</div>
                        </div>
                        <div className={styles.matrixItem}>
                            <div className={styles.matrixLevel}>⭐⭐⭐</div>
                            <div className={styles.matrixLabel}>Docker, AWS EC2, GitHub Actions, PostgreSQL</div>
                        </div>
                        <div className={styles.matrixItem}>
                            <div className={styles.matrixLevel}>⭐⭐⭐</div>
                            <div className={styles.matrixLabel}>HTML, CSS, JavaScript</div>
                        </div>
                        <div className={styles.matrixItem}>
                            <div className={styles.matrixLevel}>⭐⭐</div>
                            <div className={styles.matrixLabel}>Redis, Cache, Kubernetes, CI/CD</div>
                        </div>
                        <div className={styles.matrixItem}>
                            <div className={styles.matrixLevel}>⭐⭐</div>
                            <div className={styles.matrixLabel}>Python, IA & LLMs</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills

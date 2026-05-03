import React, { useState } from 'react'
import styles from './Experience.module.css'

function Experience() {
    const [expandedId, setExpandedId] = useState('indra')

    const experiences = [
        {
            id: 'indra',
            company: 'Indra Sistemas',
            position: 'Desarrollador de Software',
            period: 'Marzo 2021 – Febrero 2023',
            duration: '2 años',
            keyRole: true,
            description: 'Desarrollo y mantenimiento de funcionalidades backend en Java con Spring Boot, integración con bases de datos Oracle y trabajo en arquitectura basada en microservicios.',
            responsibilities: [
                'Desarrollo de microservicios en Java con Spring Boot',
                'Integración con bases de datos Oracle mediante Hibernate/JPA',
                'Desarrollo de nuevas funcionalidades backend',
                'Resolución de incidencias en producción',
                'Participación en arquitectura basada en microservicios',
                'Trabajo en entornos corporativos con despliegues, mantenimiento y soporte a producción'
            ],
            technologies: [
                'Java', 'Spring Boot', 'Microservicios', 'ZK', 'Hibernate', 'JPA',
                'Oracle', 'Maven', 'IntelliJ IDEA', 'TortoiseSVN', 'Jira', 'Jaspersoft', 'DevOps'
            ],
            impact: 'Experiencia fundamental en desarrollo backend profesional, microservicios y herramientas empresariales reales.'
        },
        {
            id: 'insuit',
            company: 'Insuit',
            position: 'Desarrollador Web',
            period: 'Febrero 2023 – Septiembre 2024',
            duration: '1 año 7 meses',
            keyRole: false,
            description: 'Desarrollo y mantenimiento de aplicaciones web, implementación de mejoras orientadas a accesibilidad y resolución de incidencias en producción.',
            responsibilities: [
                'Desarrollo y mantenimiento de aplicaciones web',
                'Implementación de mejoras de accesibilidad en más de 50 páginas web',
                'Resolución de incidencias en producción',
                'Mantenimiento evolutivo de plataforma',
                'Mejora de rendimiento, calidad de código y compatibilidad web'
            ],
            technologies: [
                'Java', 'HTML', 'CSS', 'JavaScript', 'Git', 'Herramientas de accesibilidad web'
            ],
            impact: 'Experiencia en entorno productivo real, trabajo con código legacy y mejora de sistemas existentes.'
        },
        {
            id: 'kuressaare',
            company: 'Kuressaare Ametikool',
            position: 'Técnico de Sistemas - Erasmus+',
            period: 'Marzo 2019 – Mayo 2019',
            duration: '2 meses',
            keyRole: false,
            description: 'Administración de equipos y sistemas informáticos, instalación y configuración de redes.',
            responsibilities: [
                'Administración de equipos y sistemas informáticos',
                'Instalación y configuración de redes y dispositivos',
                'Mantenimiento de infraestructura'
            ],
            technologies: [
                'Sistemas', 'Redes', 'Hardware'
            ],
            impact: 'Experiencia complementaria en administración de sistemas e infraestructura.'
        }
    ]

    const toggleExpanded = (id) => {
        setExpandedId(expandedId === id ? null : id)
    }

    return (
        <section id="experience" className={styles.experience}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Experiencia Profesional</h2>
                    <p className={styles.subtitle}>Trayectoria en entornos empresariales reales</p>
                </div>

                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <div key={exp.id} className={`${styles.timelineItem} ${expandedId === exp.id ? styles.expanded : ''}`}>
                            <div
                                className={`${styles.card} ${exp.keyRole ? styles.keyRole : ''}`}
                                onClick={() => toggleExpanded(exp.id)}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={styles.companyInfo}>
                                        <h3 className={styles.company}>{exp.company}</h3>
                                        {exp.keyRole && <span className={styles.keyBadge}>Experiencia Principal</span>}
                                    </div>
                                    <div className={styles.period}>{exp.period}</div>
                                </div>

                                <div className={styles.position}>{exp.position}</div>
                                <p className={styles.description}>{exp.description}</p>

                                <div className={styles.technologies}>
                                    {exp.technologies.map((tech) => (
                                        <span key={tech} className="badge">{tech}</span>
                                    ))}
                                </div>

                                {expandedId === exp.id && (
                                    <div className={`${styles.details} fade-in-up`}>
                                        <div className={styles.detailsSection}>
                                            <h4>Responsabilidades Clave</h4>
                                            <ul className={styles.list}>
                                                {exp.responsibilities.map((resp, idx) => (
                                                    <li key={idx}>
                                                        <span className={styles.bullet}>→</span>
                                                        {resp}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {exp.impact && (
                                            <div className={styles.impact}>
                                                <strong>Impacto en mi perfil:</strong> {exp.impact}
                                            </div>
                                        )}
                                    </div>
                                )}

                                <div className={styles.expandIcon}>
                                    {expandedId === exp.id ? '−' : '+'}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.timeline2d}>
                    <div className={styles.timelineLine}></div>
                    {experiences.map((exp) => (
                        <div key={exp.id} className={styles.timelinePoint}>
                            <div className={`${styles.dot} ${exp.keyRole ? styles.keyDot : ''}`}></div>
                            <div className={styles.label}>{exp.company}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience

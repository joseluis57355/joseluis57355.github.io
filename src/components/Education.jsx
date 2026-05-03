import React from 'react'
import styles from './Education.module.css'

function Education() {
    const education = [
        {
            id: 1,
            degree: 'Técnico Superior en Desarrollo de Aplicaciones Web',
            school: 'IES La Senia',
            period: '2019 – 2021',
            description: 'Formación orientada al desarrollo de aplicaciones web completas, incluyendo programación backend, frontend, bases de datos, despliegue y trabajo con entornos Linux.',
            highlights: ['Ciclo superior de FP', 'Java y programación orientada a objetos', 'PHP y Laravel', 'Diseño de bases de datos', 'HTML, CSS y JavaScript', 'Despliegue en entornos Linux', 'Máquinas virtuales']
        },
        {
            id: 2,
            degree: 'Técnico en Sistemas Microinformáticos y Redes',
            school: 'IES La Senia',
            period: '2017 – 2019',
            description: 'Formación base en sistemas operativos, redes, soporte técnico, hardware, servicios de red y fundamentos web.',
            highlights: ['Ciclo medio de FP', 'Administración de sistemas', 'Sistemas operativos', 'Redes e infraestructura', 'Soporte técnico', 'Hardware y mantenimiento', 'HTML y CSS básico', 'Servicios web y Moodle']
        }
    ]


    const learningItems = [
        {
            name: 'Microservices with Spring Boot 3 and Spring Cloud',
            issuer: 'Autoformación técnica basada en el libro de Magnus Larsson',
            year: '2024 – 2025',
            icon: '📚'
        },
        {
            name: 'Proyecto Backend de Gestión de Pedidos',
            issuer: 'Spring Boot, PostgreSQL, Redis, Docker, AWS EC2 y GitHub Actions',
            year: '2025 – Actualidad',
            icon: '🚀'
        },
        {
            name: 'Portfolio Web Profesional',
            issuer: 'React, CSS Modules, responsive design y despliegue web',
            year: '2025 – Actualidad',
            icon: '💻'
        },
        {
            name: 'Automatización para gestión de ofertas de transporte',
            issuer: 'Proyecto privado con Python, JavaScript, scraping y automatización de flujos',
            year: '2025',
            icon: '🤖'
        }
    ]

    return (
        <section className={styles.education}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Formación</h2>
                    <p className={styles.subtitle}>Educación formal, autoformación técnica y proyectos aplicados</p>
                </div>

                <div className={styles.grid}>
                    {/* Educación Formal */}
                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>Educación Formal</h3>

                        <div className={styles.items}>
                            {education.map((item) => (
                                <div key={item.id} className={`${styles.item} card`}>
                                    <div className={styles.itemHeader}>
                                        <div>
                                            <h4 className={styles.degree}>{item.degree}</h4>
                                            <div className={styles.school}>{item.school}</div>
                                        </div>
                                        <div className={styles.period}>{item.period}</div>
                                    </div>

                                    <p className={styles.description}>{item.description}</p>

                                    <div className={styles.highlights}>
                                        {item.highlights.map((h) => (
                                            <span key={h} className={styles.highlight}>{h}</span>
                                        ))}
                                    </div>

                                    {item.grade && (
                                        <div className={styles.grade}>
                                            <span className={styles.gradeLabel}>Calificación:</span>
                                            <span className={styles.gradeValue}>{item.grade}</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                   {/* Formación Complementaria y Proyectos Aplicados */}
                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>Formación Complementaria y Proyectos Aplicados</h3>

                        <div className={styles.learningList}>
                            {learningItems.map((item, idx) => (
                                <div key={idx} className={`${styles.learningItem} card`}>
                                    <div className={styles.learningIcon}>{item.icon}</div>

                                    <div className={styles.learningContent}>
                                        <h4 className={styles.learningName}>{item.name}</h4>

                                        <div className={styles.learningMeta}>
                                            <span>{item.issuer}</span>
                                            <span className={styles.year}>{item.year}</span>
                                        </div>
                                    </div>

                                    <div className={styles.learningBadge}>✓</div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.continueLearning}>
                            <h4>Aprendizaje Continuo</h4>
                            <p>Estoy en constante aprendizaje de nuevas tecnologías y mejores prácticas. Actualmente enfocado en profundizar en:</p>
                            <ul>
                                <li>Kubernetes y orquestación de contenedores avanzada</li>
                                <li>AWS Services (ECS, Lambda, RDS)</li>
                                <li>Spring Cloud y arquitecturas distribuidas</li>
                                <li>Testing avanzado y TDD</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education

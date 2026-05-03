import React from 'react'
import styles from './Projects.module.css'

function Projects() {
    const projects = [
        {
            id: 1,
            title: 'API REST de Gestión de Pedidos',
            description: 'Proyecto backend orientado a portfolio profesional que simula una API de gestión de pedidos desarrollada con Java y Spring Boot, aplicando arquitectura por capas, persistencia relacional, cache con Redis, documentación técnica, testing, contenerización, CI/CD y despliegue en AWS EC2.',
            shortDesc: 'API REST con Spring Boot, PostgreSQL, Redis, Docker y GitHub Actions',
            technologies: [
                'Java', 'Spring Boot', 'Spring Boot Actuator', 'Micrometer', 'PostgreSQL', 'Redis',
                'JPA', 'DTO', 'Mapper', 'Docker', 'AWS', 'GitHub Actions', 'Swagger', 'JUnit', 'Mockito', 'H2', 'Maven'
            ],
            highlights: [
                {
                    icon: '🏗️',
                    title: 'Arquitectura por Capas',
                    desc: 'Controller, Service, Repository, DTO y Mapper'
                },
                {
                    icon: '💾',
                    title: 'Persistencia Robusta',
                    desc: 'PostgreSQL con JPA/Hibernate y configuración mediante variables de entorno'
                },
                {
                    icon: '🧠',
                    title: 'Observabilidad',
                    desc: 'Spring Boot Actuator para health checks y métricas básicas'
                },
                {
                    icon: '🧩',
                    title: 'Cache con Redis',
                    desc: 'Integración de Redis para optimizar rendimiento y tiempos de respuesta'
                },
                {
                    icon: '🧪',
                    title: 'Testing con H2 y Mockito',
                    desc: 'Tests unitarios y de integración con JUnit, Mockito y base de datos H2 en memoria'
                },
                {
                    icon: '📦',
                    title: 'Contenerización',
                    desc: 'Docker con Dockerfile multi-stage'
                },
                {
                    icon: '🔄',
                    title: 'CI/CD',
                    desc: 'Pipeline con GitHub Actions para build y deploy automatizado'
                },
                {
                    icon: '📚',
                    title: 'Documentación',
                    desc: 'Swagger/OpenAPI completamente documentado'
                },
            ],
            features: [
                'Diseño y desarrollo de API REST siguiendo estándares RESTful',
                'Persistencia con PostgreSQL y JPA',
                'Integración de cache Redis para mejorar el rendimiento',
                'Monitorización y métricas con Spring Boot Actuator y Micrometer',
                'Tests con JUnit, Mockito y base de datos H2 en memoria para pruebas sin PostgreSQL desplegado',
                'Arquitectura por capas: Controller, Service, Repository, DTO y Mapper',
                'Contenerización con Docker',
                'Pipeline CI/CD con GitHub Actions',
                'Despliegue en AWS',
                'Documentación con Swagger/OpenAPI',
                'Pruebas unitarias con JUnit',
                'Buenas prácticas de estructura backend y código limpio',
                'Manejo de excepciones y validación robusta'
            ],
            status: 'En evolución activa',
            github: 'https://github.com/joseluis57355/pedidos',
            demo: 'http://18.101.110.59:8080/swagger-ui/index.html',
            documentation: 'https://github.com/joseluis57355/pedidos/blob/main/README.md'
        }
    ]

    return (
        <section id="projects" className={styles.projects}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Proyecto Destacado</h2>
                    <p className={styles.subtitle}>Portfolio profesional orientado a producción real</p>
                </div>

                <div className={styles.projectsList}>
                    {projects.map((project) => (
                        <div key={project.id} className={`${styles.projectCard} card`}>
                            <div className={styles.projectHeader}>
                                <div>
                                    <h3 className={styles.title}>{project.title}</h3>
                                    <p className={styles.shortDesc}>{project.shortDesc}</p>
                                </div>
                                <span className={`${styles.status} badge`}>{project.status}</span>
                            </div>

                            <p className={styles.description}>{project.description}</p>

                            <div className={styles.highlights}>
                                {project.highlights.map((h, idx) => (
                                    <div key={idx} className={styles.highlightItem}>
                                        <div className={styles.highlightIcon}>{h.icon}</div>
                                        <div>
                                            <div className={styles.highlightTitle}>{h.title}</div>
                                            <div className={styles.highlightDesc}>{h.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.technologies}>
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="badge secondary">{tech}</span>
                                ))}
                            </div>

                            <div className={styles.features}>
                                <h4>Características principales</h4>
                                <ul>
                                    {project.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <span className={styles.check}>✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.buttons}>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    Ver Código en GitHub
                                </a>
                                <a href={project.documentation} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                    Documentación API
                                </a>
                                {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                                        Ver Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.cta}>
                    <h3>¿Quieres ver más proyectos?</h3>
                    <p>Visita mi perfil de GitHub para explorar más proyectos y contribuciones</p>
                    <a href="https://github.com/joseluis57355/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        Ir a GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects

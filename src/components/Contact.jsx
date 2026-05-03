import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.css'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Aquí iría la lógica para enviar el email
        // Por ahora solo simularemos
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 5000)
        setFormData({ name: '', email: '', subject: '', message: '' })
    }

    return (
        <section id="contact" className={styles.contact}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Contacto</h2>
                    <p className={styles.subtitle}>
                        Disponible para oportunidades laborales, colaboraciones o simplemente para charlar sobre backend y DevOps
                    </p>
                </div>

                <div className={styles.content}>
                    <div className={styles.info}>
                        <h3>Información de Contacto</h3>

                        <div className={styles.infoItem}>
                            <div className={styles.icon}>📧</div>
                            <div>
                                <div className={styles.label}>Email</div>
                                <a href="mailto:joseluis57355@gmail.com">joseluis57355@gmail.com</a>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.icon}>📍</div>
                            <div>
                                <div className={styles.label}>Ubicación</div>
                                <span>Valencia, España</span>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.icon}>🚗</div>
                            <div>
                                <div className={styles.label}>Disponibilidad</div>
                                <span>Inmediata | Carné de conducir | Vehículo propio</span>
                            </div>
                        </div>

                        <div className={styles.divider}></div>

                        <div className={styles.socialLinks}>
                            <h4>Sígueme en redes</h4>
                            <div className={styles.socials}>
                                <a href="https://github.com/joseluis57355" target="_blank" rel="noopener noreferrer" className={styles.social} title="GitHub">
                                    <span className={styles.icon}>💻</span>
                                    GitHub
                                </a>
                                <a href="https://www.linkedin.com/in/jose-luis-sanchez-tebar" target="_blank" rel="noopener noreferrer" className={styles.social} title="LinkedIn">
                                    <span className={styles.icon}>💼</span>
                                    LinkedIn
                                </a>
                            </div>
                        </div>

                        <div className={styles.cvSection}>
                            <h4>Descargar CV</h4>
                            <a href="/public/CV-Jose-Luis-Sanchez.txt" download className="btn btn-secondary">
                                📄 Descargar CV (txt)
                            </a>
                        </div>
                    </div>

                    <div className={styles.form}>
                        {submitted && (
                            <div className={styles.successMessage}>
                                ✓ Mensaje enviado correctamente. Te responderé pronto.
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Tu nombre"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="tu@email.com"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="subject">Asunto</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="¿Sobre qué quieres hablar?"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message">Mensaje</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="Tu mensaje aquí..."
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Enviar Mensaje
                            </button>

                            <p className={styles.note}>
                                Responderé a tu mensaje lo antes posible. También puedes contactarme directamente por email o LinkedIn.
                            </p>
                        </form>
                    </div>
                </div>

                <div className={styles.cta}>
                    <h3>¿Buscas un Backend Java Developer con orientación Cloud & DevOps?</h3>
                    <p>
                        Soy un desarrollador con 3+ años de experiencia profesional, especializado en Java, Spring Boot, microservicios y estoy ampliando mi perfil hacia DevOps y cloud. Disponible inmediatamente.
                    </p>
                    <a href="mailto:joseluis57355@gmail.com" className="btn btn-primary">
                        Contáctame hoy
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact

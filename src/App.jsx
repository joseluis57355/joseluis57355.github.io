import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import BackendDevOps from './components/BackendDevOps'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="App">
            <Header scrolled={scrolled} />
            <main>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <BackendDevOps />
                <Skills />
                <Education />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App

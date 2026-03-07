import React, { useState, useEffect } from 'react';
import './NavBar.css';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <h2>CINEON</h2>
                </div>
                <nav className="navbar-links">
                    <a href="#solucion">La Solución</a>
                    <a href="#como-funciona">Cómo Funciona</a>
                    <a href="#impacto">Impacto Social</a>
                    <a href="#equipo">Equipo</a>
                </nav>
                <div className="navbar-cta">
                    <a href="#impacto" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>Conoce Más</a>
                </div>
            </div>
        </header>
    );
};

export default NavBar;

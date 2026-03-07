import React from 'react';
import './HeroSection.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const HeroSection = () => {
    const setRef = useIntersectionObserver();

    return (
        <section className="hero" id="inicio">
            <div className="hero-video-wrapper">
                <video
                    className="hero-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_074215_04640ca7-042c-45d6-bb56-58b1e8a42489.mp4" type="video/mp4" />
                </video>
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content">
                <h1 className="hero-title reveal" ref={setRef}>CINEON</h1>
                <h2 className="hero-subtitle reveal reveal-delay-1" ref={setRef}>
                    El cine llega a donde nunca antes llegó.
                </h2>
                <p className="hero-text reveal reveal-delay-2" ref={setRef}>
                    Una empresa de entretenimiento y publicidad móvil que transforma parques, calles y canchas en salas de cine comunitarias para las familias de estratos 1, 2 y 3.
                </p>

                <div className="hero-buttons reveal reveal-delay-3" ref={setRef}>
                    <a href="#como-funciona" className="btn-primary">Explorar el proyecto</a>
                    <a href="#impacto" className="btn-secondary">Conocer el impacto social</a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

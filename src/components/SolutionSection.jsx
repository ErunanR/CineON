import React from 'react';
import './SolutionSection.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const SolutionSection = () => {
    const setRefTitle = useIntersectionObserver();
    const setRefCard1 = useIntersectionObserver();
    const setRefCard2 = useIntersectionObserver();
    const setRefCard3 = useIntersectionObserver();
    const setRefCard4 = useIntersectionObserver();

    const cards = [
        {
            title: "Cine comunitario",
            description: "Proyección de películas en parques y barrios.",
            icon: "🎥",
            ref: setRefCard1,
            delay: "reveal-delay-1"
        },
        {
            title: "Publicidad con impacto",
            description: "Empresas patrocinan funciones gratuitas para la comunidad.",
            icon: "🤝",
            ref: setRefCard2,
            delay: "reveal-delay-2"
        },
        {
            title: "Experiencia cinematográfica real",
            description: "Pantalla inflable gigante, sonido profesional y proyección de alta calidad.",
            icon: "🎬",
            ref: setRefCard3,
            delay: "reveal-delay-3"
        },
        {
            title: "Activación social",
            description: "Eventos que integran educación, cultura y convivencia.",
            icon: "🌍",
            ref: setRefCard4,
            delay: "reveal-delay-4"
        }
    ];

    return (
        <section className="solution-section" id="solucion">
            <div className="container">
                <div className="solution-header reveal" ref={setRefTitle}>
                    <h2>CINEON: Cine móvil para transformar comunidades.</h2>
                    <p>Convertimos espacios públicos en salas de cine al aire libre mediante equipos portátiles de proyección profesional.</p>
                </div>

                <div className="cards-grid">
                    {cards.map((card, index) => (
                        <div className={`feature-card reveal ${card.delay}`} ref={card.ref} key={index}>
                            <div className="card-icon">{card.icon}</div>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;

import React from 'react';
import './SocialImpactSection.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const SocialImpactSection = () => {
    const setRefTitle = useIntersectionObserver();

    const impacts = [
        { title: "Entretenimiento gratuito", desc: "Para comunidades vulnerables", value: "100%", delay: "reveal-delay-1" },
        { title: "Recuperación de espacios", desc: "Transformación de parques y canchas", value: "Espacios", delay: "reveal-delay-2" },
        { title: "Integración comunitaria", desc: "Uniendo a los vecinos a través del cine", value: "Unión", delay: "reveal-delay-3" },
        { title: "Educación social", desc: "Mediante contenido audiovisual seleccionado", value: "Cultura", delay: "reveal-delay-4" },
        { title: "Acceso cultural", desc: "Para familias de estratos 1, 2 y 3", value: "Derecho", delay: "reveal-delay-1" }
    ];

    return (
        <section className="social-impact" id="impacto">
            <div className="container">
                <div className="impact-header reveal" ref={setRefTitle}>
                    <h2>Impacto Social</h2>
                    <p>Métricas que transforman vidas y construyen sociedad</p>
                </div>

                <div className="impact-grid">
                    {impacts.map((impact, index) => {
                        const setRef = useIntersectionObserver();
                        return (
                            <div className={`impact-card reveal ${impact.delay}`} ref={setRef} key={index}>
                                <div className="impact-value">{impact.value}</div>
                                <div className="impact-details">
                                    <h3>{impact.title}</h3>
                                    <p>{impact.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SocialImpactSection;

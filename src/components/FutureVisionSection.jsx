import React from 'react';
import './FutureVisionSection.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const FutureVisionSection = () => {
    const setRefContent = useIntersectionObserver();

    const phasesData = [
        {
            phase: "FASE 1: Consolidación",
            years: [
                { year: "Año 1", events: "60 Eventos", desc: "Inicio con 1 unidad móvil (Bogotá)." },
                { year: "Año 2", events: "72 Eventos", desc: "Incremento de frecuencia mensual (6 eventos/mes)." },
                { year: "Año 3", events: "84 Eventos", desc: "Máxima eficiencia de la 1ra unidad operativa." }
            ]
        },
        {
            phase: "FASE 2: Expansión",
            years: [
                { year: "Año 4", events: "100 Eventos", desc: "Adquisición de la 2da unidad móvil." },
                { year: "Año 5", events: "115 Eventos", desc: "Apertura de operaciones en Región Central." },
                { year: "Año 6", events: "130 Eventos", desc: "Inicio del programa de Microfranquicias." },
                { year: "Año 7", events: "150 Eventos", desc: "Expansión a Región Caribe y Pacífica." },
                { year: "Año 8", events: "170 Eventos", desc: "Consolidación de red logística nacional." }
            ]
        },
        {
            phase: "FASE 3: Liderazgo",
            years: [
                { year: "Año 9", events: "190 Eventos", desc: "Digitalización total de métricas de impacto." },
                { year: "Año 10", events: "210 Eventos", desc: "3ra unidad móvil propia + Red de franquicias." },
                { year: "Año 11", events: "230 Eventos", desc: "Liderazgo en el sector de Marketing Social." },
                { year: "Año 12", events: "250 Eventos", desc: "Producción y exhibición de contenidos propios." }
            ]
        }
    ];

    return (
        <section className="future-vision" id="futuro">
            <div className="container">
                <div className="vision-content reveal" ref={setRefContent}>
                    <h2 className="vision-title">Plan de Expansión</h2>
                    <p className="vision-subtitle">Hoja de ruta para el crecimiento y la democratización del cine</p>

                    <div className="roadmap-container">
                        <div className="roadmap-line"></div>
                        <div className="roadmap-items">
                            {phasesData.map((phaseGroup, phaseIndex) => (
                                <div className="roadmap-phase-group" key={`phase-${phaseIndex}`}>
                                    <div className="phase-title-badge">{phaseGroup.phase}</div>
                                    {phaseGroup.years.map((item, index) => {
                                        const setRef = useIntersectionObserver();
                                        return (
                                            <div className={`roadmap-item reveal reveal-delay-${(index % 3) + 1}`} ref={setRef} key={`item-${phaseIndex}-${index}`}>
                                                <div className="roadmap-dot"></div>
                                                <div className="roadmap-content">
                                                    <h3 className="roadmap-year">{item.year} <span className="events-badge">{item.events}</span></h3>
                                                    <p className="roadmap-desc">{item.desc}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FutureVisionSection;

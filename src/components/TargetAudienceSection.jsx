import React from 'react';
import './TargetAudienceSection.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const TargetAudienceSection = () => {
    const setRefTitle = useIntersectionObserver();
    const setRefRegion = useIntersectionObserver();
    const setRefSeg = useIntersectionObserver();

    const regionData = [
        { region: "Bogotá D.C.", percentage: "45.7%", desc: "Mercado con mayor tracción cultural del país; concentra casi la mitad de la asistencia nacional." },
        { region: "Central", percentage: "34.0%", desc: "Mercado secundario (Potencial para expansión de microfranquicias en Fase 2)." },
        { region: "Oriental", percentage: "31.8%", desc: "Mercado secundario (Potencial para expansión Fase 2)." },
        { region: "Pacífica", percentage: "29.2%", desc: "Mercado de penetración a mediano plazo." },
        { region: "Caribe", percentage: "23.5%", desc: "Mercado con barreras culturales frente al formato tradicional." },
        { region: "Amazonía / Orinoquía", percentage: "22.1%", desc: "Zona con mayor déficit de infraestructura, foco para responsabilidad social." }
    ];

    const segmentationData = [
        { title: "Geográfica", icon: "🗺️", desc: "Localidades de Bogotá con predominancia de estratos 1, 2 y 3." },
        { title: "Demográfica", icon: "👨‍👩‍👧‍👦", desc: "Hombres y mujeres de 5 a 50 años (Foco en núcleos familiares)." },
        { title: "Socioeconómica", icon: "💰", desc: "Población con ingresos limitados para gasto en ocio cultural." },
        { title: "Psicográfica", icon: "🧠", desc: "Valoración de la unidad familiar, convivencia ciudadana y cine." },
        { title: "Conductual", icon: "🤝", desc: "Alta receptividad a ofertas de valor gratuitas y eventos de barrio." }
    ];

    return (
        <section className="target-audience" id="audiencia">
            <div className="container">
                <div className="audience-header reveal" ref={setRefTitle}>
                    <h2 className="section-title">Público y Audiencia Objetivo</h2>
                    <p>Conociendo a nuestra comunidad y las regiones con mayor potencial</p>
                </div>

                <div className="audience-content">
                    <div className="segmentation-grid reveal reveal-delay-1" ref={setRefSeg}>
                        <h3>Segmentación Detallada</h3>
                        <div className="seg-cards">
                            {segmentationData.map((item, index) => (
                                <div className="seg-card" key={index}>
                                    <div className="seg-icon">{item.icon}</div>
                                    <div className="seg-info">
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="region-analysis reveal reveal-delay-2" ref={setRefRegion}>
                        <h3>Atractivo del Mercado por Regiones</h3>
                        <div className="region-list">
                            {regionData.map((item, index) => (
                                <div className="region-item" key={index}>
                                    <div className="region-header">
                                        <span className="region-name">{item.region}</span>
                                        <span className="region-pct">{item.percentage}</span>
                                    </div>
                                    <p className="region-desc">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TargetAudienceSection;

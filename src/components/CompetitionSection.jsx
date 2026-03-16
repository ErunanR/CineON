import React from 'react';
import './CompetitionSection.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const CompetitionSection = () => {
    const setRefTitle = useIntersectionObserver();
    const setRefTable = useIntersectionObserver();

    const competitionData = [
        {
            type: "Competencia Directa",
            description: "Otras empresas de cine móvil",
            icon: "🎪",
            threat: "Alta",
            differentiation: "CINEON ofrece un modelo B2B2C enfocado en impacto social y gratuidad total para el usuario final."
        },
        {
            type: "Competencia Indirecta",
            description: "Salas de cine y eventos culturales",
            icon: "🍿",
            threat: "Media",
            differentiation: "Acercamos la experiencia a los barrios donde no hay salas tradicionales."
        },
        {
            type: "Competencia Informal",
            description: "Proyecciones comunitarias",
            icon: "🏘️",
            threat: "Baja",
            differentiation: "Ofrecemos calidad profesional en imagen (4K) y sonido, asegurando una experiencia premium."
        }
    ];

    return (
        <section className="competition" id="competencia">
            <div className="container">
                <div className="comp-header reveal" ref={setRefTitle}>
                    <h2 className="section-title">Análisis de Competencia</h2>
                    <p>Entendiendo nuestro entorno y ventajas competitivas</p>
                </div>

                <div className="table-responsive reveal reveal-delay-1" ref={setRefTable}>
                    <table className="comp-table">
                        <thead>
                            <tr>
                                <th>Nivel</th>
                                <th>Descripción</th>
                                <th>Diferenciador CINEON</th>
                            </tr>
                        </thead>
                        <tbody>
                            {competitionData.map((item, index) => (
                                <tr key={index}>
                                    <td className="comp-type">
                                        <span className="comp-icon">{item.icon}</span>
                                        <span className="type-label">{item.type}</span>
                                    </td>
                                    <td className="comp-desc">{item.description}</td>
                                    <td className="comp-diff">{item.differentiation}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default CompetitionSection;

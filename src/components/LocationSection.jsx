import React from 'react';
import './LocationSection.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const LocationSection = () => {
    const setRefTitle = useIntersectionObserver();
    const setRefList = useIntersectionObserver();

    return (
        <section className="location-section">
            <div className="location-overlay"></div>
            <div className="container">
                <h2 className="section-title reveal" ref={setRefTitle}>Bogotá como punto de partida</h2>

                <div className="location-content reveal reveal-delay-2" ref={setRefList}>
                    <p className="location-intro">
                        CINEON inicia operaciones en la capital colombiana por sus características estratégicas:
                    </p>

                    <ul className="location-list">
                        <li>
                            <span className="icon">🏢</span>
                            <span>Alto tejido empresarial</span>
                        </li>
                        <li>
                            <span className="icon">🏛️</span>
                            <span>Presencia de entidades públicas</span>
                        </li>
                        <li>
                            <span className="icon">📈</span>
                            <span>Alta densidad poblacional</span>
                        </li>
                        <li>
                            <span className="icon">🎭</span>
                            <span>Necesidad cultural en barrios periféricos</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;

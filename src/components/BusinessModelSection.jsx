import React from 'react';
import './BusinessModelSection.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const BusinessModelSection = () => {
    const setRefTitle = useIntersectionObserver();
    const setRefFlow = useIntersectionObserver();
    const setRefIncome = useIntersectionObserver();

    return (
        <section className="business-model" id="modelo">
            <div className="container">
                <h2 className="section-title reveal" ref={setRefTitle}>Modelo de Negocio B2B2C</h2>

                <div className="model-visual-flow reveal reveal-delay-1" ref={setRefFlow}>
                    <div className="flow-card">
                        <div className="flow-icon">🏢</div>
                        <h3>Empresas y Entidades públicas</h3>
                        <span className="flow-tag">Patrocinan</span>
                    </div>

                    <div className="flow-arrow">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <div className="flow-card cineon-brand">
                        <div className="flow-icon">📽️</div>
                        <h3>CINEON</h3>
                        <span className="flow-tag accent">Crea experiencias</span>
                    </div>

                    <div className="flow-arrow">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <div className="flow-card">
                        <div className="flow-icon">👥</div>
                        <h3>Comunidades</h3>
                        <span className="flow-tag">Disfrutan gratis</span>
                    </div>
                </div>

                <div className="income-sources reveal reveal-delay-2" ref={setRefIncome}>
                    <h3>Fuentes de Ingreso Principales</h3>
                    <div className="income-grid">
                        <div className="income-item">
                            <span className="income-bullet"></span>
                            <h4>Publicidad y patrocinio</h4>
                        </div>
                        <div className="income-item">
                            <span className="income-bullet"></span>
                            <h4>Venta de alimentos</h4>
                        </div>
                        <div className="income-item">
                            <span className="income-bullet"></span>
                            <h4>Alquiler de equipos</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessModelSection;

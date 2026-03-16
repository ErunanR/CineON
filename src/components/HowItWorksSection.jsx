import React from 'react';
import './HowItWorksSection.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const HowItWorksSection = () => {
    const setRefTitle = useIntersectionObserver();

    const steps = [
        { num: "01", title: "Gestión comercial", icon: "🤝" },
        { num: "02", title: "Planeación del evento", icon: "📋" },
        { num: "03", title: "Montaje técnico", icon: "⚙️" },
        { num: "04", title: "Ejecución del evento", icon: "🎬" },
        { num: "05", title: "Desmontaje y evaluación", icon: "📊" }
    ];

    return (
        <section className="how-it-works" id="como-funciona">
            <div className="container">
                <h2 className="section-title reveal" ref={setRefTitle}>Cómo funciona CINEON</h2>

                <div className="timeline-container">
                    <div className="timeline-line"></div>
                    <div className="timeline-steps">
                        {steps.map((step, index) => {
                            const setRefStep = useIntersectionObserver();
                            return (
                                <div className={`timeline-step reveal reveal-delay-${index + 1}`} ref={setRefStep} key={index}>
                                    <div className="step-number">
                                        <span className="step-icon">{step.icon}</span>
                                    </div>
                                    <div className="step-content">
                                        <h4>Fase {index + 1}</h4>
                                        <p>{step.title}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;

import React from 'react';
import './FutureVisionSection.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const FutureVisionSection = () => {
    const setRefContent = useIntersectionObserver();

    return (
        <section className="future-vision" id="futuro">
            <div className="container">
                <div className="vision-content reveal" ref={setRefContent}>
                    <h2 className="vision-title">El futuro de CINEON</h2>

                    <div className="vision-cards">
                        <div className="vision-card">
                            <div className="vision-icon">🇨🇴</div>
                            <h3>Expansión Nacional</h3>
                            <p>Red nacional de cines móviles llegando a cada rincón del país.</p>
                        </div>

                        <div className="vision-card">
                            <div className="vision-icon">🏪</div>
                            <h3>Microfranquicias</h3>
                            <p>Modelo de microfranquicias comunitarias para empoderar a emprendedores locales.</p>
                        </div>

                        <div className="vision-card">
                            <div className="vision-icon">🌟</div>
                            <h3>Impacto Total</h3>
                            <p>Generación de impacto cultural significativo y medible en toda Colombia.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FutureVisionSection;

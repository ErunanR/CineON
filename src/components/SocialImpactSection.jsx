import React, { useState, useEffect, useRef } from 'react';
import './SocialImpactSection.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const AnimatedCounter = ({ end, duration = 2000, suffix = "+" }) => {
    const [count, setCount] = useState(0);
    const setRef = useIntersectionObserver();
    const countRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
             if (countRef.current) {
                const rect = countRef.current.getBoundingClientRect();
                if (rect.top < window.innerHeight && !hasAnimated) {
                    setHasAnimated(true);
                    let startTimestamp = null;
                    const step = (timestamp) => {
                        if (!startTimestamp) startTimestamp = timestamp;
                        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                        setCount(Math.floor(progress * end));
                        if (progress < 1) {
                            window.requestAnimationFrame(step);
                        } else {
                            setCount(end);
                        }
                    };
                    window.requestAnimationFrame(step);
                }
             }
        };

        window.addEventListener('scroll', handleScroll);
        // Check initially
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [end, duration, hasAnimated]);

    return (
        <div className="impact-value" ref={countRef}>
            {count.toLocaleString()}{suffix}
        </div>
    );
};

const SocialImpactSection = () => {
    const setRefTitle = useIntersectionObserver();

    const impacts = [
        { title: "Eventos Realizados", icon: "🎬", value: 60, delay: "reveal-delay-1" },
        { title: "Personas Beneficiadas", icon: "👥", value: 12000, delay: "reveal-delay-2" },
        { title: "Niños Impactados", icon: "🧒", value: 4500, delay: "reveal-delay-3" },
        { title: "Barrios Intervenidos", icon: "🏘️", value: 20, delay: "reveal-delay-4" }
    ];

    return (
        <section className="social-impact" id="impacto">
            <div className="container">
                <div className="impact-header reveal" ref={setRefTitle}>
                    <h2>Impacto Social</h2>
                    <p>Métricas que transforman vidas y construyen sociedad</p>
                </div>

                <div className="impact-grid custom-grid">
                    {impacts.map((impact, index) => {
                        const setRef = useIntersectionObserver();
                        return (
                            <div className={`impact-card reveal ${impact.delay}`} ref={setRef} key={index}>
                                <div className="impact-icon-top">{impact.icon}</div>
                                <AnimatedCounter end={impact.value} />
                                <div className="impact-details">
                                    <h3>{impact.title}</h3>
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

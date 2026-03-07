import React from 'react';
import './OrganigramSection.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const OrganigramSection = () => {
    const setRefTitle = useIntersectionObserver();
    const setRefTree = useIntersectionObserver();

    return (
        <section className="organigram-section" id="organigrama">
            <div className="container">
                <h2 className="section-title reveal" ref={setRefTitle}>Estructura Organizacional</h2>

                <div className="org-tree reveal reveal-delay-2" ref={setRefTree}>
                    <div className="org-node leader">
                        <div className="org-card">
                            <h3>Director del Proyecto</h3>
                        </div>
                    </div>

                    <div className="org-branches">
                        <div className="org-node">
                            <div className="org-card">
                                <h4>Área Comercial</h4>
                                <p>Gestión de patrocinadores y alianzas</p>
                            </div>
                        </div>

                        <div className="org-node">
                            <div className="org-card">
                                <h4>Área Operativa</h4>
                                <p>Producción de eventos</p>
                            </div>
                        </div>

                        <div className="org-node">
                            <div className="org-card">
                                <h4>Área Logística</h4>
                                <p>Transporte y montaje de equipos</p>
                            </div>
                        </div>

                        <div className="org-node">
                            <div className="org-card">
                                <h4>Área Comunitaria</h4>
                                <p>Relación con barrios y juntas comunales</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrganigramSection;

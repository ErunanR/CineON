import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2>CINEON</h2>
                        <p>El cine llega a donde nunca antes llegó.</p>
                    </div>

                    <div className="footer-credits">
                        <div className="credit-block">
                            <h4>Proyecto Académico</h4>
                            <p>Universidad Distrital Francisco José de Caldas</p>
                            <p>Facultad de Medio Ambiente y Recursos Naturales</p>
                            <p>Ingeniería Topográfica</p>
                        </div>

                        <div className="credit-block">
                            <h4>Asignatura</h4>
                            <p>Formulación y Evaluación de Proyectos</p>
                            <p className="year">2026</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 CINEON. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

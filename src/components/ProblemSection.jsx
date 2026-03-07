import React from 'react';
import './ProblemSection.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ProblemSection = () => {
    const setRefTitle = useIntersectionObserver();
    const setRefText1 = useIntersectionObserver();
    const setRefText2 = useIntersectionObserver();
    const setRefText3 = useIntersectionObserver();

    return (
        <section className="problem-section" id="problema">
            <div className="container">
                <h2 className="section-heading reveal" ref={setRefTitle}>
                    El acceso al cine <span className="highlight-text">no es igual</span> para todos.
                </h2>

                <div className="storytelling-content">
                    <p className="story-paragraph reveal reveal-delay-1" ref={setRefText1}>
                        En muchas ciudades colombianas, las salas de cine se concentran en centros comerciales de estratos medios y altos, dejando a miles de familias sin acceso real al entretenimiento cultural.
                    </p>

                    <p className="story-paragraph reveal reveal-delay-2" ref={setRefText2}>
                        El costo de transporte, boletería y alimentos convierte el cine en un lujo inaccesible para muchos hogares.
                    </p>

                    <p className="story-conclusion reveal reveal-delay-3" ref={setRefText3}>
                        CINEON nace para cambiar esta realidad.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;

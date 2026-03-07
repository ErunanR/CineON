import React from 'react';
import './TeamSection.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const TeamSection = () => {
    const setRefTitle = useIntersectionObserver();

    const members = [
        { name: "Sergio Hernán Rico Sierra", code: "20232732018", email: "shrico@udistrital.edu.co" },
        { name: "Diego Camilo Gutiérrez Osorio", code: "20222732011", email: "dcgutierrezo@udistrital.edu.co" },
        { name: "Jorge Armando Tobón Oñate", code: "20232732013", email: "jatobono@udistrital.edu.co" },
        { name: "Laura Daniela Figueroa Llanos", code: "20211131015", email: "ldfigueroal@udistrital.edu.co" },
        { name: "Maximiliano Garzón Vargas", code: "20242732001", email: "mgarzonv@udistrital.edu.co" },
        { name: "Sonia Milena Firacative Delgado", code: "20222785007", email: "smfiracatived@udistrital.edu.co" },
        { name: "Danithza Hincapié González", code: "20251732011", email: "ddhincapieg@udistrital.edu.co" }
    ];

    return (
        <section className="team-section" id="equipo">
            <div className="container">
                <h2 className="section-title reveal" ref={setRefTitle}>Equipo CINEON</h2>

                <div className="team-grid">
                    {members.map((member, index) => {
                        const setRef = useIntersectionObserver();
                        return (
                            <div className={`team-card reveal reveal-delay-${(index % 4) + 1}`} ref={setRef} key={index}>
                                <div className="avatar">
                                    {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                                </div>
                                <h3>{member.name}</h3>
                                <p className="member-code">Cód: {member.code}</p>
                                <a href={`mailto:${member.email}`} className="member-email">{member.email}</a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;

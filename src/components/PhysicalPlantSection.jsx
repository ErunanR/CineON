import React from 'react';
import './PhysicalPlantSection.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const PhysicalPlantSection = () => {
    const setRefTitle = useIntersectionObserver();
    const setRefAdmin = useIntersectionObserver();
    const setRefMobile = useIntersectionObserver();

    const adminAreas = [
        "Almacenamiento de equipos",
        "Almacenamiento de insumos",
        "Oficina administrativa",
        "Zona de carga y mantenimiento",
        "Servicios sanitarios"
    ];

    const mobileEquipment = [
        { name: "Pantalla inflable 6x4", icon: "📺" },
        { name: "Proyector láser 4K", icon: "📽️" },
        { name: "Cabinas de sonido", icon: "🔊" },
        { name: "Mezcladora", icon: "🎛️" },
        { name: "Micrófonos", icon: "🎤" },
        { name: "Sillas", icon: "🪑" },
        { name: "Equipos de comida", icon: "🍿" }
    ];

    return (
        <section className="physical-plant" id="planta-fisica">
            <div className="container">
                <h2 className="section-title reveal" ref={setRefTitle}>Planta Física y Operativa</h2>
                
                <div className="plant-grid">
                    <div className="plant-card reveal reveal-delay-1" ref={setRefAdmin}>
                        <div className="plant-header">
                            <span className="plant-icon">🏢</span>
                            <h3>Sede Administrativa</h3>
                        </div>
                        <p className="plant-desc">Centro de operaciones logísticas y gestión de la empresa.</p>
                        <ul className="plant-list">
                            {adminAreas.map((area, index) => (
                                <li key={index}>
                                    <span className="bullet"></span>
                                    {area}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="plant-card reveal reveal-delay-2" ref={setRefMobile}>
                        <div className="plant-header">
                            <span className="plant-icon">🚛</span>
                            <h3>Unidad Móvil</h3>
                        </div>
                        <p className="plant-desc">Equipamiento técnico transportable para la proyección.</p>
                        <div className="equipment-grid">
                            {mobileEquipment.map((item, index) => (
                                <div className="equipment-item" key={index}>
                                    <span className="eq-icon">{item.icon}</span>
                                    <span className="eq-name">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhysicalPlantSection;

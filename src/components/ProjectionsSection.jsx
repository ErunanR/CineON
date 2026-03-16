import React from 'react';
import './ProjectionsSection.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const eventsData = [
  { year: 'Año 1', eventos: 60, mes: 5 },
  { year: 'Año 2', eventos: 72, mes: 6 },
  { year: 'Año 3', eventos: 84, mes: 7 },
];

const incomeData = [
  { name: 'Publicidad', ingresos: 45 },
  { name: 'Alimentos', ingresos: 35 },
  { name: 'Alquiler', ingresos: 20 },
];

const perEventIncome = [
  { fuente: "Publicidad", concepto: "Proyección de video institucional", valor: "$3.000.000" },
  { fuente: "Venta de alimentos", concepto: "Activaciones de marca", valor: "$1.350.000" },
  { fuente: "Alquiler de equipos", concepto: "Menciones y presencia de marca", valor: "$870.000" },
  { fuente: "Total por Evento", concepto: "Ingreso base promedio", valor: "$5.220.000", isTotal: true }
];

const yearlyProjections = [
  { year: "Año 1 (2026)", events: 60, monthly: "$26.100.000", yearly: "$313.200.000" },
  { year: "Año 2 (2027)", events: 72, monthly: "$31.320.000", yearly: "$375.840.000" },
  { year: "Año 3 (2028)", events: 84, monthly: "$36.540.000", yearly: "$438.480.000" },
  { year: "Año 4 (2029)", events: 100, monthly: "$43.500.000", yearly: "$522.000.000" },
  { year: "Año 5 (2030)", events: 115, monthly: "$50.025.000", yearly: "$600.300.000" },
  { year: "Año 10 (2035)", events: 210, monthly: "$91.350.000", yearly: "$1.096.200.000" }
];

const ProjectionsSection = () => {
    const setRefTitle = useIntersectionObserver();
    const setRefCharts = useIntersectionObserver();

    return (
        <section className="projections" id="proyecciones">
            <div className="container">
                <div className="projections-header reveal" ref={setRefTitle}>
                    <h2 className="section-title">Proyecciones del Proyecto</h2>
                    <p>Crecimiento operativo y diversificación de ingresos</p>
                </div>

                <div className="charts-grid reveal reveal-delay-1" ref={setRefCharts}>
                    <div className="chart-card">
                        <h3>Proyección de Eventos Anuales</h3>
                        <p className="chart-subtitle">Crecimiento sostenido (Base de ≈5 eventos/mes)</p>
                        <div className="chart-wrapper">
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={eventsData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                                    <XAxis dataKey="year" stroke="#CCCCCC" tick={{fill: '#CCCCCC', fontSize: 12}} />
                                    <YAxis stroke="#CCCCCC" tick={{fill: '#CCCCCC', fontSize: 12}} />
                                    <Tooltip 
                                        contentStyle={{ backgroundColor: 'rgba(11, 19, 43, 0.95)', borderColor: '#E55604', borderRadius: '8px', color: '#fff' }}
                                        itemStyle={{ color: '#E55604', fontWeight: 'bold' }}
                                    />
                                    <Legend wrapperStyle={{ paddingTop: '20px' }} />
                                    <Line type="monotone" dataKey="eventos" name="Total Eventos" stroke="#E55604" strokeWidth={3} activeDot={{ r: 8 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="chart-card">
                        <h3>Distribución de Ingresos (%)</h3>
                        <p className="chart-subtitle">Modelo de negocio diversificado</p>
                        <div className="chart-wrapper">
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={incomeData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                                    <XAxis dataKey="name" stroke="#CCCCCC" tick={{fill: '#CCCCCC', fontSize: 12}} />
                                    <YAxis tickFormatter={(tick) => `${tick}%`} stroke="#CCCCCC" tick={{fill: '#CCCCCC', fontSize: 12}} />
                                    <Tooltip 
                                        cursor={{fill: 'rgba(255,255,255,0.05)'}}
                                        contentStyle={{ backgroundColor: 'rgba(11, 19, 43, 0.95)', borderColor: '#E55604', borderRadius: '8px', color: '#fff' }}
                                        itemStyle={{ color: '#E55604', fontWeight: 'bold' }}
                                    />
                                    <Legend wrapperStyle={{ paddingTop: '20px' }} />
                                    <Bar dataKey="ingresos" name="Participación" fill="#E55604" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                <div className="financial-tables reveal reveal-delay-2">
                    <div className="table-container">
                        <h3>Detalle de Ingresos por Evento</h3>
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Fuente de Ingreso</th>
                                    <th>Concepto Principal</th>
                                    <th>Valor Promedio Estimado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {perEventIncome.map((item, index) => (
                                    <tr key={index} className={item.isTotal ? 'row-total' : ''}>
                                        <td>{item.fuente}</td>
                                        <td>{item.concepto}</td>
                                        <td className="financial-value">{item.valor}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="table-container">
                        <h3>Proyección de Ingresos Base</h3>
                        <p className="table-subtitle">Valores aproximados (Sin IPC) a lo largo del tiempo.</p>
                        <div className="table-scroll-wrapper">
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Periodo</th>
                                        <th>Eventos Proyectados</th>
                                        <th>Ingreso Promedio Mensual</th>
                                        <th>Ingreso Bruto Anual</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {yearlyProjections.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.year}</td>
                                            <td>{item.events}</td>
                                            <td className="financial-value">{item.monthly}</td>
                                            <td className="financial-value highlight-value">{item.yearly}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectionsSection;

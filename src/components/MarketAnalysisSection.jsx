import React from 'react';
import './MarketAnalysisSection.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  {
    name: 'Estratos 1 y 2',
    asistencia: 21.4,
  },
  {
    name: 'Estrato 3',
    asistencia: 43.2,
  },
  {
    name: 'Estratos 4, 5 y 6',
    asistencia: 68.5,
  },
];

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label}`}</p>
          <p className="intro">{`Asistencia: ${payload[0].value}%`}</p>
        </div>
      );
    }
  
    return null;
};

const MarketAnalysisSection = () => {
    const setRefContent = useIntersectionObserver();

    return (
        <section className="market-analysis" id="analisis-mercado">
            <div className="container">
                <div className="market-content reveal" ref={setRefContent}>
                    <div className="market-text">
                        <h2 className="section-title">Análisis de Mercado</h2>
                        <p className="market-desc">
                            Estudio sobre la asistencia al cine por estrato socioeconómico. 
                            El modelo de <span>CINEON</span> busca democratizar el acceso al séptimo arte llevando 
                            la experiencia directamente a las comunidades con menores índices de asistencia.
                        </p>
                        
                        <div className="market-stats">
                            <div className="stat-box">
                                <span className="stat-number">21.4%</span>
                                <span className="stat-label">Estratos 1 y 2</span>
                            </div>
                            <div className="stat-box highlight">
                                <span className="stat-number">Oportunidad</span>
                                <span className="stat-label">Gran público potencial</span>
                            </div>
                        </div>
                    </div>

                    <div className="market-chart">
                        <h3>Asistencia al cine por estrato socioeconómico</h3>
                        <div className="chart-container">
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart
                                    data={data}
                                    margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                                    <XAxis dataKey="name" stroke="#CCCCCC" tick={{fill: '#CCCCCC', fontSize: 12}} />
                                    <YAxis tickFormatter={(tick) => `${tick}%`} stroke="#CCCCCC" tick={{fill: '#CCCCCC', fontSize: 12}} />
                                    <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                                    <Bar dataKey="asistencia" radius={[8, 8, 0, 0]}>
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={index === 0 ? '#E55604' : '#0B132B'} stroke={index === 0 ? 'none' : '#E55604'} strokeWidth={index === 0 ? 0 : 2} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketAnalysisSection;

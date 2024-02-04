import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import Menu2 from './Menu2';
import '../css/graficos.css'

function Graficos() {
    const data = {
        
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
        datasets: [{
            id: 1,
            label: 'Emergencias',
            backgroundColor: '#FA3C2B',
            borderColor: 'black',
            borderRadius: 15,
            hoverBackgroundColor: '#FA3C2B',
            hoverBorderColor: '#FF0000',
            data: [327.16, 126.19, 360.43, 309.64, 146.72, 327.16, 126.19],
        },
        {
            id: 2,
            label: 'Emergencia Atendidas',
            backgroundColor: '#FFB15D',
            borderColor: 'black',
            borderRadius: 15,
            hoverBackgroundColor: '#FA3C2B',
            hoverBorderColor: '#FF0000',

            data: [227.16, 26.19, 60.43, 209.64, 116.72, 227.16, 106.19],
        },
        ],
    };


    const opciones = {
        maintainAspectRatio: false,
        responsive: true
    }
    return (
        <>
            
            <div className="Graficos" style={{ width: '100%', height: '500px' }}>
                <div className="bar">
                    <Bar data={data} options={opciones} />
                </div>
            </div>
            <Menu2></Menu2>
        </>
    );
}

export default Graficos;
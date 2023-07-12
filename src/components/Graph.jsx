import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import React from 'react';

export function Graph({ x, y }) {
    const data = {
        labels: ['A', 'B', 'C', 'D'],
        datasets: [
            {
                label: 'Seeds',
                data: [
                    { x: -1.33, y: 0.42 },
                    { x: 1.32, y: 0.133 },
                    { x: 1.245, y: -0.14 },
                    { x: -1.06, y: -0.5 },
                    { x: -1.33, y: 0.42 },
                ],
                fill: false,
                borderColor: 'rgba(40, 120, 255, 1)',
                borderWidth: 1,
                pointRadius: 3,
            },
            {
                label: 'Input',
                data: [{ x, y }],
                fill: false,
                borderColor: 'rgba(255, 80, 80, 1)',
                borderWidth: 1,
                pointRadius: 3,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
            },
            y: {
                type: 'linear',
                position: 'left',
            },
        },
        plugins: {
            legend: {
                display: true,
            },
        },
    };

    return (
        <div className='w-full overflow-x-auto bg-white border-none rounded-lg shadow dark:bg-zinc-900'>
            <div className='w-full min-w-full block p-5 text-xs uppercase text-left text-gray-700 bg-gray-50 dark:bg-zinc-900 dark:text-gray-400'>
                Seeds
            </div>
            <div className='block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-zinc-900 dark:border-zinc-700'>
                <Line data={data} options={options} />
            </div>
        </div>
    );
}

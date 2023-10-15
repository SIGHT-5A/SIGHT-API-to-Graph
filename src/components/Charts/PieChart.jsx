import React from 'react'
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ArcElement
)

const PieChart = () => {
    let data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            backgroundColor: [
                'red',
                'Blue',
                'Yellow',
                'Green',
                'Purple',
                'Orange'
            ],
            borderColor: [
                'red',
                'Blue',
                'Yellow',
                'Green',
                'Purple',
                'Orange'
            ]
        }]
    }

    let options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            labels: {
                fontSize: 26
            }
        }
    }
    return (
        <div>
            <Pie
                height={300}
                data={data}
                options={options}
            />
        </div>
    )
}

export default PieChart

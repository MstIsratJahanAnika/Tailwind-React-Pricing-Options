// import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
    { "id": 1, "name": "Rahim", "physics": 78, "chemistry": 72, "biology": 80 },
    { "id": 2, "name": "Karim", "physics": 65, "chemistry": 70, "biology": 68 },
    { "id": 3, "name": "Ayesha", "physics": 88, "chemistry": 85, "biology": 90 },
    { "id": 4, "name": "Fatima", "physics": 92, "chemistry": 89, "biology": 94 },
    { "id": 5, "name": "Nabil", "physics": 55, "chemistry": 60, "biology": 58 },
    { "id": 6, "name": "Sadia", "physics": 81, "chemistry": 77, "biology": 84 },
    { "id": 7, "name": "Hasan", "physics": 69, "chemistry": 73, "biology": 71 },
    { "id": 8, "name": "Mitu", "physics": 95, "chemistry": 91, "biology": 96 },
    { "id": 9, "name": "Jamal", "physics": 62, "chemistry": 66, "biology": 64 },
    { "id": 10, "name": "Rina", "physics": 85, "chemistry": 82, "biology": 88 }
]

const ResultsCharts = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="physics"></Line>
                <Line dataKey={'chemistry'} stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultsCharts;
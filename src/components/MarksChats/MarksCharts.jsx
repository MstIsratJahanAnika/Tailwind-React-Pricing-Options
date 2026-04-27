// import React from 'react';

import { use } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const MarksCharts = ({marksPromise}) => {

    console.log(marksPromise); //always check kora uchit

    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;

    console.log(marksData);

    const marksChartsData = marksData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            biology: studentData.marks.biology
        }
        // student er new property add 
        const avg = (student.physics + student.chemistry + student.biology) / 3;
        student.average = avg;

        return student;
    })
    console.log(marksChartsData);
    return (
        <div>
            {/* chart show */}
            <BarChart width={500} height={300} data={marksChartsData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={'average'} fill="yellow"></Bar>
                <Bar dataKey={'chemistry'} fill="blue"></Bar>
            </BarChart>
            
        </div>
    );
};

export default MarksCharts;
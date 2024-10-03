"use client"
import Image from "next//image";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
        name: 'Mon',
        present: 60,
        obsent: 40,

    },
    {
        name: 'Tue',
        present: 70,
        obsent: 50,

    },
    {
        name: 'Wed',
        present: 80,
        obsent: 60,

    },
    {
        name: 'Thu',
        present: 75,
        obsent: 65,

    },
    {
        name: 'Fri',
        present: 90,
        obsent: 45,

    },
];

const AttendenceChart = () => {
    return (
        <div className='bg-white rounded-lg p-4 w-full h-full'>
            <div className=''>
                <h1 className="tex-lg font-semibold">Attendance</h1>
                <Image src="/img/moreDark.png" alt="" width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barSize={20}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
                    <XAxis dataKey="name" axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
                    <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
                    <Tooltip contentStyle={{borderRadius:'10px', borderColor:'lightgray'}} />
                    <Legend align="left" verticalAlign="top" wrapperStyle={{ paddingTop: '20px', paddingBottom: '40px' }} />
                    <Bar dataKey="present" legendType="circle" fill="#FEF08A" radius={[10, 10, 0, 0]} />
                    <Bar dataKey="obsent" legendType="circle" fill="#9AE6A5" radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>

    )
}

export default AttendenceChart
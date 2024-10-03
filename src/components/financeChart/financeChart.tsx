'use client'
import Image from 'next/image';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        income: 4000,
        expense: 2400,
    },
    {
        name: 'Fev',
        income: 3000,
        expense: 1398,
    },
    {
        name: 'Mar',
        income: 2000,
        expense: 9800,
    },
    {
        name: 'Abr',
        income: 2780,
        expense: 3908,
    },
    {
        name: 'Mai',
        income: 1890,
        expense: 4800,
    },
    {
        name: 'Jun',
        income: 2390,
        expense: 3800,
    },
    {
        name: 'Jul',
        income: 3490,
        expense: 4300,
    },
    {
        name: 'Ago',
        income: 3590,
        expense: 300,
    },
    {
        name: 'Set',
        income: 3690,
        expense: 400,
    },
    {
        name: 'Out',
        income: 3790,
        expense: 500,
    },
    {
        name: 'Nov',
        income: 3890,
        expense: 600,
    },
    {
        name: 'Dez',
        income: 3990,
        expense: 700,
    },
];

const FinanceChart = () => {
    return (
        <div className="bg-white rounded-lg p-4 w-full h-full">
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Finance</h1>
                <Image src="/img/moreDark.png" alt={''} width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 15,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke='#ddd' />
                    <XAxis dataKey="name" axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} tickMargin={20} />
                    <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
                    <Tooltip contentStyle={{ borderRadius: '10px', borderColor: 'lightgray' }} />
                    <Legend align="center" verticalAlign="top" wrapperStyle={{ paddingTop: '10px', paddingBottom: '30px' }} />
                    <Area type="monotone" dataKey="income" stackId="1" strokeWidth={3} stroke="#9AE6A5" fill="#9AE6A5" />
                    <Area type="monotone" dataKey="expense" stackId="1" strokeWidth={3} stroke="#FEF08A" fill="#FEF08A" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default FinanceChart

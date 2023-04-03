import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {

    const students = [
        {
            id: 1,
            name: 'John',
            phy: 80,
            chem: 75,
            math: 90
        },
        {
            id: 2,
            name: 'Jane',
            phy: 70,
            chem: 85,
            math: 80
        },
        {
            id: 3,
            name: 'Bob',
            phy: 60,
            chem: 70,
            math: 75
        },
        {
            id: 4,
            name: 'Alice',
            phy: 90,
            chem: 80,
            math: 95
        },
        {
            id: 5,
            name: 'Mark',
            phy: 85,
            chem: 90,
            math: 85
        },
        {
            id: 6,
            name: 'Samantha',
            phy: 75,
            chem: 60,
            math: 80
        },
        {
            id: 7,
            name: 'James',
            phy: 70,
            chem: 65,
            math: 75
        },
        {
            id: 8,
            name: 'Emily',
            phy: 80,
            chem: 90,
            math: 80
        },
        {
            id: 9,
            name: 'David',
            phy: 85,
            chem: 75,
            math: 70
        },
        {
            id: 10,
            name: 'Lily',
            phy: 90,
            chem: 80,
            math: 85
        },
        {
            id: 11,
            name: 'Alex',
            phy: 75,
            chem: 70,
            math: 75
        },
        {
            id: 12,
            name: 'Sophia',
            phy: 80,
            chem: 85,
            math: 90
        }
    ];


    return (
        <div className="mt-12">
            <h1 className="text-5xl font-bold text-center">Dashboard</h1>
            <div className="grid md:grid-cols-3 gap-4 mt-12 md:ml-16 md:mr-16">
                <ResponsiveContainer className="md:col-span-2 w-full" width="100%" height="100%">
                    <LineChart
                        
                        width={700}
                        height={400}
                        data={students}
                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line dataKey="phy" stroke="#8884d8" />
                        <Line dataKey="chem" stroke="#82ca9d" />
                        <Line dataKey="math" stroke="#003EFF" />
                    </LineChart>
                    </ResponsiveContainer>
                <div className="md:col-span-1">
                    <h4 className="pt-4 text-2xl font-bold text-center">Our best ranking customers</h4>
                    <p className="pt-3 pl-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam earum odio qui saepe vel. Totam laborum reprehenderit omnis quae saepe aliquam eaque quis repudiandae dignissimos. Ut, unde quos tenetur quisquam voluptates nesciunt ex assumenda, beatae odit ad exercitationem placeat aliquid, eos veniam accusantium iusto quae mollitia veritatis fuga? Quia, eos quidem expedita placeat nemo quibusdam omnis necessitatibus animi neque inventore maxime recusandae sit iure adipisci impedit deleniti. Fugiat consequuntur officiis perferendis illo rerum dolore expedita fugit iure dolores! Enim veritati.</p>
                </div>


            </div>
        </div>
    )
}

export default Dashboard;
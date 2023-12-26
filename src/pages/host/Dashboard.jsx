/* eslint-disable no-unused-vars */
import { useState } from "react";

function Dashboard() {
  const [data, setData] = useState([
    { id: 1, title: "Task 1", description: "Description for Task 1" },
    { id: 2, title: "Task 2", description: "Description for Task 2" },
    { id: 3, title: "Task 3", description: "Description for Task 3" },
  ]);

  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl font-semibold mb-4'>Dashboard</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {data.map((item) => (
          <div key={item.id} className='bg-white rounded-lg shadow-md p-4'>
            <h2 className='text-xl font-semibold mb-2'>{item.title}</h2>
            <p className='text-gray-600'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

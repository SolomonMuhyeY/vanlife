import { useState } from "react";

function Income() {
  const [incomeData, setIncomeData] = useState([
    { id: 1, source: "Freelancing", amount: 1500, date: "2024-01-01" },
    { id: 2, source: "Investments", amount: 3000, date: "2024-01-15" },
    { id: 3, source: "Salary", amount: 5000, date: "2024-02-01" },
    { id: 4, source: "Side Project", amount: 2000, date: "2024-02-10" },
  ]);

  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl font-semibold mb-4'>Income</h1>
      <table className='min-w-full bg-white'>
        <thead>
          <tr>
            <th className='py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-700'>
              Source
            </th>
            <th className='py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-700'>
              Amount
            </th>
            <th className='py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-700'>
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {incomeData.map((item) => (
            <tr key={item.id}>
              <td className='py-2 px-4 border-b border-gray-200 text-sm'>
                {item.source}
              </td>
              <td className='py-2 px-4 border-b border-gray-200 text-sm'>
                ${item.amount.toLocaleString()}
              </td>
              <td className='py-2 px-4 border-b border-gray-200 text-sm'>
                {item.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Income;

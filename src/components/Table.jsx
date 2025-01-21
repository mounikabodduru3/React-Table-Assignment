import React, { useState } from 'react';
import Row from './Row';

const Table = () => {
  const [tableData, setTableData] = useState([]);

  // Function to add a row
  const addRow = () => {
    setTableData([...tableData, { column1: '', column2: [] }]);
  };

  // Function to remove the last row
  const removeRow = () => {
    setTableData((prevData) => prevData.slice(0, -1));
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Table */}
      <div className="border border-gray-300 rounded-lg shadow-lg p-4 bg-white">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Label 1</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Label 2</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((rowData, index) => (
              <Row
                key={index}
                rowIndex={index}
                rowData={rowData}
                setTableData={setTableData}
              />
            ))}
          </tbody>
        </table>
        {/* Action Buttons */}
        <div className="mt-4 flex justify-center gap-4">
          <button
            onClick={addRow}
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-gray-800"
          >
            <span className="font-bold text-lg">+</span> Add New Row
          </button>
          <button
            onClick={removeRow}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600"
            disabled={tableData.length === 0} // Disable when no rows are present
          >
            <span className="font-bold text-lg">-</span> Remove Row
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;

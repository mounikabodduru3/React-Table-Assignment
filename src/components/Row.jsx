import React from 'react';
import SingleSelectDropdown from './SingleSelectDropdown';
import MultiSelectDropdown from './MultiSelectDropdown';

const Row = ({ rowIndex, rowData, setTableData }) => {
  return (
    <tr>
      <td className="border border-gray-300 px-4 py-2">
        <SingleSelectDropdown
          rowIndex={rowIndex}
          selectedOption={rowData.column1}
          setTableData={setTableData}
        />
      </td>
      <td className="border border-gray-300 px-4 py-2">
        <MultiSelectDropdown
          rowIndex={rowIndex}
          selectedOptions={rowData.column2}
          setTableData={setTableData}
        />
      </td>
    </tr>
  );
};

export default Row;

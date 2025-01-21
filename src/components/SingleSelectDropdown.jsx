import React from 'react';
import Select from 'react-select';

const SingleSelectDropdown = ({ rowIndex, selectedOption, setTableData }) => {
  const options = [
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
  ];

  const handleSelect = (selected) => {
    setTableData((prevData) => {
      const updatedData = [...prevData];
      updatedData[rowIndex].column1 = selected ? selected.value : '';
      return updatedData;
    });
  };

  return (
    <Select
      value={selectedOption ? { value: selectedOption, label: selectedOption } : null}
      onChange={handleSelect}
      options={options}
      isClearable
      className="w-full"
    />
  );
};

export default SingleSelectDropdown;

import React, { useState } from 'react';
import Select from 'react-select';

const MultiSelectDropdown = ({ rowIndex, selectedOptions, setTableData }) => {
  const [options, setOptions] = useState([
    { value: 'Option A', label: 'Option A' },
    { value: 'Option B', label: 'Option B' },
    { value: 'Option C', label: 'Option C' },
  ]);
  const [newOption, setNewOption] = useState('');

  const handleSelect = (selected) => {
    setTableData((prevData) => {
      const updatedData = [...prevData];
      updatedData[rowIndex].column2 = selected ? selected.map((s) => s.value) : [];
      return updatedData;
    });
  };

  const addNewOption = () => {
    if (newOption.trim()) {
      const newOptionObj = { value: newOption, label: newOption };
      setOptions([...options, newOptionObj]);
      setNewOption('');
    }
  };

  return (
    <div>
      <Select
        isMulti
        value={selectedOptions.map((val) => ({ value: val, label: val }))}
        onChange={handleSelect}
        options={options}
        className="w-full"
      />
      <div className="mt-2 flex gap-2">
        <input
          type="text"
          value={newOption}
          onChange={(e) => setNewOption(e.target.value)}
          placeholder="Add new item"
          className="flex-1 px-2 py-1 border border-gray-300 rounded"
        />
        <button
          onClick={addNewOption}
          className="px-3 py-1 bg-black text-white rounded hover:bg-gray-800"
        >
          + Add
        </button>
      </div>
    </div>
  );
};

export default MultiSelectDropdown;

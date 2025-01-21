import React from 'react';
import Table from './components/Table';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-4 text-grey-800 text-center">React Table Assignment</h1>
        <Table />
      </div>
    </div>
  );
};

export default App;

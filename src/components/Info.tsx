import React from 'react';

interface InfoProps {
  showTotal: () => number;
  showAward: () => number;
}

export const Info = ({showTotal, showAward}: InfoProps) => {
  return (
    <div className="bg-gray-400 min-h-[200px] text-white p-10 shadow-md rounded">
      <h1 className="text-4xl">Total number of employees: {showTotal()}</h1>
      <h2 className="text-3xl mt-5">The award will get: {showAward()}</h2>
    </div>
  );
};

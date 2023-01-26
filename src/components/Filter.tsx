import React from 'react';

export const Filter = () => {
  return (
    <div>
      <button className="border border-white text-white px-2 py-1 hover:text-gray-400 hover:bg-white transition-all ">
        All employees
      </button>
      <button className="border border-white text-white px-2 py-1 hover:text-gray-400 hover:bg-white transition-all">
        On increase
      </button>
      <button className="border border-white text-white px-2 py-1 hover:text-gray-400 hover:bg-white transition-all">
        More than 1000
      </button>
    </div>
  );
};

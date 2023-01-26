import React from 'react';

export const AddForm = () => {
  return (
    <div className="bg-gray-400 px-10 pb-6 shadow-md rounded">
      <h2 className="text-3xl mt-5 text-white">Add a new employee</h2>
      <form action="submit" className="grid grid-cols-3 gap-5 mt-5">
        <input
          type="text"
          placeholder="Name of employee..."
          className="rounded w-full px-1 py-1"
        />
        <input
          type="text"
          placeholder="Salary..."
          className="rounded w-full px-1 py-1"
        />
        <button className="border border-white text-white px-2 py-1 hover:text-gray-400 hover:bg-white transition-all">
          Add
        </button>
      </form>
    </div>
  );
};

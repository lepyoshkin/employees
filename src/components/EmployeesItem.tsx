import React from 'react';
import {IEmployee} from '../models/models';

interface EmployeesItemProps {
  employee: IEmployee;
  onDelete: (id: number) => void;
  onIncrease: (id: number) => void;
  onAward: (id: number) => void;
}

export const EmployeesItem = ({
  employee,
  onDelete,
  onIncrease,
  onAward,
}: EmployeesItemProps) => {
  const {name, salary, increase, id, award} = employee;

  let textColor = 'text-black';
  let visibility = 'invisible';

  if (award) {
    visibility = 'visible';
  }

  if (increase) {
    textColor = 'text-yellow-500';
  }

  return (
    <li
      className="grid grid-cols-3 justify-around px-10 py-5 border-0 border-b-2 border-b-gray-400
     hover:bg-gray-400 hover:text-white transition-all"
    >
      <div
        className={`font-bold ${textColor} cursor-pointer`}
        onClick={() => onAward(id)}
      >
        {name}
      </div>
      <div className={`text-right font-bold ${textColor}`}>{salary}$</div>
      <div className="text-right">
        <button className="hover:scale-150 transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-6 fill-yellow-500"
            onClick={() => onIncrease(id)}
          >
            <path d="M247.2 17c-22.1-3.1-44.6 .9-64.4 11.4l-74 39.5C89.1 78.4 73.2 94.9 63.4 115L26.7 190.6c-9.8 20.1-13 42.9-9.1 64.9l14.5 82.8c3.9 22.1 14.6 42.3 30.7 57.9l60.3 58.4c16.1 15.6 36.6 25.6 58.7 28.7l83 11.7c22.1 3.1 44.6-.9 64.4-11.4l74-39.5c19.7-10.5 35.6-27 45.4-47.2l36.7-75.5c9.8-20.1 13-42.9 9.1-64.9l-14.6-82.8c-3.9-22.1-14.6-42.3-30.7-57.9L388.9 57.5c-16.1-15.6-36.6-25.6-58.7-28.7L247.2 17zM208 208c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32zm160 0c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z" />
          </svg>
        </button>
        <button className="ml-3 hover:scale-125 transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-5 fill-red-500"
            onClick={() => onDelete(id)}
          >
            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
          </svg>
        </button>
        <span className={`inline-block ml-3  ${visibility}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="w-7 fill-pink-400"
          >
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
        </span>
      </div>
    </li>
  );
};

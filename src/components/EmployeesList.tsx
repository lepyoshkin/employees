import React from 'react';
import {EmployeesItem} from './EmployeesItem';

export const EmployeesList = () => {
  return (
    <ul className="shadow-md">
      <EmployeesItem />
      <EmployeesItem />
      <EmployeesItem />
      <EmployeesItem />
      <EmployeesItem />
    </ul>
  );
};

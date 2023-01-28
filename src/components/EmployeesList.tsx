import React from 'react';
import {IEmployee} from '../models/models';
import {EmployeesItem} from './EmployeesItem';

interface EmployeesItemProps {
  data: IEmployee[];
  onDelete: (id: number) => void;
  onIncrease: (id: number) => void;
  onAward: (id: number) => void;
}

export const EmployeesList = ({
  data,
  onDelete,
  onIncrease,
  onAward,
}: EmployeesItemProps) => {
  const elements = data.map((employee) => {
    return (
      <EmployeesItem
        employee={employee}
        key={employee.id}
        onDelete={onDelete}
        onIncrease={onIncrease}
        onAward={onAward}
      />
    );
  });

  return <ul className="shadow-md">{elements}</ul>;
};

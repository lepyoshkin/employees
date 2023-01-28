import React, {useState} from 'react';
import {AddForm} from './components/AddForm';
import {EmployeesList} from './components/EmployeesList';
import {Filter} from './components/Filter';
import {Info} from './components/Info';
import {Search} from './components/Search';
import {IEmployee} from './models/models';

function App() {
  const data: IEmployee[] = [
    {id: 1, name: 'Artem', salary: 3000, increase: true, award: false},
    {id: 2, name: 'Jane', salary: 1000, increase: false, award: true},
    {id: 3, name: 'John', salary: 2000, increase: false, award: false},
  ];

  const [state, setState] = useState(data);

  const onDelete = (id: number) =>
    setState((state) => state.filter((employee) => employee.id !== id));

  const onIncrease = (id: number) => {
    let newState = state.map((employee) => {
      if (employee.id === id) {
        employee.increase = !employee.increase;
      }
      return employee;
    });

    setState(newState);
  };

  const onAward = (id: number) => {
    let newState = state.map((employee) => {
      if (employee.id === id) {
        employee.award = !employee.award;
      }
      return employee;
    });

    setState(newState);
  };

  const showTotal = (): number => {
    return state.length;
  };

  const showAward = (): number => {
    return state.filter((employee) => employee.award).length;
  };

  return (
    <div className="max-w-[1000px] mx-auto py-5 grid gap-5">
      <Info showTotal={showTotal} showAward={showAward} />
      <div className="w-full bg-gray-400 p-10 rounded shadow-md grid gap-3">
        <Search />
        <Filter />
      </div>
      <EmployeesList
        data={state}
        onDelete={onDelete}
        onIncrease={onIncrease}
        onAward={onAward}
      />
      <AddForm />
    </div>
  );
}

export default App;

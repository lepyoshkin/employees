import React from 'react';
import {AddForm} from './components/AddForm';
import {EmployeesList} from './components/EmployeesList';
import {Filter} from './components/Filter';
import {Info} from './components/Info';
import {Search} from './components/Search';

function App() {
  return (
    <div className="max-w-[1000px] mx-auto py-5 grid gap-5">
      <Info />
      <div className="w-full bg-gray-400 p-10 rounded shadow-md grid gap-3">
        <Search />
        <Filter />
      </div>
      <EmployeesList />
      <AddForm />
    </div>
  );
}

export default App;

import React from 'react'
import Tab from './Tab.jsx'


const App = () => { 

 const TabList = [
    { id: 1, name: 'ComponentA', component: <ComponentA /> },
    { id: 2, name: 'ComponentB', component: <ComponentB /> },
    { id: 3, name: 'ComponentC', component: <ComponentC /> },
    { id: 4, name: 'ComponentD', component: <ComponentD /> },
  ]

  return (
    <div className='justify-center items-center h-screen flex'>
      <Tab tabs={TabList} />

    </div>
  );
}



function ComponentA(){
  return (
    <div> 
      <h1 className='text-2xl font-bold'>ComponentA</h1>
    </div>
  );
}

function ComponentB(){
  return (
    <div> 
      <h1 className='text-2xl font-bold'>ComponentB</h1>
    </div>
  );
}
function ComponentC(){
  return (
    <div> 
      <h1 className='text-2xl font-bold'>ComponentC</h1>
    </div>
  );
}
function ComponentD(){
  return (
    <div> 
      <h1 className='text-2xl font-bold'>ComponentD</h1>
    </div>
  );
}

export default App;
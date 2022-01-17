import './App.css';
import React from "react";
import Input from './components/Input'
import Lists from './components/Lists';

function App() {
  return (
    <>
      <div className='container'>
        <Input />
        <Lists />
      </div>
    </>
  );
}

export default App;

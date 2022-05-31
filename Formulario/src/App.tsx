import React from 'react';
import './App.css';
import { Birthdate } from './components/birthdate';
import { Lastform } from './components/lastform';
import { NameForm } from './components/nameform';

function App() {
  return (
    <form>
      <NameForm></NameForm>
      <Lastform></Lastform>
      <Birthdate></Birthdate>
    </form>
  );
}

export default App;

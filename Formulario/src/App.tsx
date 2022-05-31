import React from 'react';
import './App.css';
import { Birthdate } from './components/birthdate';
import { Email } from './components/email';
import { Gender } from './components/gender';
import { Lastform } from './components/lastform';
import { NameForm } from './components/nameform';
import { Newsletter } from './components/newsletter';

function App() {
  return (
    <form>
      <NameForm></NameForm>
      <Lastform></Lastform>
      <Birthdate></Birthdate>
      <Gender></Gender>
      <Email></Email>
      <Newsletter></Newsletter>
    </form>
  );
}

export default App;

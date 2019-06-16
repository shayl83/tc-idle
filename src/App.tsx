import React from 'react';
import './App.css';
import { Button } from '../src/components/ux/Button.'

const App: React.FC = () => {
  return (
    <div className="ts-idle-main-wrapper">
      <header className="ts-idle-main-header">
        So I want to make an idle game.
      </header>
      <section className={'td-idle-main-body-container'}>
        <Button text='click' onClick={()=>{}} />
      </section>
    </div>
  );
};

export default App;

import React from 'react';
import './App.css';
import RatCage from '../src/components/common/RatCage';
import Rats from '../src/components/common/Rats';

const STARTUP_RATS = 5;//this should be from somewhere, like local storage

const App: React.FC = () => {
  return (
    <div className="ts-idle-main-wrapper">
      <header className="ts-idle-main-header">
        You are a plague doctor making more rats so you have more business
      </header>
      <section className={'td-idle-main-body-container'}>
          <div>
              Number of rats: <Rats propRats={STARTUP_RATS}/>
          </div>
          <RatCage startupRats={STARTUP_RATS}/>
      </section>
    </div>
  );
};

export default App;

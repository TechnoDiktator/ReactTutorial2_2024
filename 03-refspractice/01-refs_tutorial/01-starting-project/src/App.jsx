import Player from './components/Player.jsx';

import { useState } from 'react';
import TimerChallange from './components/TimerChallange.jsx';


function App() {


  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallange title="Easy" targettime={1}></TimerChallange>
        <TimerChallange title="Not Easy" targettime={5}></TimerChallange>
        <TimerChallange title="Getting Tough" targettime={10}></TimerChallange>
        <TimerChallange title="Pros Only" targettime={15}></TimerChallange>
        <TimerChallange title="Legend" targettime={20}></TimerChallange>

      </div>
    </>
  );
}

export default App;

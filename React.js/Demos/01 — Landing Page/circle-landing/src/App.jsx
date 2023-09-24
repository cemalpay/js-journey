import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';
import Images from './components/Images';
import './App.css';

function App() {


  const controls = useAnimation(); 
  const controlsReverse = useAnimation(); 

  const handleNext = async () => {
    await Promise.all([
      controls.start({ rotate: 360}), // Rotate ve opacity ekleyerek geçişi daha smooth hale getirin
      controlsReverse.start({ rotate: -360}),
    ]);

    controls.set({ rotate: 0}); // Başlangıç konumuna geri döndür
    controlsReverse.set({ rotate: 0});
  };

  return (
    <div className='main'>
      <div className="App">
        <Images controls={controls} controlsReverse={controlsReverse} content="ephesus"/>
        <Images controls={controls} controlsReverse={controlsReverse} content="cappadocia" />
        <div className="container">
          <h1>Cappadocia</h1>
          <div className='buttons'>
            <button className="btn btn_next" onClick={handleNext}>
              Next
            </button>
            <button className="btn btn_prev">Prev</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

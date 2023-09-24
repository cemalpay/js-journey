import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';
import './App.css';

function App() {
  const content = [
    {
      title: 'Cappadocia',
      url: 'src/images/cappadocia.jpg',
    },
    {
      title: 'Ephesus',
      url: 'src/images/ephesus.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); 
  const controls = useAnimation(); 
  const controlsReverse = useAnimation(); 

  const handleNext = async () => {
    await Promise.all([
      controls.start({ rotate: 360, opacity: 0.7 }), // Rotate ve opacity ekleyerek geçişi daha smooth hale getirin
      controlsReverse.start({ rotate: -360, opacity: 0.7 }),
    ]);

    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);

    controls.set({ rotate: 0, opacity: 1 }); // Başlangıç konumuna geri döndür
    controlsReverse.set({ rotate: 0, opacity: 1 });
  };

  const currentContent = content[currentIndex];

  return (
    <div className='main'>
      <div className="App">
        <motion.div
          className="imageCenter"
          style={{
            backgroundImage: `url(${currentContent.url})`,
          }}
          initial={{ rotate: 0, opacity: 1 }} // Başlangıç opacity değeri ekleyin
          animate={controls} 
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        ></motion.div>
        <motion.div
          className="imageRing"
          style={{ backgroundImage: `url(${currentContent.url})` }}
          initial={{ rotate: 0, opacity: 1 }}
          animate={controlsReverse}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        ></motion.div>
        <motion.div
          className="imageOuter"
          style={{ backgroundImage: `url(${currentContent.url})` }}
          initial={{ rotate: 0, opacity: 1 }}
          animate={controls}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        ></motion.div>
        <div className="container">
          <h1>{currentContent.title}</h1>
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

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

  const [currentIndex, setCurrentIndex] = useState(0); // Başlangıçta ilk öğeyi göster
  const controls = useAnimation(); // Animasyon kontrolleri
  const controlsReverse = useAnimation(); // Animasyon kontrolleri

  const handleNext = async () => {
    // İki animasyonu aynı anda başlat
    await Promise.all([
      controls.start({ rotate: 360 }),
      controlsReverse.start({ rotate: -360 }),
    ]);

    // Resmi değiştir
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);

    // Başlangıç konumuna geri döndür
    controls.set({ rotate: 0 });
    controlsReverse.set({ rotate: 0 });
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
          initial={{ rotate: 0 }}
          animate={controls} // Animasyon kontrollerini kullan
          transition={{ duration: 1 }}
        ></motion.div>
        <motion.div
         className="imageRing" 
         style={{ backgroundImage: `url(${currentContent.url})` }}
          initial={{ rotate: 0 }}
          animate={controlsReverse} // Animasyon kontrollerini kullan
          transition={{ duration: 1 }}
         ></motion.div>
        <motion.div 
        className="imageOuter" 
        style={{ backgroundImage: `url(${currentContent.url})` }}
          initial={{ rotate: 0 }}
          animate={controls} // Animasyon kontrollerini kullan
          transition={{ duration: 2 }}
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

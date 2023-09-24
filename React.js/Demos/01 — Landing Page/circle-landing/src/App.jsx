import { motion } from 'framer-motion';
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

  const handleNext = async () => {
    // Resmi değiştir
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  const currentContent = content[currentIndex];

  return (
    <>
      <div className="App">
        <motion.div
          className="imageCenter"
          style={{
            backgroundImage: `url(${currentContent.url})`,
          }}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: null}}
        ></motion.div>
        <motion.div className="imageRing" style={{ backgroundImage: `url(${currentContent.url})` }}></motion.div>
        <motion.div className="imageOuter" style={{ backgroundImage: `url(${currentContent.url})` }}></motion.div>
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
    </>
  );
}

export default App;

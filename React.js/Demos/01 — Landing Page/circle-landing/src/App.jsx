import { useState } from 'react'

import './App.css'

function App() {

  return (
    <>
      <div className="App" >
        <h1>Cappadocia</h1>
        <div className="imageCenter" style={{
        backgroundImage: `url("src/images/cappadocia.jpg")`,
      }}></div>
        <div className="imageRing" style={{
        backgroundImage: `url("src/images/cappadocia.jpg")`,
      }}></div>
        <div className="imageOuter" style={{
        backgroundImage: `url("src/images/cappadocia.jpg")`,
      }}></div>
      </div>
    </>
  )
}

export default App

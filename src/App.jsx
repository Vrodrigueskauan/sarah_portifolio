import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Gallery from './components/Gallery'
import VideoIntro from './components/VideoIntro'

function App() {
  const [showSite, setShowSite] = useState(false)

  return (
    <>
      {!showSite && <VideoIntro onFinish={() => setShowSite(true)} />}
      {showSite && (
        <>
          <NavBar />
          <Banner />
          <Gallery />
        </>
      )}
    </>
  )
}

export default App

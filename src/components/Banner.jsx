import React, { useEffect, useState } from 'react'

const Banner = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const background = isMobile ? 'url(/banner-mobile.jpg)' : 'url(/banner-pc.jpg)'

  return (
    <section
      style={{
        height: '100vh',
        backgroundImage: background,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <h1 style={{
        fontFamily: 'UnifrakturCook, cursive',
        fontSize: '5rem',
        color: 'gold'
      }}>
        Ghostcat
      </h1>
      <p style={{ color: '#d23ecb', fontSize: '1.5rem' }}>Artes obscuras e autorais.</p>
    </section>
  )
}

export default Banner

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

  const background = isMobile ? 'url(/banner-mobile.png)' : 'url(/banner-pc.png)'

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
     
    </section>
  )
}

export default Banner

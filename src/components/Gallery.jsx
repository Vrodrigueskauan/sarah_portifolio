import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import Modal from './Modal'

const images = [
  {
    src: '/img1.jpg',
    name: 'Eclipse Noturno',
    desc: 'Uma arte inspirada em visões cósmicas e trevas.'
  },
  {
    src: '/img2.jpg',
    name: 'Vulto Lunar',
    desc: 'Reflexo sombrio das fases da lua.'
  },
  {
    src: '/img3.jpg',
    name: 'Chamado das Sombras',
    desc: 'Evocação artística do oculto.'
  }
]

const Gallery = () => {
  const [modalData, setModalData] = useState(null)
  const [favorites, setFavorites] = useState([])

  const toggleFavorite = (src) => {
    setFavorites(prev =>
      prev.includes(src) ? prev.filter(f => f !== src) : [...prev, src]
    )
  }

  return (
    <section style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#d23ecb' }}>Galeria</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: '1rem'
      }}>
        {images.map((img) => (
          <motion.div
            key={img.src}
            whileHover={{ scale: 1.05 }}
            style={{
              position: 'relative',
              cursor: 'pointer',
              borderRadius: '10px',
              overflow: 'hidden'
            }}
          >
            <img
              src={img.src}
              alt={img.name}
              onClick={() => setModalData(img)}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <motion.div
              whileTap={{ scale: 1.3 }}
              onClick={(e) => {
                e.stopPropagation()
                toggleFavorite(img.src)
              }}
              style={{
                position: 'absolute',
                top: 10,
                right: 10,
                color: favorites.includes(img.src) ? 'hotpink' : '#fff'
              }}
            >
              <Heart fill={favorites.includes(img.src) ? 'hotpink' : 'none'} />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {modalData && (
        <Modal data={modalData} onClose={() => setModalData(null)} />
      )}
    </section>
  )
}

export default Gallery

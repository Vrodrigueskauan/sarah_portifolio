import React from 'react'
import { motion } from 'framer-motion'

const navItems = ['INÍCIO', 'GALERIA', 'SOBRE', 'LOGIN']

const NavBar = () => {
  return (
    <motion.nav
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.2 }
        }
      }}
      style={{
        position: 'absolute',
        top: 30,
        right: 30,
        display: 'flex',
        gap: 30,
        zIndex: 999
      }}
    >
      {navItems.map((item) => (
        <motion.div
          key={item}
          variants={{
            hidden: { opacity: 0, y: -20 },
            show: { opacity: 1, y: 0 }
          }}
          style={{
            color: '#d23ecb',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '1.1rem'
          }}
        >
          {item}
        </motion.div>
      ))}
    </motion.nav>
  )
}

export default NavBar

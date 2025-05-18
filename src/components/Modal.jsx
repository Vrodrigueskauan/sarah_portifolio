import React from 'react'

const Modal = ({ data, onClose }) => {
  return (
    <div onClick={onClose} style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100vw', height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      padding: '1rem'
    }}>
      <div style={{
        backgroundColor: '#1e002b',
        borderRadius: '10px',
        padding: '1rem',
        maxWidth: '90%',
        textAlign: 'center'
      }}>
        <h3 style={{ color: 'gold' }}>{data.name}</h3>
        <img src={data.src} alt={data.name} style={{ width: '100%', borderRadius: '8px' }} />
        <p style={{ marginTop: '0.5rem', color: '#ccc' }}>{data.desc}</p>
      </div>
    </div>
  )
}

export default Modal

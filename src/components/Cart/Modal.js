 import React from "react";


 const background_style = {  
  position: 'fixed',
  top: '0',
  right: '0',
  left: '0',
  bottom: '0',
  backgroundColor: 'rgba(0,0,0,0.7)',
  zIndex:'1000'
 }

 const modal_style = { 
  display:'block',
  gap:'10px',  
  alignItems: 'center',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform:'translate(-50%, -50%)' ,
  padding:'105px' ,
  backgroundColor:'#fff',
  borderRadius:'10px',
  color:'black'
  

 }

 
 const close_bnt = { 
  cursor: 'pointer',
  color: 'white',
  backgroundColor: '#1D4ED8',  
  fontWeight: '500',
  borderRadius: '0.5rem',
  fontSize: '1rem',
  lineHeight: '2rem',
  padding: ' 0.7rem 2rem',  
  textAlign: 'center',
  marginRight: '0.5rem',
  display: 'inline-flex',
  alignItems: 'center',
  border:  'none'  

 }
 
 export default function Modal({ isOpen, setModalOpen, children }) {
  if (isOpen) {
    return (
      <div style={background_style}>
        <div style={modal_style}>
         
          <div>{children}</div>
          <button style={close_bnt}  onClick={setModalOpen}>Fechar</button>
        </div>
      </div>
    )
  }

  return null
}


//<div style={{ cursor: 'pointer'}} onClick={setModalOpen}>
//x
//</div>
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
  padding:'150px' ,
  backgroundColor:'#fff',
  borderRadius:'10px',
  color:'black'
  

 }
 
 export default function Modal({isOpen , setModalOpen, children}) { 

  if (isOpen) {
    return  ( 
    
    <div style={background_style} className="modal">
    
    <div className="check-circle" style={modal_style}>
      <div>{children}</div>      
     
      <button onClick={setModalOpen}>Fechar</button>  
      </div>
    </div>

    )
  } 
  
return null
  
}

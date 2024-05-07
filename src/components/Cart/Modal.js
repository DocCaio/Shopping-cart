 export default function Modal({isOpen}) { 

  if (isOpen) {
    return   
    
    <div className="modal">
    <i class="bi bi-check-circle"></i>
    <h2>Compra concluída</h2>
    </div>
  } 
  
return null
  
}

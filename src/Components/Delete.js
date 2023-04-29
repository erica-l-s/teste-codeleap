import React from "react";

const Delete = ({message,handleClose}) => {

   
  return (
    <div className="modalBackground">
        <div className='modalContainerDelete'>
        <h2>{message}</h2>
        <div className='btn'>
        <button className='btnClose' onClick={handleClose}>Cancel</button>
        <button className="btnDelete" onClick={handleClose}>Delete</button>
        </div>
         </div>
    </div>
  )
}

export default Delete
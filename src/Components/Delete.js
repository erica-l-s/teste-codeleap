import React from "react";

const Delete = ({message}) => {

   
  return (
    <div className="modalBackground">
        <div className='modalContainerDelete'>
        <h2>{message}</h2>
        <div className='btn'>
        <button className='btnClose'>Cancel</button>
        <button className="btnDelete">Delete</button>
        </div>
        
        </div>
   
    </div>
  )
}

export default Delete
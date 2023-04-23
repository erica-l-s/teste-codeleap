import React, { useState } from 'react'

const Modal = ({closeModal,onSubmit, defaultValue}) => {
 
    const [formState, setFormState] = useState( defaultValue ||{
        title:"",
        content:""
    })
   
  return (
    <div className='modalBackground' onSubmit={onSubmit}>
        <div className='modalContainer'>
            <h2>Edit Item</h2>
            <div className='title'>
                <p>Title</p>
                <input
                />
            </div>
            <div className='content'>
                <p>Content</p>
                <input
                 />
            </div>
            <button onClick={(()=>{closeModal(false)})}>Cancel</button>
            <button onClick={(()=>{closeModal(false)})}>Save</button>
        </div>
    </div>
  )
}

export default Modal
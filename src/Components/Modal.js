import React, { useState } from 'react'

const Modal = ({closeModal,onSubmit, defaultValue}) => {
 
    const [formState, setFormState] = useState( defaultValue ||{
        title:"",
        content:""
    })

    const handleChange = (e) =>{
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
      
    }

    const handleSubmit = (e) =>{
       
        onSubmit(formState)
        closeModal()
    }

  return (
    <div className='modalBackground' onSubmit={onSubmit()} >
        <div className='modalContainer' >
            <h2>Edit Item</h2>
            <div className='title'>
                <p>Title</p>
                <input
                value={formState.title}
                onChange={handleChange}
                name='title'
                />
            </div>
            <div className='content'>
                <p>Content</p>
                <input
                value={formState.content}
                onChange={handleChange}
                name='content'
                 />
            </div>
            <button onClick={(()=>{closeModal(false)})}>Cancel</button>
            <button onClick={() => handleSubmit()}>Save</button>
           
        </div>
    </div>
  )
}

export default Modal
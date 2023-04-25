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

    const handleSubmit = () =>{
        onSubmit(formState)
        closeModal()
     
    }


  return (
    <form className='modalBackground' onSubmit={onSubmit} >
        <div className='modalContainer' >
            <h2>Edit Item</h2>
            <div className='title'>
                <p>Title</p>
                <input
                placeholder='New title'
                value={formState.title}
                onChange={handleChange}
                name='title'
                />
            </div>
            <div className='content'>
                <p>Content</p>
                <input
                placeholder='New content'
                value={formState.content}
                onChange={handleChange}
                name='content'
                 />
            </div>
            <button onClick={(()=>{closeModal(false)})}>Cancel</button>
            <button onClick={() => handleSubmit}>Save</button>
           
        </div>
    </form>
  )
}

export default Modal
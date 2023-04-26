import React, { useState } from 'react'

const Modal = (closeModal,onSubmit,defaultValue) => {
    
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
// const [title, setTitle] = useState('')
// const [content, setContent] = useState('')

     
// const handleSubmit = async (id) => {
   
//     try {
//     await axios.patch(`https://dev.codeleap.co.uk/careers/${id}/`,
//             {  
//                 title,
//                 content
//             })
        
//         setTitle('')
//         setContent('')
      
        
//     } catch (err) {
//         console.error(err)
//     }
    
// }

//  return (
//     <div className="container-crud" onSubmit={handleSubmit}>
      
//        <form className="box" >
//             <h2>What's on your mind?</h2>
               
//             <div>
//                 <p>Title</p>
//                 <input
//                     value={title}
//                     className="input-title"
                  
//                     onChange={(e) => setTitle(e.target.value)}
//                 ></input>
//             </div>
//             <div>
//                 <p>Content</p>
//                 <input
//                     value={content}
//                     className="input-content"
//                     onChange={(e) => setContent(e.target.value)}
//                 ></input>
//             </div>
//             <button
                
//             >Create</button>
//         </form>
//         <div>
         
//        </div>
//      </div>

// )
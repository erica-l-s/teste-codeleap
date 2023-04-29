import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Update = ({onRequestClose}) => {
    const [id, setID] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
   
    const navigate = useNavigate()

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setTitle(localStorage.getItem('title'));
        setContent(localStorage.getItem('content'));

    }, []);

    const handleSubmitEdit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.patch(`https://dev.codeleap.co.uk/careers/${id}/`,
                {
                    id,
                    title,
                    content
                })
            console.log(response.data)
            setTitle('')
            setContent('')
            setID('')
            onRequestClose()
            
         } catch (err) {
            console.error(err)
        }
    }
    return (
       
            <form className="modalBackground">
            <div className='modalContainer'>
               <h2>Edit Item</h2>
                    <div className='title'>
                    <p>Title</p>
                    <input
                        value={title}
                        className="input-title"
                        onChange={(e) => setTitle(e.target.value)}
                    ></input>
                    </div>
                   <div className='content'>
                    <p>Content</p>
                    <input
                        value={content}
                        className="input-content"
                        onChange={(e) => setContent(e.target.value)}
                    ></input>
                </div>
                <div className='btn'>
                <button
                className='btnUpdate'
                onClick={handleSubmitEdit}
                >Save</button>
                <button className='btnClose' onClick={()=> navigate('/create')}>Cancel</button>
                </div>
                  </div>
               

              


            </form>
           
        
    )
}

export default Update
import { useEffect, useState} from "react";
import React from "react";
import axios from "axios";
import Read from "./Read";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [username, setUsername] = useState(localStorage.getItem('info'))
       
    const onInput = (e) => setTitle(e.target.value);
    const navigate = useNavigate()
    
    const handlerClick = () => {
        localStorage.clear()
        navigate('/')
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        const response = await axios.post("https://dev.codeleap.co.uk/careers/",
                {
                    username,
                    title,
                    content
                })
                console.log(response.data)  
            setTitle('')
            setContent('')
            setUsername('')
        } catch (err) {
            console.error(err)
       }
    }

     return (
        <div className="container-crud">
           
            <div className="header">
                <p>CodeLeap Network</p>
                <button onClick={handlerClick}>Logout</button>
            </div>
            <form className="box" onSubmit={handleSubmit}>
                <h2>What's on your mind?</h2>

                <div>
                    <p>Title</p>
                    <input
                        value={title}
                        className="input-title"
                        onInput={onInput}
                        onChange={(e) => setTitle(e.target.value)}
                    ></input>
                </div>
                <div>
                    <p>Content</p>
                    <input
                        value={content}
                        className="input-content"
                        onChange={(e) => setContent(e.target.value)}
                    ></input>
                </div>
                <button
                    disabled={!content}
                >Create</button>
            </form>
            <div>
             <Read/>
           </div>
         </div>

    )

}
export default Create
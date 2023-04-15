import { useState,useEffect } from "react";
import React from "react";
import axios from "axios";
import Read from "./Read";



const Create = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [username, setUsername] = useState(localStorage.getItem('info'))
    const [getItem,setGetItem] = useState([])
    
    const onInput = (e) => setTitle(e.target.value);
    const handlerClick = () => {
        localStorage.clear()
        window.location.reload()
        
     
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

    useEffect(() => {
        axios.get("https://dev.codeleap.co.uk/careers/")
            .then((response) => {
                setGetItem(console.log(response.data.results))
            })
    }, [])
  
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
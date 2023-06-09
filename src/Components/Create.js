import React, { useEffect, useState } from "react";
import axios from "axios";
import Read from "./Read";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [username, setUsername] = useState(localStorage.getItem('user'))

    const onInput = (e) => setTitle(e.target.value);
    const navigate = useNavigate()

    const handlerClick = () => {
        localStorage.clear()
        navigate('/')
    }

    const handleSubmitAdd = async () => {
       
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
            <form className="box" onSubmit={handleSubmitAdd}>
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
                    className="btn-create"
                    disabled={!content}
                    onClick={handleSubmitAdd}
                >Create</button>
            </form>
            <div>
                <Read />
            </div>
        </div>

    )

}
export default Create
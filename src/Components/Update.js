import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Update = () => {
    const [id, setID] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


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

        } catch (err) {
            console.error(err)
        }
    }
    return (
        <div className="container-crud">

            <div className="header">

            </div>
            <form className="box" onSubmit={handleSubmitEdit}>
                <h2>Edit</h2>

                <div>
                    <p>Title</p>
                    <input
                        value={title}
                        className="input-title"
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
                    onClick={handleSubmitEdit}

                >Update</button>


            </form>
            <div>

            </div>
        </div>
    )
}

export default Update
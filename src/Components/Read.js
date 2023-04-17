import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { FaEdit,FaTrash } from "react-icons/fa";




const Read = () =>{
    const [getItem, setGetItem] = useState([])
    const [update, setUpdate] = useState([])
    

    const url = "https://dev.codeleap.co.uk/careers/"

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setGetItem(response.data.results)
            })
    }, [])

 
    const handlerEdit = (id) =>{
        axios.patch(`https://dev.codeleap.co.uk/careers/${id}/`)
        .then(()=>{
            setUpdate(id)
        })
    } 
    
    const handlerDelete = (id) =>{
     axios.delete(`https://dev.codeleap.co.uk/careers/${id}/`)
     .then(()=>{
        setGetItem()
     })
    }
         
     return(
        <div className="post">

              <div>
                {getItem && getItem.map((post,i)=>{
                     
                        return(  
                        <div key={i} className="box">
                        <div className="header">
                         {post.title}
                         <button onClick={()=> handlerEdit(post.id)}><FaEdit/></button>
                         <button onClick={()=> handlerDelete(post.id)}><FaTrash/></button>
                         </div>
                        <div className="name-user">
                          <p>@{post.username}</p>
                          <p>{new Date(post.created_datetime).toLocaleTimeString('pt-BR')}</p>
                        </div>
                        <div className="content">
                         <p>{post.content}</p>
                         </div>
                      </div>
                    )
                })}
            </div>
        </div>
    )

}

export default Read
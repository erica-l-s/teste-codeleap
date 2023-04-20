import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { FaEdit,FaTrash } from "react-icons/fa";


const Read = () =>{
    const [getItem, setGetItem] = useState([])
    const [update, setUpdate] = useState([])
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
       

    const url = "https://dev.codeleap.co.uk/careers/"

    const getData = async () => {
        await axios.get(url)
            .then((response) => {
                setGetItem(response.data.results)
                
            })
    }

     const handlerEdit = async (id) =>{
       await axios.patch(`${url}${id}/`,{
        title:title,
        content:content
       })
       .then(()=>{

       })
    }
        
       
    const handlerDelete = async (id) =>{
           await axios.delete(`${url}/${id}/`)
            .then(()=>{
                if(window.confirm("Are you sure you want to delete this item?"))
             getData()
           })
   
     }

     useEffect(()=>{
        getData()
     },[getItem])

     return(
        <div className="post">

              <div>
                {getItem && getItem.map((post)=>{
                                              return(
                        <div key={post.id} className="box">
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
import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { FaEdit,FaTrash } from "react-icons/fa";


const Read = () =>{
    const [getItem, setGetItem] = useState([])
        

    const url = "https://dev.codeleap.co.uk/careers/"

    const getData = async () => {
        await axios.get(url)
            .then((response) => {
                setGetItem(response.data.results)
                
            })
    }

    //  const handlerEdit = async (id) =>{
    //    await axios.patch(`${url}${id}/`,{
    //     username,
    //     title,
    //     content
    //    })
    //    .then((response)=>{
    //     setTitle(...getItem,response.data)
    //     setContent(...getItem,response.data)
    //    })
       
    // }
    const handleEdit = async (id) => {
      
      try {
       const response = await axios.patch(`${url}${id}/`,
              {
                 getItem:id.username
              })
              console.log(response.data)
              
         setGetItem('')

      //  if(isOpen){

      //  }          
      } catch (err) {
          console.error(err)
      }
      
  }
      
    const handleDelete = async (id) =>{
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
                         <button onClick={()=> handleEdit(post.id)}><FaEdit/></button>
                         <button onClick={()=> handleDelete(post.id)}><FaTrash/></button>
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
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Modal from "./Modal";


const Read = () => {
  const [getItem, setGetItem] = useState([])
  const [update, setUpdate] = useState(null)
  const [openModal, setOpenModal] = useState(false)

  const url = "https://dev.codeleap.co.uk/careers/"

  const getData = async () => {
    await axios.get(url)
      .then((response) => {
        setGetItem(response.data.results)

      })
  }
 const handleSubmit = (newPost)=>{
 setGetItem([...getItem,newPost])
 }
  const handleEdit = async (id) => {
 
      await axios.patch(`${url}${id}/`)
           
      setUpdate(id)
      setOpenModal(true)
      console.log(id)
  }
  
  const handleDelete = async (id) => {
    await axios.delete(`${url}/${id}/`)
      .then(() => {
        if (window.confirm("Are you sure you want to delete this item?"))
          getData()
      })
  }

  useEffect(() => {
    getData()
  }, [getItem])

  return (
    <div className="post">
    
      <div>
        {openModal && <Modal 
        closeModal={()=>{setOpenModal(false)}}
        onSubmit={handleSubmit}
        defaultValue = {update !== null && getItem(update) }
        />}
        {getItem && getItem.map((post) => {
          return (
            <div key={post.id} className="box">
              <div className="header">
                {post.title}
                <button className="openModal" onClick={() => handleEdit(post.id)}><FaEdit /></button>
               
                <button onClick={() => handleDelete(post.id)}><FaTrash /></button>
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
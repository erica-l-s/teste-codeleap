import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Modal from "react-modal";
import Update from "./Update";
import Delete from "./Delete";


Modal.setAppElement('#root')

const Read = () => {
 
  const [getItem, setGetItem] = useState([])
  const [openModal, setOpenModal] = useState(false)
  
  const url = "https://dev.codeleap.co.uk/careers/"
  
  const getData = async () => {
    await axios.get(url)
    .then((response) => {
      setGetItem(response.data.results)
    })
  }
  
  const isOpenModal = () =>{
  setOpenModal(true)
  }

  const closeModal = () =>{
    setOpenModal(false)
  }
  
  const setData = (post) =>{
    let {id,title,content} = post
    localStorage.setItem('ID',id)
    localStorage.setItem('title',title)
    localStorage.setItem('content',content)
    isOpenModal()
  }
  
  const handleDelete = async (id) => {
      await axios.delete(`${url}${id}/`)
        .then(() => {
          getData()
               
        
        })
   
    }
    
    useEffect(() => {
      getData()
    }, [getItem])


    return (
      <div className="post">
      <div>
        {getItem && getItem.map((post) => {
          return (
            <div key={post.id} className="box">
              <div className="header">
                {post.title}
             <div className ="btnModal">
             <button className="btnModal-open" onClick={() => setData(post)}><FaEdit/></button>
                {openModal && <Update
                  isOpen = {openModal}
                  onRequestClose = {closeModal}
                />}

              <button className="btnModal-close" onClick={() => handleDelete(post.id)}><FaTrash /></button>
               <Delete
             
               message={"Are you sure you want to delete this item?"}
               onClose={closeModal}
               />
               
              </div>    
             
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

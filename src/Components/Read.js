import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Modal from "react-modal";
import Update from "./Update";
import { useNavigate } from "react-router-dom";


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
  
  const setData = (post) =>{
    let {id,title,content} = post
    localStorage.setItem('ID',id)
    localStorage.setItem('title',title)
    localStorage.setItem('content',content)
    isOpenModal()
  }
  
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      await axios.delete(`${url}${id}/`)
        .then(() => {
          getData()
        })
      }
    }
    
    useEffect(() => {
      getData()
    }, [getItem])

   const isOpenModal = () =>{
   setOpenModal(true)
   }

   const closeModal = () =>{
     setOpenModal(false)
    }



    return (
      <div className="post">

      <div>

        {getItem && getItem.map((post) => {
          return (
            <div key={post.id} className="box">
              <div className="header">
                {post.title}
               
               <button className="openModal" onClick={() => setData(post)}><FaEdit/></button>

                {openModal && <Update
                  isOpen = {openModal}
                  onRequestClose = {closeModal}
                  
                  />}

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
// const handleSubmitEdit = async (id) => {

//   try {
//     const response = await axios.patch(`${url}${id}/`,
//       {
//         title:title.id,
//         content:content.id
//       }
//     )
//     console.log(response.data)
//     setUpdate(response.data)
//     setOpenModal(true)
//     setTitle('')
//     setContent('')
//   } catch (err) {
//     console.error(err)
//   }
// }
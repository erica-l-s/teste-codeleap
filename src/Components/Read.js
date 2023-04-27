import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const Read = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
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

  const setData = (post) =>{
    let {id,title,content} = post
    localStorage.setItem('ID',id)
    localStorage.setItem('title',title)
    localStorage.setItem('content',content)

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

  return (
    <div className="post">

      <div>

        {getItem && getItem.map((post) => {
          return (
            <div key={post.id} className="box">
              <div className="header">
                {post.title}
                <Link to='/update'><button className="openModal" onClick={() => setData(post)}><FaEdit /></button></Link>

                {/* {openModal && <Modal
                  closeModal={() => {
                  setOpenModal(false)
                  setUpdate(null)

                  }}
                  onSubmit={handleSubmit}
                  defaultValue={update !== null && getItem[update]}

                />} */}

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
import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";

const Read = () =>{
    const [getItem, setGetItem] = useState([])

    const url = "https://dev.codeleap.co.uk/careers/"

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setGetItem(response.data.results)
            })
    }, [])

    const currentDate = new Date().toLocaleTimeString('pt-BR')
    console.log(currentDate)
  
     return(
        <div className="post">

              <div>
                {getItem && getItem.map((post)=>{
                    return(
                       <div key={post.id} className="box">
                       <div className="header">{post.title}</div>
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
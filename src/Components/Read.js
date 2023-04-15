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

    return(
        <div className="post">

              <div>
                {getItem && getItem.map((post)=>{
                    return(
                       <div key={post.id} className="box">
                       <div className="header">{post.title}</div>
                       <div className="name-user">
                         <p>@{post.username}</p>
                         <p>{post.created_datetime}</p>
                       </div>
                       <div>{post.content}</div>

                       </div>
                    )
                })}
            </div>
        </div>
    )

}

export default Read
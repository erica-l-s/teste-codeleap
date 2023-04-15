import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";

const Read = () =>{
    const [getItem, setGetItem] = useState([])

    const url = "https://dev.codeleap.co.uk/careers/"

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setGetItem(console.log(response.data.results))
            })
    }, [])

    return(
        <div className="post">

            olaaaa
            <div>
                {getItem && getItem.map((post)=>{
                    return(
                        <div key={post.id}>

                          
                        <ul>
                            <li>{post.title}</li>
                        </ul>
                          
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default Read
import React, {useEffect, useState} from "react";
import axios from "axios"




export default function Portfolion(){
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:9000/port")
            .then(res => {
                setPosts(res.data)
                console.log(res.data)
            })
            .catch(error => {
                console.error(error.message)
            })
    }, [])
    return(
        <>
        


        <div className="container">
        <h1 className="pt-5 pb-5">Портфолио</h1>
        <div class="row">


                    {
                        posts.map(post =>
                            <div class="col-lg-6 col-sm-21">
                                <div class="card">
                                    <img src={post.image} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                       
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

                </div>
        
        </>
    )
}
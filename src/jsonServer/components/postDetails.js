import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import PostControler from '../../controllers/posts';
export default function PostDetails() {
    
    const [postData, setPostData] = useState(null);
    let params = useParams();
    console.log(params);
    useEffect(() =>{
        PostControler.getById(params.id).then(res => setPostData(res))
    },[])
    console.log(postData);
    if(!postData){
        return <div>Loading...</div>
    }
  return (

    <div>
        <div>{postData.id}</div>
        <div>{postData.title}</div>
        <div>{postData.author}</div>
    </div>
    )
}

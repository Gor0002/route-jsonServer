import React from 'react';
import { Link } from 'react-router-dom';

export default function Post({elem}) {
  console.log(elem);
    return (
    <Link to={`/post/${elem.id}`}>    
        <div style={{display:"flex", width:200, justifyContent:"space-between", border:"1px solid red", borderRadius:3, margin:5 }}>
            <div>{elem.id}</div>
            <div>{elem.title}</div>
            <div>{elem.author}</div>
        </div>
    </Link>    
  )
}

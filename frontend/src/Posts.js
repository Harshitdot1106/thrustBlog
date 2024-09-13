import React from "react";
const Posts =({item})=>{
    return (
        <div>
            <div className="PostBody">
            <h2>{item.title}</h2>
            <h3>{item.author}</h3>
            <p>{item.body}</p>
</div>
<div className="comments">
<h5>{item.comments}</h5>
</div>
<div className="timestamps">
 <p>   {item.timestamps}</p>
</div>
        </div>
    )
}
export default Posts
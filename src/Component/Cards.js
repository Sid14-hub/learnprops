import React from "react"

function card(props){
    return(
<div className='card'>
    <img src={props.imgsrc} alt="Sorry" />
    <div>
    <p>{props.name}</p>
    <p>{props.des}</p>
    <button>{props.btn}</button>
    <hr />
    </div>
</div>
);
}
export default card;
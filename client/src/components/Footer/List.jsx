import React from "react";
import Listitem from "./Listitem";

const List = ({items}) =>{
    return(
        <ul>
            {items.map((item,index)=>{
                return <Listitem key={index} text={item} />
            })}
        </ul>
    )
}

export default List;
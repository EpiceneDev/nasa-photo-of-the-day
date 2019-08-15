import React from "react";

export default function Card(props) {
    
    console.log("Card props: ", props)
    return(
        <div>
            <h1>{props.data && props.data.title}</h1>
            <img src={props.data && props.data.url} alt="From Nasa"  className="photo"/>
            <h4>{props.data && props.data.date}</h4>
            <p>{props.data && props.data.explanation}</p>
        </div>
    )
}
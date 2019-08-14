import React from "react";

export default function Card(props) {
    return(
        <div>
            <h3>{props.title}</h3>
            <img href={props.url} alt="Photo of the day from Nasa"  className="photo"/>
            <h4>{props.date}</h4>
            <p>{props.info}</p>
        </div>
    )
}
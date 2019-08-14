import React, { useState, useEffect } from "react";
import DatePick from "./DatePick";

export default function CardContainer() {
    
    const [photo, setPhoto] = useState("")

    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod")
            .then(res => console.log("RES: ", res))
            .catch(err => console.log("OOPS. API ERROR: ", err))
    }, []);
    return (
        <div className="card-container">
            <h1>NASA Photo of the Day</h1>
            <br />
            <DatePick date={date}/>
        </div>
    );
}
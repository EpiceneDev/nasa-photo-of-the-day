import React, { useState, useEffect } from "react";
import DatePick from "./DatePick";
import axios from "axios";

export default function CardContainer() {

    const [date, setDate] = useState("")

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=BDe7RgqHPuZGj6iDu2KoCvE6WfbDsJb4QLTWHwgx&date=${date}`)
            .then(res => console.log("RES: ", res))
            .catch(err => console.log("OOPS. API ERROR: ", err))
    }, []);
    return (
        <div className="card-container">
            <h1>NASA Photo of the Day</h1>
            <br />
            <DatePick />
        </div>
    );
}
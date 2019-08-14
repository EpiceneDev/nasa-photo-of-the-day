import React, { useState, useEffect } from "react";
import DatePick from "./DatePick";
import axios from "axios";
import Card from "./Card";

export default function CardContainer() {
    const [data, setData] = useState("")
    const [date, setDate] = useState("2019-08-13")

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=BDe7RgqHPuZGj6iDu2KoCvE6WfbDsJb4QLTWHwgx&date=${date}`)
            .then(res => {
               // setDate(res.data.date)
                setData(res.data)
                console.log("res.data = ", res.data)
                console.log("res.date = ", res.data.date)})
            .catch(err => console.log("OOPS. API ERROR: ", err))
    }, [date]);
    console.log("DATE: ", {date});
    return (
        <div className="card-container">
            <h1>NASA Photo of the Day</h1>
            <br />
            <DatePick date={date} setDate={setDate} />
            <Card data={data}/>
        </div>
    );
}
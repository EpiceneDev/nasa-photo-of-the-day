import React from "react";
import DatePick from "./DatePick";

export default CardContainer(props) {
    let date = props.date;
    
    return (
        <div>
            <h1>NASA Photo of the Day</h1>
            <DatePick date={date}/>
        </div>
    );
}
import React from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";
import Card from "./components/Card";
import DatePick from "./components/DatePick";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <DatePick />
      <CardContainer />
      <Card />
    </div>
  );
}

export default App;

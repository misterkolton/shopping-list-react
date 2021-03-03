import React, { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import ReminderList from "./components/ReminderList";

function App() {
  // below.. inputText is the value and setInputText is the function that updates "inputText". 
  // I am passing the set imput text to the form 
  const [inputText, setInputText] = useState("");
  // now that "inputText" has the value of setInputText, I now have access to it to be able 
  // to add it anywhere i would like, for example if i added it to the h1 below it would add 
  // any text i write on to the end of my h1 title ex. <h1 Reminder List {inputText} <h1/>
  const [reminders, setReminders] = useState([]); //this is set as an array because we are adding an array of reminders
  const [status, setStatus ] = useState("All");
  const [filteredReminders, setFilteredReminders] = useState([]); 
  return (
    <div className="App" >
      <header>
      <h1> Reminder List </h1>
      </header>
      <Form reminders={reminders} 
      setReminders={setReminders} 
      setInputText={setInputText} 
      inputText ={inputText}
      setStatus = {setStatus}
      />
      <ReminderList setReminders={setReminders} reminders={reminders} />
    </div>
  )
}

export default App;
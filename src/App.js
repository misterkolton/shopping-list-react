import React, { useState, useEffect } from "react";
  // ^this "useEffect" was added to make the filter function work
import "./App.css";

import Form from "./components/Form";
import ReminderList from "./components/ReminderList";

function App() {
  // STATE STUFF
  // below.. inputText is the value and setInputText is the function that updates "inputText". 
  // I am passing the set imput text to the form 
  const [inputText, setInputText] = useState("");
  // now that "inputText" has the value of setInputText, I now have access to it to be able 
  // to add it anywhere i would like, for example if i added it to the h1 below it would add 
  // any text i write on to the end of my h1 title ex. <h1 Reminder List {inputText} <h1/>
  const [reminders, setReminders] = useState([]); //this is set as an array because we are adding an array of reminders
  const [status, setStatus ] = useState("all");
  const [filteredReminders, setFilteredReminders] = useState([]); 

// RUN ONCE when the app starts
  useEffect(() => {
    getLocalReminders();
  }, []);

  // USE EFFECT
  useEffect (() => {
    filterHandler();
    saveLocalReminders();    
  }, [reminders, status]);
  // ^ if this were left with an empty braket for the 2nd argument above, it would only run this only 1 time when the page is loaded. by adding a value into the [] it will run the function agian.
  
   // ^this was added to make the filter function work

  // FUNCTIONS
  const filterHandler = () => {
    switch (status) {
      case "comleted":
        setFilteredReminders(reminders.filter(reminder => reminder.completed === true));
        break;
      case "uncompleted":
        setFilteredReminders(reminders.filter(reminder => reminder.completed === false));
        break;
      default:
        setFilteredReminders(reminders);
        break;
    }
  };

// SAVE TO LOCAL
  const saveLocalReminders = () => {
    localStorage.setItem("reminders", JSON.stringify(reminders));
  }
  const getLocalReminders = () => {
    if(localStorage.getItem('reminders') === null){
      localStorage.setItem("reminders", JSON.stringify([]));
    } else {
      let reminderLocal = JSON.parse(localStorage.getItem("reminders"))
      setReminders(reminderLocal);
    }
  }

  return (
    <div className="App" >
      <header>
      <h1> Shopping List </h1>
      </header>
      <Form 
        reminders={reminders} 
        setReminders={setReminders} 
        setInputText={setInputText} 
        inputText ={inputText}
        setStatus = {setStatus}
      />
      <ReminderList 
        setReminders={setReminders} 
        reminders={reminders} 
        filteredReminders = {filteredReminders} 
        // ^this "filteredReminders = {filteredReminders}" was added to make the filter function work
      />
    </div>
  )
}

export default App;
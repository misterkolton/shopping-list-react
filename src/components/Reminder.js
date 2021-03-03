import React from "react";

const Reminder = ({ text, reminder, reminders, setReminders }) => {

    const deleteHandler = () => {
        setReminders(reminders.filter((el) => el.id !== reminder.id))
        console.log(reminder)
    }

 const completHander = () => {
     setReminders(reminders.map(item => {
         if(item.id === reminder.id) {
             return{
             ...item, completed: !item.completed
         };
        }
        return item;
     }))
 }

    return(
        <div className="reminder" >
            <li className={`reminder-item ${reminder.completed ? "completed" : "" }`} >
                {text}
            </li>
            <button onClick={completHander} className="complete-button" > 
                <i  className="fas fa-check"  ></i> 
            </button>
            <button onClick={deleteHandler} className="trash-button">
                <i className="fas fa-trash" ></i>
            </button>
        </div>

    );
}

export default Reminder;
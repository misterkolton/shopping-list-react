import React from "react";
import Reminder from "./Reminder"


const ReminderList = ({ reminders, setReminders }) => {
    console.log(reminders)
    return(
        <div className="reminder-container">
            <ul className="reminder-list">
                {reminders.map((reminder) => (
                <Reminder 
                setReminders={setReminders}
                reminders={reminders}
                text={reminder.text}
                reminder= {reminder}
                key={reminder.id}
                />
                )) }
            </ul>
        </div>
    );  
};

export default ReminderList;
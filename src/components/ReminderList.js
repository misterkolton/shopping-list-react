import React from "react";
import Reminder from "./Reminder"


const ReminderList = ({ reminders, setReminders, filteredReminders }) => {
    // "filteredReminders" was added to make the filter funcitonality work with useEffect
    console.log(reminders)
    return(
        <div className="reminder-container">
            <ul className="reminder-list">
                {/* below we have changed from {reminders.map} to {filteredReminders} to make the filter funcionality work*/}
                {filteredReminders.map((reminder) => (
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
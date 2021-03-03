import React from 'react';


// here we are passing setInput text into the Form. We can either right it as with props in the perentheses like below 
// in the notes, or as it is actually written in short hand without props using curly brackets.
// const Form = (props) => {
    // const inputTextHandler = (e) => {
    //     console.log(e.target.value);
    //     props.setInputText
    // }
const Form = ({ setInputText, reminders, setReminders, inputText, setStatus }) => {
    const inputTextHandler = (e) => {       
        setInputText(e.target.value);
    };
    const submitReminderHandler = (e) => {
        e.preventDefault();
        setReminders([
            ...reminders, { text: inputText, completed: false, id: Math.random() * 1000 } // <this "... reminders" is call spreading. this means if there were already items in this array..
            //or in this case, reminders in the reminder list, this tells it to pass it and contintue to add
        ]);
        setInputText("");
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return(
        <form>
            {/* below on input, i am passing the "inputTextHandler" to the onChange event */}
            <input value={inputText} onChange={inputTextHandler} type="text" className="reminder-input" />
            <button onClick={submitReminderHandler} className="reminder-button" type="submit">
            <i className="fas fa-plus"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="reminders" className="filter-reminder">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>      
        </form>
    )
}

export default Form;
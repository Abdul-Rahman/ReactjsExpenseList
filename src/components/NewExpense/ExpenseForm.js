import React, {useState} from "react";
import './ExpenseForm.css';
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    const titleChangeHandler = (event) => {
        //console.log(event.target.value);
        setEnteredTitle(event.target.value);
     }
    const amountChangeHandler = (event) => {
        //console.log(event.target.value);
        setEnteredAmount(event.target.value);
     }
    const dateChangeHandler = (event) => {
        //console.log(event.target.value);
        setEnteredDate(event.target.value);
     }
     const submitHandler = (event) => {
        event.preventDefault(); // stops refresh on form submit
        const expenseData = {
            title: enteredTitle,
            price: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData); // passing data to parent NewExpense.js via props 
        console.log(expenseData);
        //Reset control values immediately after submit
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
     }
    return(
        <form onSubmit={submitHandler}>
            <div className=".newExpense__controls">
                <div className=".newExpense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className=".newExpense__control">
                    <label>Amouont</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className=".newExpense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expensse</button>
            </div>
        </form>
    );
}
export default ExpenseForm;
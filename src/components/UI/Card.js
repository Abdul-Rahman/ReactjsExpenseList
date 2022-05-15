/* 1. {props.children} will fetch the child of <Card> in the return statement of the ExpenseItem.js which is <ExpenseDate> and other <div> and <h2> (See ExpenseItem.js)
2. props.className will fetch the “expense-item” class from the <Card className="expense-item"> statement from ExpenseItem.js (See ExpenseItem.js)
*/ 
import React from "react";
import "./Card.css"
const Card = (props) => {
    const classes = 'card ' + props.className;
    return (
        <div className={classes}> {props.children}</div>
    ) 
}
export default Card;
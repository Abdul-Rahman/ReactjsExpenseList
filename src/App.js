import React, {useState, useEffect} from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

let DUMMY_EXPENSE = []
function App() {
    const [expenses,setExpenses] = useState(DUMMY_EXPENSE); 

    function fetchData(){
        fetch('http://alphapeeler.sourceforge.net/FAST/WebSp22/rectexpapi/api/read.php').then(
            response => {
                return response.json()
            }
        ).then(
            data => {
                console.log(data); 
                setExpenses(data);
            }
        );
    }
    useEffect(()=>{
        fetchData();
    },[]); //[] is blank array so that use effect should only call fetch when [] changes, and as [] will never change so this useeffect will call fetch only once in the app.  
    // },[expenses]); // If we use expense arry instead of [], UseEffect will call fetch whenever expenses array changes, but in this case infinite loop occurs so we use [].

    const addExpenseHandler = (expense) => {
        //console.log(expense);
        //const updatedExpense = [expense, ...expenses];
        //setExpenses(updatedExpense);
        fetch('http://alphapeeler.sourceforge.net/FAST/WebSp22/rectexpapi/api/create.php', {
            method: 'POST',
            body: JSON.stringify(expense),
            headers: {
                'content-Type' : 'application/json'
            }
        }).then(
            response => {
                fetchData();
            }
        );
    };
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses item = {expenses}/>
        </div>
    );
}
export default App;
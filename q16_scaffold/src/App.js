import "./App.css";
import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";


const App = () => {

  const [expenses, setExpenses] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const [profitAmount, setProfitAmount] = useState(0);
  const [expenseAmount, setExpenseAmount] = useState(0);

  const handleTransaction = (expense) => {
    const amount = parseInt(expense.amount);

    setExpenses([expense, ...expenses]);
    setGrandTotal(grandTotal + amount);

    if (expense.amount >= 0) {
      setProfitAmount(profitAmount + amount);
    }
    else {
      setExpenseAmount(expenseAmount + amount);
    }
  }
  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm expenses={expenses} handleTransaction={handleTransaction} />
        <div className="expenseContainer">

          <ExpenseInfo expenses={expenses} grandTotal={grandTotal} profitAmount={profitAmount} expenseAmount={expenseAmount} />
          <ExpenseList expenses={expenses} />
        </div>
      </div>
    </>
  );
}

export default App;
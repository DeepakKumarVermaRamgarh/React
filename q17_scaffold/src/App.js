import "./App.css";
import React, { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";


const App = () => {

  const [expenses, setExpenses] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const [profitAmount, setProfitAmount] = useState(0);
  const [expenseAmount, setExpenseAmount] = useState(0);

  const handleTransaction = (expense) => {
    const amount = parseFloat(expense.amount);
    if (amount === 0) return;
    setExpenses([expense, ...expenses]);
  }

  const deleteTransaction = (id) => {
    setExpenses(expenses.filter(e => e.id !== id));
  }

  useEffect(() => {
    let totalProfit = 0;
    let totalExpense = 0;

    expenses.forEach((expense) => {
      const amount = parseFloat(expense.amount);
      if (amount > 0) {
        totalProfit += amount;
      } else {
        totalExpense += amount;
      }
    });

    setProfitAmount(totalProfit);
    setExpenseAmount(totalExpense);
    setGrandTotal(totalProfit + totalExpense);
  }, [expenses])



  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm handleTransaction={handleTransaction} />
        <div className="expenseContainer">

          <ExpenseInfo expenses={expenses} grandTotal={grandTotal} profitAmount={profitAmount} expenseAmount={expenseAmount} />
          <ExpenseList expenses={expenses} deleteTransaction={deleteTransaction} />
        </div>
      </div>
    </>
  );
}

export default App;
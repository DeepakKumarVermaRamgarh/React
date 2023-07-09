import React from "react";
import styles from "./ExpenseList.module.css";
import Transaction from "../Transaction/Transaction";

const ExpenseList = ({ expenses = [], deleteTransaction }) => {
  return <div className={styles.expenseListContainer}>
    <h3>Transactions</h3>
    <ul className={styles.transactionList}>
      {
        expenses.map((expense) => (<Transaction key={expense.id} expense={expense} deleteTransaction={deleteTransaction} />))
      }
    </ul>
  </div>
}

export default ExpenseList;
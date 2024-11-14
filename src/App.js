import React, { useState } from "react";
import ExpenseForm from "./conponents/ExpenseForm";
import MemberList from "./conponents/MemberList";
import ExpenseReport from "./conponents/ExpenseReport";
 

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [members, setMembers] = useState(["Alice", "Bob", "Charlie"]); // Example members

  // Add new expense
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div>
      <h1>Expense Split Calculator</h1>
      <ExpenseForm addExpense={addExpense} members={members} />
      <MemberList members={members} expenses={expenses} />
      <ExpenseReport members={members} expenses={expenses} />
    </div>
  );
};

export default App;

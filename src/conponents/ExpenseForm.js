import React, { useState } from "react";

const ExpenseForm = ({ addExpense, members }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    const expense = {
      description,
      amount: parseFloat(amount),
      splitAmount: parseFloat(amount) / members.length,
    };
    addExpense(expense);

    setDescription("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;

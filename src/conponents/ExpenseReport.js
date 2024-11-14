import React from "react";

const ExpenseReport = ({ members, expenses }) => {
  return (
    <div>
      <h2>Expense Report</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.description}: ${expense.amount.toFixed(2)} split among {members.length} people.
          </li>
        ))}
      </ul>
      <p>Total Expenses: ${expenses.reduce((sum, e) => sum + e.amount, 0).toFixed(2)}</p>
    </div>
  );
};

export default ExpenseReport;

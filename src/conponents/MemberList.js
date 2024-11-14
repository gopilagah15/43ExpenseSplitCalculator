import React from "react";

const MemberList = ({ members, expenses }) => {
  const calculateBalances = () => {
    const balances = {};
    members.forEach((member) => {
      balances[member] = 0;
    });

    expenses.forEach((expense) => {
      const splitAmount = expense.splitAmount;
      members.forEach((member) => {
        balances[member] -= splitAmount;
      });
    });

    return balances;
  };

  const balances = calculateBalances();

  return (
    <div>
      <h2>Member Balances</h2>
      <ul>
        {Object.entries(balances).map(([member, balance]) => (
          <li key={member}>
            {member}: ${balance.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemberList;

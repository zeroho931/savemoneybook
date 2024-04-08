import React from "react";

const ExpenseList = ({ expenses }) => {
  return (
    <ul className="expense-list">
      {expenses.map((expense, index) => (
        <li key={index}>
          <div>이름: {expense.name}</div>
          <div>가격: {expense.amount}</div>
          <div>유형: {expense.type}</div>
          <div>구입 날짜: {expense.date.toDateString()}</div>
          {expense.memo && <div>메모: {expense.memo}</div>}
          <div>재구매 의사: {expense.willRepurchase ? "예" : "아니오"}</div>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;

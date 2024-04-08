import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import FilterComponent from "./components/FilterComponent";
import "./App.css";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const addExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  // 필터링된 목록 반환 함수
  const getFilteredExpenses = () => {
    let filteredExpenses = [...expenses];

    // 유형 필터링
    if (filterType) {
      filteredExpenses = filteredExpenses.filter(
        (expense) => expense.type === filterType
      );
    }

    // 기간 필터링
    if (startDate && endDate) {
      filteredExpenses = filteredExpenses.filter((expense) => {
        const expenseDate = new Date(expense.date);
        return (
          expenseDate >= new Date(startDate) && expenseDate <= new Date(endDate)
        );
      });
    }

    // 정렬
    if (sortOrder === "asc") {
      filteredExpenses.sort((a, b) => a.amount - b.amount);
    } else if (sortOrder === "desc") {
      filteredExpenses.sort((a, b) => b.amount - a.amount);
    }

    return filteredExpenses;
  };

  return (
    <div className="app">
      <h1>가계부 프로젝트</h1>
      <div className="expense-form-container">
        <h2>지출 항목 추가</h2>
        <ExpenseForm onAddExpense={addExpense} />
      </div>
      <div className="filter-container">
        <FilterComponent
          filterType={filterType}
          sortOrder={sortOrder}
          startDate={startDate}
          endDate={endDate}
          onTypeChange={(e) => setFilterType(e.target.value)}
          onSortOrderChange={(e) => setSortOrder(e.target.value)}
          onStartDateChange={(e) => setStartDate(e.target.value)}
          onEndDateChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div className="expense-list-container">
        <h2>지출 항목 리스트</h2>
        <ExpenseList expenses={getFilteredExpenses()} />
      </div>
    </div>
  );
};

export default App;

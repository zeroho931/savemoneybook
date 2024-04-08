import React, { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [memo, setMemo] = useState("");
  const [isMemoChecked, setIsMemoChecked] = useState(false);
  const [willRepurchase, setWillRepurchase] = useState("");

  const handleMemoCheckboxChange = (e) => {
    setIsMemoChecked(e.target.checked);
    if (!e.target.checked) {
      setMemo(""); // 체크 해제 시 메모 초기화
    }
  };

  const handleRepurchaseChange = (e) => {
    setWillRepurchase(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expense = {
      name,
      amount: +amount,
      type,
      date: new Date(date),
      memo: isMemoChecked ? memo : "", // 메모 체크 여부에 따라 메모 값 설정
      willRepurchase,
    };
    onAddExpense(expense);
    // 입력 값 초기화
    setName("");
    setAmount("");
    setType("");
    setDate("");
    setMemo("");
    setIsMemoChecked(false);
    setWillRepurchase("");
  };

  return (
    <form onSubmit={submitHandler} className="expense-form">
      <div className="input-row">
        <label htmlFor="name">이름:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-row">
        <label htmlFor="amount">가격:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="input-row">
        <label htmlFor="type">유형:</label>
        <select id="type" value={type} onChange={handleTypeChange}>
          <option value="">유형 선택</option>
          <option value="식료품">식료품</option>
          <option value="생활용품">생활용품</option>
          <option value="의류">의류</option>
        </select>
      </div>
      <div className="input-row">
        <label htmlFor="date">구입 날짜:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="input-row">
        <label>메모 사용:</label>
        <input
          type="checkbox"
          id="memoCheckbox"
          checked={isMemoChecked}
          onChange={handleMemoCheckboxChange}
        />
      </div>
      {isMemoChecked && ( // 메모 사용 체크 시에만 메모 입력란을 표시합니다.
        <div className="input-row">
          <label htmlFor="memo">메모:</label>
          <input
            type="text"
            id="memo"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
          />
        </div>
      )}
      <div className="input-row">
        <label>재구매 의사:</label>
        <div>
          <label>
            <input
              type="radio"
              name="repurchase"
              value="yes"
              checked={willRepurchase === "yes"}
              onChange={handleRepurchaseChange}
            />
            예
          </label>
          <label>
            <input
              type="radio"
              name="repurchase"
              value="no"
              checked={willRepurchase === "no"}
              onChange={handleRepurchaseChange}
            />
            아니오
          </label>
        </div>
      </div>
      <button type="submit">추가</button>
    </form>
  );
};

export default ExpenseForm;

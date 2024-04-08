import React from "react";

const FilterComponent = ({
  filterType,
  sortOrder,
  startDate,
  endDate,
  onTypeChange,
  onSortOrderChange,
  onStartDateChange,
  onEndDateChange,
}) => {
  return (
    <div className="filter-form">
      <div className="input-row">
        <label htmlFor="filterType">유형 선택:</label>
        <select id="filterType" value={filterType} onChange={onTypeChange}>
          <option value="">전체</option>
          <option value="식료품">식료품</option>
          <option value="생활용품">생활용품</option>
          <option value="의류">의류</option>
        </select>
      </div>
      <div className="input-row">
        <label htmlFor="sortOrder">정렬 기준:</label>
        <select id="sortOrder" value={sortOrder} onChange={onSortOrderChange}>
          <option value="asc">오름차순</option>
          <option value="desc">내림차순</option>
        </select>
      </div>
      <div className="input-row">
        <label htmlFor="startDate">시작 기간:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={onStartDateChange}
        />
      </div>
      <div className="input-row">
        <label htmlFor="endDate">끝 기간:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={onEndDateChange}
        />
      </div>
    </div>
  );
};

export default FilterComponent;

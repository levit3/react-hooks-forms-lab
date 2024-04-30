import React, { useState } from "react";

function Filter({ onCategoryChange, input, onSearchChange }) {
  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        value={input}
        placeholder="Search..."
        onChange={onSearchChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;

import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [input, setInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function onSearchChange(e) {
    setInput(e.target.value);
  }
  const filteredItems = items.filter(
    (item) =>
      item.category.toLowerCase().includes(input.toLowerCase()) ||
      item.name.toLowerCase().includes(input.toLowerCase())
  );

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        onCategoryChange={handleCategoryChange}
        input={input}
        onSearchChange={onSearchChange}
      />
      <ul className="Items">
        {" "}
        {input
          ? filteredItems.map((item) => (
              <Item key={item.id} name={item.name} category={item.category} />
            ))
          : itemsToDisplay.map((item) => (
              <Item key={item.id} name={item.name} category={item.category} />
            ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

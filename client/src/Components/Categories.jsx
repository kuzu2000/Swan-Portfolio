import { useState } from 'react';

const Categories = ({ categories, filterItems }) => {
    const [activeItem, setActiveItem] = useState('All');
    const handleItemClick = (item) => {
        setActiveItem(item);
      };
    return (
      <div className="btn-container">
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              id={category == activeItem ? 'active': ''}
              className="filter-btn"
              key={index}
              onClick={() => {
                filterItems(category); handleItemClick(category)}
              }>
              {category}
            </button>
          );
        })}
      </div>
    );
  };
  
  export default Categories;
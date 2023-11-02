// Categories.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [ {id:1,name:'food'},{id:2,name:'clothes'}];

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;

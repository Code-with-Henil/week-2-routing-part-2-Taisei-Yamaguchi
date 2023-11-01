// RecipeList.js
import React from 'react';
import { Link } from 'react-router-dom';
import recipes from './recipesData';

const RecipeList = () => {
    return (
        <div>
        <h2>Recipes</h2>
        <ul>
            {recipes.map(recipe => (
            <li key={recipe.id}>
                <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default RecipeList;

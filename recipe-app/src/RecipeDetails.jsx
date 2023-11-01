// RecipeDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import recipes from './recipesData';

const RecipeDetails = () => {
    const { id } = useParams();
    const recipe = recipes.find(recipe => recipe.id === parseInt(id));

    return (
        <div>
        {recipe ? (
            <div>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <p>Instructions: {recipe.instructions}</p>
            </div>
        ) : (
            <p>Recipe not found</p>
        )}
        </div>
    );
};

export default RecipeDetails;

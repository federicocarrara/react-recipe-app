import React, { Component } from 'react';
import './RecipeList.css';
import Recipe from './Recipe';

class RecipeList extends Component {
  render() {
    const recipes = this.props.recipes.map(recipe => (
      <Recipe
        key={recipe.id}
        recipe={recipe}
        deleteRecipe={this.props.deleteRecipe}/>
    ))
    return (
      <div>
        <ul className='recipeList'>
          {recipes}
        </ul>
      </div>
    );
  }
}

export default RecipeList;

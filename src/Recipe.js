import React, { Component } from 'react';
import './Recipe.css';

class Recipe extends Component {
  handleDeleteRecipe = () => {
    this.props.deleteRecipe(this.props.recipe)
  }
  render(){
    const {title, img, instructions} = this.props.recipe;
    const ingredients = this.props.recipe.ingredients.map(
      (ingredient, i) => (
        <li key={i}>{ingredient}</li>
      )
    );
    return(
      <div className="recipe-card">
        <div className="recipe-card-img">
          <img src={img} alt={title}/>
        </div>
        <div className="recipe-card-content">
          <h3>{title}</h3>
          <h4>ingredients:</h4>
          <ul>{ingredients}</ul>
          <h4>instructions:</h4>
          <p>{instructions}</p>
          <button style={{fontSize:16}} onClick={this.handleDeleteRecipe}>DELETE</button>
        </div>
      </div>
    );
  }
}

export default Recipe;

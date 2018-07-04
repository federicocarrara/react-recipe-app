import React, { Component } from 'react';
import './RecipeApp.css';
import Navbar from './Navbar';
import RecipeList from './RecipeList';
import NewRecipeForm from './NewRecipeForm';


class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [{
        id:0,
        title:'pasta',
        ingredients:['flower', 'water'],
        img:"https://www.cookingclassy.com/wp-content/uploads/2018/01/instant-pot-spaghetti-12-500x500.jpg",
        instructions:"mix the ingredients"
        },
        {
        id:1,
        title:'ice cream',
        ingredients:['milk', 'sugar'],
        img:"https://assets.marthastewart.com/styles/wmax-1500/d33/vanilla-icecream-0611med107092des/vanilla-icecream-0611med107092des_sq.jpg?itok=ErVG8ofB",
        instructions:"blend it all"
      }],
      nextRecipeId: 2,
      formClosed: true
    }
  }
  addRecipe = (recipe) => {
    let {recipes} = this.state;
    let newRecipe = {...recipe, id:this.state.nextRecipeId};
    this.setState((prevState) => {
      return {
        recipes: [...recipes, newRecipe],
        nextRecipeId: prevState.nextRecipeId + 1
      }
    });
  }
  closeForm = (formClosed) => {
    this.setState({
      formClosed
    })
  }
  showForm = () => {
    if (this.state.formClosed) {
      this.setState({
      formClosed: false
      })
    } else this.setState({
      formClosed: true
      })
  }
  render() {
    return (
      <div className="App">
        <Navbar
          showForm={this.showForm}
          title="Recipe App"
          text1="New Recipe"
        />
      {this.state.formClosed === false ?
      <NewRecipeForm
        addRecipe={this.addRecipe}
        closeForm={this.closeForm} /> : null}
      <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default RecipeApp;

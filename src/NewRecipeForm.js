import React, { Component } from 'react';

class NewRecipeForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:'',
      ingredients:[''],
      img:'',
      instructions:''
    }
  }
  handleChange = (e) => {
    this.setState({
      // see computed property names for [] syntax
      [e.target.name]: e.target.value
    })
  }
  handleIngredientChange = (e) => {
    let ingredients = this.state.ingredients.map((ingredient, i) => (
      Number(e.target.name) === i ? e.target.value : ingredient
    ));
    this.setState({
      ingredients
    });
  }
  addNewIngredient = (e) => {
    const {ingredients} = this.state;
    this.setState({
      ingredients: [...ingredients, '']
    });
  }
  saveRecipe = (e) => {
    e.preventDefault();
    const recipe = this.state;
    this.props.addRecipe(recipe);
    this.setState({
      title:'',
      ingredients:[''],
      img:'',
      instructions:''
    })
  }
  onClose = () => {
    this.props.closeForm(true)
  }
  render(){
    const {title, ingredients, img, instructions} = this.state;
    let ingredientsInputs = ingredients.map((ingredient, i) => (
      <div key={`ingredient-${i}`}>
        <label>{i+1}</label>
        <input name={i} value={ingredient} onChange={this.handleIngredientChange}/>
      </div>
    ))
    return(
      <form onSubmit={this.saveRecipe}>
        <button onClick={this.onClose} type='button'> X </button>
        <div>
          <label>title</label>
          <input name="title" value={title} onChange={this.handleChange}/>
        </div>
        <div>
          <label>ingredients</label>
          {ingredientsInputs}
          <button type='button' onClick={this.addNewIngredient}> + </button>
        </div>
        <div>
          <label>instructions</label>
          <textarea name="instructions" value={instructions} onChange={this.handleChange}/>
        </div>
        <div>
          <label>image url</label>
          <input name="img" value={img} onChange={this.handleChange}/>
        </div>
        <button type='submit'> SAVE </button>
      </form>
    );
  }
}

export default NewRecipeForm;

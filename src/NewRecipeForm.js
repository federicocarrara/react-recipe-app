import React, { Component } from 'react';
import './NewRecipeForm.css'

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
    });
    this.props.showForm();
  }
  onClose = () => {
    this.props.closeForm(true)
  }
  render(){
    const {title, ingredients, img, instructions} = this.state;
    let ingredientsInputs = ingredients.map((ingredient, i) => (
      <div key={`ingredient-${i}`}>
        <label style={{display:'inline-block'}}>{i+1}.</label>
        <input name={i} value={ingredient} onChange={this.handleIngredientChange} required/>
      </div>
    ))
    return(
      <form className='recipe-card-form' onSubmit={this.saveRecipe}>
        <div className='content'>
          <button onClick={this.onClose} type='button'> X </button>
          <div>
            <label>title</label>
            <input name="title" value={title} onChange={this.handleChange} required/>
          </div>
          <div>
            <label>ingredients</label>
            {ingredientsInputs}
            <button type='button' style={{fontSize:25}} onClick={this.addNewIngredient}> + </button>
          </div>
          <div>
            <label>instructions</label>
            <textarea name="instructions" value={instructions} onChange={this.handleChange} required/>
          </div>
          <div>
            <label>image url</label>
            <input name="img" value={img} onChange={this.handleChange} required/>
          </div>
          <button type='submit'> SAVE </button>
        </div>
      </form>
    );
  }
}

export default NewRecipeForm;

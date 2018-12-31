import React, { Component } from 'react';
// import { getRecipes } from '../services/fakeRecipes'; //
import SearchForm from './searchForm';
import RecipeCard from './recipeCard';
import DetailView from './detailView';
import { Grid } from 'semantic-ui-react';
import axios from 'axios';

class DirectoryView extends Component {
  state = {
    recipes: [],
    input: '',
    term: '',
    filtered: [],
    recipe: ''
  };

  async componentDidMount() {
    const { data } = await axios.get('/api/recipe');
    this.setState({ recipes: [...data] });
  }
  handleInputChange = evt => {
    const input = evt.target.value;
    this.setState({ input, recipe: '' });
  };

  handleFormSubmit = evt => {
    evt.preventDefault();
    const term = this.state.input;
    this.setState({ term, input: '' }, () => this.searchRecipe());
  };

  searchRecipe = () => {
    const recipes = [...this.state.recipes];
    const term = this.state.term.toLowerCase();
    const filtered = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(term)
    );
    this.setState({ filtered });
  };

  handleDetail = recipe => {
    this.setState({ recipe });
  };

  render() {
    const { input, filtered, recipe } = this.state;
    return (
      <React.Fragment>
        <Grid columns={2}>
          <Grid.Column width="7">
            <SearchForm
              onInput={this.handleInputChange}
              onForm={this.handleFormSubmit}
              input={input}
            />
            <RecipeCard recipes={filtered} onHandleDetail={this.handleDetail} />
          </Grid.Column>
          <Grid.Column width="9">
            {recipe && <DetailView recipe={recipe} />}
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}

export default DirectoryView;

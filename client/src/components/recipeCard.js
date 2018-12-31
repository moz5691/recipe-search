import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

class RecipeCard extends Component {
  handleDetail = recipe => {
    this.props.onHandleDetail(recipe);
  };
  render() {
    const { recipes } = this.props;
    return (
      <div style={{ marginLeft: '20px' }}>
        {recipes.map(r => (
          <Card
            style={{ marginLeft: '10px' }}
            as="h4"
            color="green"
            key={r.id}
            onClick={() => this.handleDetail(r)}
            header={r.name}
          />
        ))}
      </div>
    );
  }
}

export default RecipeCard;

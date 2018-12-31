import React from 'react';
import { Header, Grid, Image, List } from 'semantic-ui-react';

const DetailView = props => {
  const { recipe } = props;
  return (
    <div style={{ marginRight: '20px' }}>
      <Header as="h2" color="green" textAlign="left">
        <Image circular src={recipe.img} />
        {recipe.name}
      </Header>

      <Grid columns={2} divided>
        <Grid.Column width="6">
          <h3>Ingredients</h3>
          <List
            style={{ textAlign: 'left' }}
            size="large"
            items={recipe.ingredients}
          />
        </Grid.Column>

        <Grid.Column width="10">
          <h3>Instructions</h3>
          <List
            style={{ textAlign: 'left' }}
            size="large"
            ordered
            items={recipe.instructions}
          />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default DetailView;

import React from 'react';
import { Header, Image } from 'semantic-ui-react';

const TopMenu = () => {
  return (
    <Header
      as="h2"
      inverted
      color="yellow"
      textAlign="left"
      style={{
        fontStyle: 'italic',
        backgroundColor: 'green'
      }}
    >
      <Image
        circular
        src="/assets/patrick.png"
        style={{ marginLeft: '20px' }}
      />
      Pete's RecipeApp
    </Header>
  );
};

export default TopMenu;

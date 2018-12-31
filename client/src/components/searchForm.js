import React from 'react';
import { Form } from 'semantic-ui-react';

const SearchForm = props => {
  const { input, onInput, onForm } = props;
  return (
    <Form onSubmit={onForm}>
      <Form.Group style={{ marginLeft: '20px' }}>
        <Form.Input
          placeholder="Search"
          value={input}
          onChange={onInput}
          type="text"
        />
        <Form.Button type="submit" color="green">
          Submit
        </Form.Button>
      </Form.Group>
    </Form>
  );
};

export default SearchForm;

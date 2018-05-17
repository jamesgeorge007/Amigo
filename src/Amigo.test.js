import React from 'react';
import ReactDOM from 'react-dom';
import Amigo from './Amigo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Amigo />, div);
  ReactDOM.unmountComponentAtNode(div);
});

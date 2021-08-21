import React from 'react';
import ReactDOM from 'react-dom';

const Layout = props => (
  <div>
    <p>Header</p>
    {props.children}
    <p>Footer</p>
  </div>
);

const template = (
  <div>
    <h1>Title</h1>
    <p>This is my content</p>
  </div>
);

ReactDOM.render(
  <Layout>
    <p>This is inline</p>
  </Layout>,
  document.getElementById('app')
);

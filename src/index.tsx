import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './components/App';

import './index.css';
import 'antd/dist/antd.css';

const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com',
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

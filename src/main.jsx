import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './app/app-store.js';
import App from './app.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
);

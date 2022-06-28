import React from 'react';
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <AppRouter />
    {/* </Provider> */}
  </React.StrictMode>
);
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import { store } from "./redux/store/store"
import './styles/style.css';
import './styles/StylesGlobals'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
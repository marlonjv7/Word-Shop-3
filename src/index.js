import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
<<<<<<< HEAD
=======
import { store } from "./redux/store/store"
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> ef6a525dad9405b76aae33a580d02f40058707ab
import './styles/style.css';
import './styles/StylesGlobals'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
 
    <Provider store={store}> 
      <AppRouter />
     </Provider> 
 
);
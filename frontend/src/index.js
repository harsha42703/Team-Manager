import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { UserDetails } from './features/User/UserSlice';

import './index.css';
export const baseUrl = "http://localhost:5000"
const container = document.getElementById('root');
const root = createRoot(container);
store.dispatch(UserDetails())
root.render(

    <Provider store={store}>
      <App />
    </Provider>

);


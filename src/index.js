// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
import { ThemeProvider } from "@mui/material/styles";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter/>
  </React.StrictMode>,
  document.getElementById('root')
);

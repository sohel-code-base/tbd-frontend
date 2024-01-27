import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import '@mantine/core/styles.css';

import { MantineProvider, createTheme } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import './i18n.js'

const theme = createTheme({
  primaryColor: 'indigo',
  // fontFamily: 'sans-serif',
  fontFamily: 'sans-serif'
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <MantineProvider theme={theme}>
      <BrowserRouter>
      
        <App />
        
      </BrowserRouter>

    </MantineProvider>

  </React.StrictMode>,
)

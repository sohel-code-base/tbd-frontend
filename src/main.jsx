import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import { MantineProvider, createTheme } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import './i18n.js'
import '@mantine/core/styles.css';


const theme = createTheme({
  primaryColor: 'indigo',
  // fontFamily: 'sans-serif',
  fontFamily: 'Open Sans, sans-serif',
  // autoContrast: true,
  // defaultRadius: 'xl'

})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    {/* <MantineProvider theme={theme} defaultColorScheme="dark" classNamesPrefix="terminalbd"> */}
    <MantineProvider theme={theme}>
      <BrowserRouter>
      
        <App />
        
      </BrowserRouter>

    </MantineProvider>

  </React.StrictMode>,
)

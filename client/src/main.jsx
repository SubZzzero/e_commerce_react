import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Provider } from "react-redux";
import { store } from './state/store.js'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from './theme.js'

createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>

)

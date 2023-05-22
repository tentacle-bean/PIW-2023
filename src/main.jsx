import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Provider as ContextProvider} from './context/DataContext.jsx'
import {Provider as ReduxProvider} from "react-redux"
import { store } from './store/index.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </ReduxProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// removed './index.css' cause ill be using the app.css styles
// imported bootstrap. bootstrap is a css library that makes styling an app easier
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


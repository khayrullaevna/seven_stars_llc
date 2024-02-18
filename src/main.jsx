import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../css/mainStyle.min.css'

// import global_en from "./translations/en/global.json"
// import global_ru from "./translations/ru/global.json"

// i18next.init({
//   interpolation: {escapeValue: false},
//   lng: "en",
//   resources: {
//     en: {
//       global: global_en
//     },
//     rus: {
//       global: global_ru
//     }
//   }
// })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './redux/store/store.js'
import App from './components/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={store}>
  <App />
</Provider>
)


 


import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './redux/store/store'
import App from './components/App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
  )
 


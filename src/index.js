import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import store from './redux/redux-store'

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderDom = (state) => {
  root
    ?
    root.render(
      <BrowserRouter>
        <App state={state} store={store}/>
      </BrowserRouter>
    )
    :
    console.error('укажи правильный root')
}

rerenderDom(store.getState());

store.subscribe(() => {
  rerenderDom(store.getState())
})

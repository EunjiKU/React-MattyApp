import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CookiesProvider } from 'react-cookie';

// ✅ Redux 관련 불러오기
// import { applyMiddleware, createStore } from 'redux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import promiseMiddleware from 'redux-promise';
// import ReduxThunk from 'redux-thunk';
import Reducer from './_reducers';

// const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);
const store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CookiesProvider>
        <Provider
            store={store}
        >
            <App />
        </Provider>
    </CookiesProvider>
)

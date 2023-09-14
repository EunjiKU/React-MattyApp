import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from './_reducers';
import { CookiesProvider } from 'react-cookie';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CookiesProvider>
        <Provider
            store={createStoreWithMiddleware(Reducer,
                window.REDUX_DEVTOOLS_EXTENSION &&
                window.REDUX_DEVTOOLS_EXTENSION()
            )}
        >
            <App />
        </Provider>
    </CookiesProvider>
);

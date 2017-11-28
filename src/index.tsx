import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { polyfill } from 'smoothscroll-polyfill';

import './index.css';

import App from './components/App';

import StoreProvider from './StoreProvider';

import registerServiceWorker from './registerServiceWorker';

polyfill();

const rootEl = document.getElementById('root') as HTMLElement;

ReactDOM.render(
    <StoreProvider>
        <App />
    </StoreProvider>,
    rootEl
);

registerServiceWorker();

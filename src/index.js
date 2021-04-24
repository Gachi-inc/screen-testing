import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';
import { rootStore } from './models/RootStore';
import { addMiddleware } from 'mobx-state-tree';
const stores = {rootStore}
console.log(rootStore)
addMiddleware(rootStore, (call, next) => {
    console.log(`rootStore: [${call.type}] ${call.name}`);
    return next(call);
  });

ReactDOM.render(
    <Provider {...stores}>
        <App />
    </Provider>
, document.querySelector('#root'));

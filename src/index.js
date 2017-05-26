import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, browserHistory } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';

import PostsList from './components/posts-list';
import PostsNew from './components/posts-new';
import PostShow from './components/posts-show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path="/posts/new" component={PostsNew} />
        <Route path="/posts/:id" component={PostShow} />
        <Route path="/" component={PostsList} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

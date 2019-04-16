import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 

import { Provider } from 'react-redux'
import store from './store'

import Navbar from './components/layout/Navbar'
import SiteListContainer from './components/layout/SiteListContainer'

import './App.css';

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
    	<Router>
	      <div className="App">
					<Navbar />
					<div className="container">
						<Switch>
							<Route exact path="/" component={SiteListContainer} />
						</Switch>
		      </div>
	      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;

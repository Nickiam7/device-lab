import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 

import { Provider } from 'react-redux'
import store from './store'

import Navbar from './components/layout/Navbar'
import SiteListContainer from './components/layout/SiteListContainer'
import AddSite from './components/sites/AddSite'

import './App.css';

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
    	<Router basename={process.env.PUBLIC_URL}>
	      <div className="App">
					<Navbar />
					<div className="container">
						<Switch>
							<Route exact path="/" component={SiteListContainer} />
							<Route exact path="/site/new" component={AddSite} />
						</Switch>
		      </div>
	      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;

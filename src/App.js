import React from 'react';
import HeaderComponent from './component/Header/HeaderComponent'
import PLP from './container/PLP/PLP'
import PDP from './container/PDP/PDP'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
// import MainComponent from './Main'
function App() {
  return (
    <React.Fragment>
      <Router>
        <HeaderComponent/>
      <Switch>
      <main>
        <div className="container">
          <Route exact path="/"component={PLP}/>
          <Route exact path="/products/:id" component={PDP}/>
        </div>
        </main>
        </Switch>
        </Router>
      </React.Fragment>
  );
}

export default App;

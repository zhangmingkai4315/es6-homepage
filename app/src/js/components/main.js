/** @jsx React.DOM */


var React = require('react'),
    ReactDOM= require('react-dom'),
    ReactRouter=require('react-router'),
    Router=ReactRouter.Router,
    Route=ReactRouter.Route,
    IndexRoute=ReactRouter.IndexRoute,
    App=require('./App'),
    ES6=require('./ES6'),
    Edit=require('./Edit'),
    New=require('./New'),
    About=require('./About');

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={ES6} />
      <Route  path="edit/:name" component={Edit}/>
      <Route  path="new" component={New}/>
      <Route  path="about" component={About}/>
    </Route>
  </Router>
),document.getElementById('es6-components'));

/** @jsx React.DOM */

var React=require('react');
var ReactRouter=require('react-router');
var Router=ReactRouter.Router;
var Route=ReactRouter.Route;
var IndexRoute=ReactRouter.IndexRoute;
var Link=ReactRouter.Link;
var App=React.createClass({
  render:function () {
    return(
      <div>
          <div>{this.props.children}</div>
      </div>

    );
  }
});

module.exports = App;

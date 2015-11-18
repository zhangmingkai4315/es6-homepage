/** @jsx React.DOM */

var React=require('react');
var ReactRouter=require('react-router');
var Router=ReactRouter.Router;
var Route=ReactRouter.Route;
var IndexRoute=ReactRouter.IndexRoute;
var Link=ReactRouter.Link;
var Edit=React.createClass({
  render:function () {
    return(<div>
              <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/new">新建</Link></li>
                <li><Link to="/edit">编辑</Link></li>
                <li><Link to="/about">关于</Link></li>
              </ul>
          </div>
    )
  }
});

module.exports = Edit;

/** @jsx React.DOM */


var React = require('react');
var ES6=require('./ES6');
var ReactDOM= require('react-dom');
var MenuData=
[{
  key:1,
  title:"常量",
  href:'#constants'
},{
  key:2,
  title:"作用域",
  href:'#Scoping'
},{
  key:3,
  title:"扩展的参数处理",
  href:'#ExtendArguments'
},{
  key:4,
  title:"箭头函数",
  href:'#ArrayFunction'
}];
ReactDOM.render(<ES6 url="http://localhost:4000/es6/api" MenuData={MenuData}/>,document.getElementById('es6-components'));

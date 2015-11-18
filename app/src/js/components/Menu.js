/** @jsx React.DOM */

var React = require('react');
var PropTypes = React.PropTypes;
var MenuItem =require("./MenuItem");
var Menu = React.createClass({
  getInitialState:function(){
    return{
      key:-1
    };
  },
  onHandleMenuClick:function (obj) {
    if(!obj){
      this.props.changeView();
    }else{
      this.setState({key:obj.key});
      this.props.changeView({
        title:obj.title
      });
    }
  },
  backHomePage:function () {
    $("html,body").animate({scrollTop:0},800); 
    this.onHandleMenuClick();
  },
  render: function() {
    var MenuList='';
    if(this.props.MenuData){
      var menudata=this.props.MenuData;
      MenuList=menudata.map(function (data,num) {
          return <MenuItem key={num} data={data} onHandleMenuClick={this.onHandleMenuClick} checked={this.state.key===data.key?true:false}/>;
      }.bind(this));
    }

    return (
      <div>
        <a href="#menu" id="menuLink" className="menu-link">
            <span></span>
        </a>
        <div id="menu">
            <div className="pure-menu">
                <a className="pure-menu-heading" href="#" onClick={this.backHomePage}>ES6规范</a>
                <ul className="pure-menu-list">
                    {MenuList}
                </ul>
            </div>
        </div>
      </div>
    );
  }

});

module.exports = Menu;

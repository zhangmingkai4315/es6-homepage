var React = require('react');
var PropTypes = React.PropTypes;
var Menu=require('./Menu');
var MenuItem = React.createClass({
  getInitialState:function () {
    return{
      checked:false
    };
  },
  handleClick:function (e) {
    e.preventDefault();
    // this.setState({checked:true});
    this.props.onHandleMenuClick({
      key:this.props.data.key,
      title:this.props.data.title
    });
  },
  render: function() {
    var classNameString="menu-item-divided pure-menu-selected";
    if(!this.props.data){
      return (<li>Loading...</li>);
    }
    return (
       <li key={this.props.data.key} className="pure-menu-item" className={this.props.checked?classNameString:""} >
          <a href={this.props.data.href} className="pure-menu-link" onClick={this.handleClick}>{this.props.data.title}
          </a>
       </li>
    );
  }

});

module.exports = MenuItem;

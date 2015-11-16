/** @jsx React.DOM */

var React = require('react');
var PropTypes = React.PropTypes;

var SearchBar = React.createClass({

  render: function() {
    return (
      <div id="SearchBar">
        <form id="searchForm" className="pure-form">
           <input type="text" className="pure-input-rounded" name="search" placeholder="搜索特性"/>
        </form>
      </div>
    );
  }

});

module.exports = SearchBar;

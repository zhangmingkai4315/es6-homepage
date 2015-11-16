/** @jsx React.DOM */
var React = require('react');
var PropTypes = React.PropTypes;
var InfoItem=require('./InfoItem');


var InfoList = React.createClass({
  render: function() {
    var retinfos="",
        title=""
        data=this.props.data;
    if(data&&data.length>=0){

      retinfos=data.map(function (dataItem,num) {
        return <InfoItem key={num} dataItem={dataItem}/>
      });
    }
    return (
    <div>
      <div id="main">
          <div className="header">
            <h1>{this.props.title}</h1>
          </div>
          {retinfos}
     </div>
     <div id="LoadingPage">

     </div>
   </div>
    );
  }
});

module.exports = InfoList;

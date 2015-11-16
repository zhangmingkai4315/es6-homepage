/** @jsx React.DOM */

var React = require('react');
var PropTypes = React.PropTypes;

var InfoItem = React.createClass({

  render: function() {
    var data=this.props.dataItem
    if(!data){
      return;
    }
    return (
      <div className='content'>
        <h2>{data.SubTitle}</h2>
        <h3 className="content-subhead">使用说明</h3>
        <p>
          {data.Usage||""}
        </p>
        <div className="pure-g">
            <h3 className="content-subhead pure-u-5-5">代码示例</h3>
            <div className="pure-u-11-24">
              <h4 className="content-subhead"><strong>这是ES6代码</strong></h4>
                <pre>
                  <code>
                    {data.CodeEs6}
                  </code>
                </pre>
            </div>
            <div className="pure-u-2-24"></div>
            <div className="pure-u-11-24">
              <h4 className="content-subhead"><strong>这是ES6代码</strong></h4>
                <pre>
                  <code>
                  {data.CodeEs5}
                  </code>
                </pre>
            </div>

            <div className="pure-u-5-5">
              <h3 className="content-subhead">备注</h3>
              <p>{data.Remark||""}
              </p>
            </div>
         </div>
        </div>
    );
  }

});

module.exports = InfoItem;

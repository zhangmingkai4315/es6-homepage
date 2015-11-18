/** @jsx React.DOM */

var React = require('react');
var PropTypes = React.PropTypes;
var _=require('lodash');
var markdown=require('markdown').markdown;

var InfoList = require('./InfoList.js'),
    InfoItem = require('./InfoItem.js'),
    Menu = require('./Menu.js'),
    SearchBar = require('./SearchBar.js');

var codeString="```\n\rvar a=10;\n\rvar b=10;\n\rvar f=function(){\n\rconsole.log();\n\r};```";
var ES6 = React.createClass({
  // 设置缺省的菜单

  getDefaultProps:function () {
    var MenuData=
    [{
      key:1,
      title:"等待载入菜单",
      href:'#'
    }];

    return {
       MenuData:MenuData

    };
  },
  getInitialState:function () {
    var fakeData=[{
              id:1,
              Title:'常量',
              SubTitle:"块级作用域变量",
              Usage:"定义一个变量，该变量只在所在的代码块有效，以下的代码中如果使用var 定义的话，则所有返还的都将是相同的值。通过使用块级作用域定义变量 ，减少了代码的编写量和出错的可能性，使得代码逻辑性更强。",
              CodeEs6:markdown.toHTML(codeString),
              CodeEs5:"const PI=3.14; console.log(PI);",
              Remark:"无"
            },{id:2,
                Title:'常量',
                    SubTitle:"块级作用域函数",
                    Usage:"定义一个变量，该变量只在所在的代码块有效，以下的代码中如果使用var 定义的话，则所有返还的都将是相同的值。通过使用块级作用域定义变量 ，减少了代码的编写量和出错的可能性，使得代码逻辑性更强。",
                    CodeEs6:"const PI=3.14; console.log(PI);",
                    CodeEs5:"const PI=3.14; console.log(PI);",
                    Remark:"无"
              },{
                id:3,
                Title:'作用域',
                SubTitle:"块级作用域变量",
                Usage:"定义一个变量，该变量只在所在的代码块有效，以下的代码中如果使用var 定义的话，则所有返还的都将是相同的值。通过使用块级作用域定义变量 ，减少了代码的编写量和出错的可能性，使得代码逻辑性更强。",
                CodeEs6:"const PI=3.14; console.log(PI);",
                CodeEs5:"const PI=3.14; console.log(PI);",
                Remark:"无"
              },{
                id:4,
                Title:'扩展的参数处理',
                SubTitle:"***",
                Usage:"定义一个变量，该变量只在所在的代码块有效，以下的代码中如果使用var 定义的话，则所有返还的都将是相同的值。通过使用块级作用域定义变量 ，减少了代码的编写量和出错的可能性，使得代码逻辑性更强。",
                CodeEs6:"const PI=3.14; console.log(PI);",
                CodeEs5:"const PI=3.14; console.log(PI);",
                Remark:"无"
              }
      ];
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
    return{
      ES6Data:{},
      fakeData:fakeData,
      MenuData:MenuData
    }
  },
  // 加载完成后确认页面的显示逻辑，并初始化第一次的请求获得所有的数据
  componentWillMount:function () {
    // ajax初始化请求
  },
  componentDidMount:function () {
    // debugger;
    $("#main").show();
    $("#LoadingPage").hide();
    this.handleAjaxRequest(this.props.url);
  },
  // 用户提交后，发送ajax请求给用户
  handleChangeView:function (obj) {
    if(!obj){
      var dataset=_.groupBy(this.state.fakeData,function (obj) {
        return obj.Title;
      });
      this.setState({ES6Data:dataset});
      return;
    }
    // $("#LoadingPage").show();
    // $("#main").hide();
    var fakedata=this.state.fakeData;

    var dataset=_.filter(fakedata,_.matches({'Title':obj.title}));
    var key=obj.title,obj={};
    obj[key]=dataset;

    this.setState({ES6Data:obj});

  },
  handleAjaxRequest:function (url) {
    $.ajax({
      type:"get",
      dataType:"json",
      url:url,
      complete:function () {
        $("#LoadingPage").hide();
      },
      success:function (obj) {

        this.setState({Es6DataObj:obj});
      },
      error:function (XMLHttpRequest,textStatus,errorThrown) {


        var dataset=_.groupBy(this.state.fakeData,function (obj) {
          return obj.Title;
        });
        // console.log(dataset);
        this.setState({ES6Data:dataset});
      }.bind(this)
    });
  },
  render: function() {
    var dataSet=this.state.ES6Data;
        keys=_.keys(dataSet);
    var retList=keys.map(function (key,num) {
      return <InfoList key={num} data={dataSet[key]} title={key}/>;
    });
    return (
      <div id="layout">
        <Menu MenuData={this.state.MenuData} changeView={this.handleChangeView}/>
        <SearchBar/>
        {retList}
      </div>
    );
  }
});

module.exports = ES6;

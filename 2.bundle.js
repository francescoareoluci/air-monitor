(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{693:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(21),l=a(8),i=a.n(l),c=a(5);a(369);function p(e){var t=[("0"+e.getDate()).slice(-2),("0"+(e.getMonth()+1)).slice(-2),e.getFullYear()].join("/");return t.slice(0,t.length-2)}function s(e){var t=[];e+=1;for(var a=0;a<e;a+=1){var n=Math.floor(11*Math.random()+10);t.push(n)}return t}function u(e,t){var a=Math.abs(t-e),n=Math.ceil(a/864e5),o=(p(e),p(t),{date:function(e,t){for(var a=new Array,n=e;n<=t;)a.push(p(new Date(n))),n=n.addDays(1);return a}(e,t),plotTypes:{temperature:s(n),pm25:s(n),pm10:s(n),co2:s(n),rad:s(n),ds18:s(n),voc:s(n),no3:s(n)}});return{type:c.a,payload:o}}Date.prototype.addDays=function(e){var t=new Date(this.valueOf());return t.setDate(t.getDate()+e),t};var f=a(387),y=a.n(f);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g={temperature:"Temperature (°C)",pm25:"PM2.5 (µg/m³)",pm10:"PM10 (µg/m³)",co2:"CO2 (ppm)",rad:"RAD",ds18:"DS18",voc:"VOC",no3:"NO3"},O=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=m(this,h(t).call(this,e))).state={displayedValues:[]},a}var a,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,e),a=t,(n=[{key:"getOption",value:function(){return{tooltip:{trigger:"axis"},toolbox:{show:!0,feature:{dataZoom:{title:"zoom",yAxisIndex:"none"},saveAsImage:{title:"Download"}},iconStyle:{borderColor:"#90969C"}},xAxis:{type:"category",boundaryGap:!1,data:this.props.dataPlot.date,axisLine:{lineStyle:{color:"#7F8082"}},axisLabel:{rotate:60}},yAxis:{type:"value",axisLabel:{formatter:"{value}"},min:10,axisLine:{lineStyle:{color:"#7F8082"}}},series:[{name:g[this.props.plotType],type:"line",data:this.props.dataPlot.plotTypes[this.props.plotType],markLine:{data:[{type:"average",name:"avg"}],color:"#51A9FF"},color:"#51A9FF"}],textStyle:{fontFamily:"montserrat-regular",fontSize:10}}}},{key:"render",value:function(){return o.a.createElement("div",{className:"plot-chart"},o.a.createElement(y.a,{option:this.getOption(),style:{height:"100%"}}))}}])&&b(a.prototype,n),r&&b(a,r),t}(o.a.Component);O.propTypes={plotType:i.a.string,dataPlot:i.a.array};var D=Object(r.b)((function(e){return{plotType:e.plotType,dataPlot:e.dataPlot}}))(O),P=a(692);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(Object(a),!0).forEach((function(t){T(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function T(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function E(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var A=[{value:"temperature",label:"Temperature"},{value:"co2",label:"CO2"},{value:"rad",label:"RAD"},{value:"pm25",label:"PM2.5"},{value:"pm10",label:"PM10"},{value:"ds18",label:"DS18"},{value:"voc",label:"VOC"},{value:"no3",label:"NO3"}],C=function(e){function t(e){var a,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(a=!(o=x(t).call(this,e))||"object"!==S(o)&&"function"!=typeof o?_(n):o).state={isDataAvailable:!1},a.updateTypeSelection=a.updateTypeSelection.bind(_(a)),a.getIndexById=a.getIndexById.bind(_(a)),a}var a,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,e),a=t,(n=[{key:"updateTypeSelection",value:function(e){this.props.changePlotType(e.value)}},{key:"getIndexById",value:function(e){for(var t=0;t<A.length;t+=1)if(e==A[t].value)return t;return 0}},{key:"componentWillMount",value:function(){this.props.changeDataPlotLoading(!0),this.props.changeDataPlot(this.props.startingSelectedDate,this.props.endingSelectedDate)}},{key:"componentWillReceiveProps",value:function(e){var t=this;if(e.startingSelectedDate===this.props.startingSelectedDate&&e.endingSelectedDate===this.props.endingSelectedDate||(this.props.changeDataPlotLoading(!0),setTimeout((function(){t.props.changeDataPlot(e.startingSelectedDate,e.endingSelectedDate)}),2e3)),e.dataPlot!==this.props.dataPlot){var a=0!=e.dataPlot.date.length;this.setState({isDataAvailable:a})}}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"data-plot-wrapper"},o.a.createElement("div",{className:"data-plot-types"},A.map((function(t){return o.a.createElement("h2",{key:t.value,className:e.props.plotType==t.value?"plot-type plot-selected":"plot-type",onClick:function(){return e.updateTypeSelection(t)}},t.label)}))),o.a.createElement("div",{className:"data-plot-type-select"},o.a.createElement("h2",{className:"data-plot-select-title"},"Choose a data type:"),o.a.createElement(P.a,{options:A,defaultValue:A[this.getIndexById(this.props.plotType)],isSearchable:"false",className:"data-plot-select",onChange:this.updateTypeSelection,theme:function(e){return j({},e,{colors:j({},e.colors,{primary25:"#E4F3FF",primary:"#51A9FF"})})}})),o.a.createElement("div",{className:"data-plot-container"},this.props.isDataPlotLoading&&o.a.createElement("div",{className:"lds-ring-wrapper"},o.a.createElement("div",{className:"lds-ring"},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))),!this.props.isDataPlotLoading&&!this.state.isDataAvailable&&o.a.createElement("div",{className:"data-plot-not-available"},o.a.createElement("h2",{className:"data-plot-not-available-label"},"Data not available for the selected days. Please change the date.")),!this.props.isDataPlotLoading&&this.state.isDataAvailable&&o.a.createElement(D,null)))}}])&&E(a.prototype,n),r&&E(a,r),t}(o.a.Component);C.propTypes={plotType:i.a.string,startingSelectedDate:i.a.instanceOf(Date),endingSelectedDate:i.a.instanceOf(Date),dataPlot:i.a.array,isDataPlotLoading:i.a.bool};t.default=Object(r.b)((function(e){return{plotType:e.plotType,startingSelectedDate:e.startingSelectedDate,endingSelectedDate:e.endingSelectedDate,dataPlot:e.dataPlot,isDataPlotLoading:e.isDataPlotLoading}}),(function(e){return{changePlotType:function(t){return e((a=t,{type:c.g,payload:a}));var a},changeDataPlot:function(t,a){return e(u(t,a))},changeDataPlotLoading:function(t){return e((a=t,{type:c.b,payload:a}));var a}}}))(C)}}]);
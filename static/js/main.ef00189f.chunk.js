(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{12:function(e,t,a){e.exports={city_wrapper:"CityBlock_city_wrapper__o_y5Z",geo_icon:"CityBlock_geo_icon__3DKIG",city_name:"CityBlock_city_name__1stIf"}},13:function(e,t,a){e.exports={forecast_wrapper:"ForecastBlock_forecast_wrapper__3uRcJ",forecast:"ForecastBlock_forecast__8aER6",degrees:"ForecastBlock_degrees__-sDRW"}},2:function(e,t,a){e.exports={overlay:"Modal_overlay__3_hIZ",modal:"Modal_modal__1lNzv",closeIcon:"Modal_closeIcon__1jLc0",cityEnter:"Modal_cityEnter__quoHz",city_enter_field:"Modal_city_enter_field__joaxr",city_find:"Modal_city_find__pppKb",search_img:"Modal_search_img__Au8FX",findLocation_btn:"Modal_findLocation_btn__2cv5Z",myLocation_img:"Modal_myLocation_img__1zZox",location_text:"Modal_location_text__4my0W",error_wrapper:"Modal_error_wrapper__3IbZM"}},35:function(e,t,a){},36:function(e,t,a){},4:function(e,t,a){e.exports={forecast_tomorrow:"ForecastDays_forecast_tomorrow__ASRr1",info:"ForecastDays_info__1nKXM",info_item:"ForecastDays_info_item__28d3S"}},63:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(10),i=a.n(r),s=(a(35),a(11)),o=(a(36),a(12)),l=a.n(o),d=a.p+"static/media/gps.61eeaeb3.png",j=a(0),u=function(e){var t=e.name;return Object(j.jsxs)("div",{className:l.a.city_wrapper,children:[Object(j.jsx)("div",{className:l.a.geo_icon,children:Object(j.jsx)("img",{src:d,alt:"Position"})}),Object(j.jsx)("div",{className:l.a.city_name,children:t})]})},m=a(13),_=a.n(m),b=function(e){var t,a=e.weather,c=e.main;return Object(j.jsxs)("div",{className:_.a.forecast_wrapper,children:[Object(j.jsx)("div",{className:_.a.forecast,children:(t=a.description,t.replace(/\w\S*|([\u0430-\u044f])\S*/gi,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})))}),Object(j.jsxs)("div",{className:_.a.degrees,children:[Math.round(c.temp),Object(j.jsx)("span",{children:"\xb0"})]})]})},p=a(9),f=a.n(p),h=a.p+"static/media/menu.0f0af277.png",O=a.p+"static/media/sunny.ff1c9117.png",x=a.p+"static/media/clouds.d7583765.png",g=a.p+"static/media/rainy.3f3e3fbd.png",v=a.p+"static/media/snow.396cc600.png",y={Clouds:x,Rain:g,Clear:O,Drizzle:a.p+"static/media/drizzle.d26f0f21.png",Thunderstorm:a.p+"static/media/thunder.c286a09e.png",Snow:v},w=function(e){for(var t in y)if(e===t)return y[t]},N=function(e){var t=e.setIsModal,a=e.weather;return Object(j.jsxs)("div",{className:f.a.top_block,children:[a.main&&Object(j.jsx)("img",{src:w(a.main),className:f.a.forecast_img,alt:"Forecast"}),Object(j.jsx)("button",{className:f.a.menu_btn,onClick:function(){return t(!0)},children:Object(j.jsx)("img",{src:h,className:f.a.menu_btn_img,alt:"Menu"})})]})},k=a(4),I=a.n(k),M=a.p+"static/media/therm.d09c348b.png",C=a.p+"static/media/humidity.9a9f83b3.png",E=a.p+"static/media/gauge.676f0679.png",S=a.p+"static/media/wind.18ead477.png",L=function(e){var t=e.main,a=e.wind;return Object(j.jsx)("div",{className:I.a.forecast_tomorrow,children:Object(j.jsxs)("div",{className:I.a.info,children:[Object(j.jsxs)("div",{className:I.a.info_item,children:[Object(j.jsx)("img",{src:M,alt:"themperature"}),Object(j.jsx)("h4",{children:"\u0412\u0456\u0434\u0447\u0443\u0432\u0430\u0454\u0442\u044c\u0441\u044f \u044f\u043a"}),Object(j.jsxs)("p",{children:[Math.round(t.feels_like),"\xb0"]})]}),Object(j.jsxs)("div",{className:I.a.info_item,children:[Object(j.jsx)("img",{src:C,alt:"humidity"}),Object(j.jsx)("h4",{children:"\u0412\u043e\u043b\u043e\u0433\u0456\u0441\u0442\u044c"}),Object(j.jsxs)("p",{children:[t.humidity,"%"]})]}),Object(j.jsxs)("div",{className:I.a.info_item,children:[Object(j.jsx)("img",{src:E,alt:"pressure"}),Object(j.jsx)("h4",{children:"\u0422\u0438\u0441\u043a"}),Object(j.jsxs)("p",{children:[t.pressure," \u0433\u041f\u0430"]})]}),Object(j.jsxs)("div",{className:I.a.info_item,children:[Object(j.jsx)("img",{src:S,alt:"wind speed"}),Object(j.jsx)("h4",{children:"\u0412\u0456\u0442\u0435\u0440"}),Object(j.jsxs)("p",{children:[a.speed," \u043a\u043c/\u0433\u043e\u0434"]})]})]})})},A=a(2),B=a.n(A),D=a.p+"static/media/search.725ebd85.png",R=a(28),F=a(7),P=a(5),z=a.n(P),H=a(14),T=a(6),Z=a(19),J=a.n(Z),K="http://api.openweathermap.org/data/2.5/weather?lang=uk&units=metric&appid=".concat("2f720667554e58071332a55212703508"),W=function(e){return J.a.get("".concat(K,"&q=").concat(e)).then((function(e){return e.data}))},q=function(e,t){return J.a.get("".concat(K,"&lat=").concat(e,"&lon=").concat(t)).then((function(e){return e.data}))},G="ADD_WEATHER",U="LOADING",X="SET_ERROR",Y={name:"",weather:[{main:"",description:""}],main:{temp:8.54,feels_like:6.21,pressure:1016,humidity:87},wind:{speed:4,deg:300},id:703448,isLoading:!1,error:null},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(T.a)(Object(T.a)({},e),t.payload);case U:return Object(T.a)(Object(T.a)({},e),{},{isLoading:t.bool});case X:return Object(T.a)(Object(T.a)({},e),{},{error:t.msg});default:return e}},V=function(e){return{type:G,payload:e}},$=function(e){return{type:U,bool:e}},ee=function(e){return{type:X,msg:e}},te=function(e){return function(){var t=Object(H.a)(z.a.mark((function t(a){var c;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a($(!0)),t.next=3,W(e).catch((function(e){a(ee(e.response.data.message))}));case 3:c=t.sent,a(V(c)),c&&localStorage.setItem("city",c.name),a($(!1));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},ae=Object(F.b)(null,{setCoord:function(e,t){return function(){var a=Object(H.a)(z.a.mark((function a(c){var n;return z.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c($(!0)),a.next=3,q(e,t);case 3:n=a.sent,c(V(n)),localStorage.setItem("city",n.name),c($(!1));case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},setCity:te})((function(e){var t=e.setIsModal,a=Object(c.useState)(""),n=Object(s.a)(a,2),r=n[0],i=n[1],o=Object(R.usePosition)(!0,{enableHighAccuracy:!0}),l=o.latitude,u=o.longitude;return Object(j.jsx)("div",{className:B.a.overlay,children:Object(j.jsxs)("div",{className:B.a.modal,children:[Object(j.jsx)("button",{className:B.a.closeIcon,onClick:function(){return t(!1)},children:"\xd7"}),Object(j.jsxs)("form",{className:B.a.cityEnter,onSubmit:function(a){return function(a){a.preventDefault(),e.setCity(r),t(!1)}(a)},children:[Object(j.jsx)("input",{className:B.a.city_enter_field,placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0430\u0448\u0435 \u043c\u0456\u0441\u0442\u043e",onChange:function(e){return i(e.target.value)},value:r}),Object(j.jsx)("button",{className:B.a.city_find,type:"submit",children:Object(j.jsx)("img",{src:D,className:B.a.search_img,alt:"Search"})})]}),Object(j.jsx)("div",{className:B.a.findLocation,children:Object(j.jsxs)("button",{className:B.a.findLocation_btn,onClick:function(){e.setCoord(l,u),t(!1)},children:[Object(j.jsx)("img",{src:d,className:B.a.myLocation_img,alt:"Position"}),Object(j.jsx)("span",{className:B.a.location_text,children:" \u041c\u043e\u0454 \u043c\u0456\u0441\u0446\u0435\u0437\u043d\u0430\u0445\u043e\u0434\u0436\u0435\u043d\u043d\u044f "})]})})]})})})),ce=function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"loader-container",children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]}),Object(j.jsx)("div",{className:"spinner-container",children:Object(j.jsxs)("div",{className:"spinner-path",children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]})})]})},ne=a.p+"static/media/triangle.12e2a5cc.svg",re=function(e){var t=e.error,a=e.setAPIError;return Object(j.jsx)("div",{className:B.a.overlay,children:Object(j.jsxs)("div",{className:B.a.modal,children:[Object(j.jsx)("button",{className:B.a.closeIcon,onClick:function(){return a(null)},children:"\xd7"}),Object(j.jsxs)("div",{className:B.a.error_wrapper,children:[Object(j.jsx)("img",{src:ne,alt:""}),Object(j.jsx)("h3",{children:t})]})]})})},ie=Object(F.b)((function(e){return{main:e.main,name:e.name,weather:e.weather,wind:e.wind,loading:e.isLoading,error:e.error}}),{setCity:te,setAPIError:function(e){return function(){var t=Object(H.a)(z.a.mark((function t(a){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a(ee(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=Object(c.useState)(!1),a=Object(s.a)(t,2),n=a[0],r=a[1];return Object(c.useEffect)((function(){localStorage.getItem("city")?e.setCity(localStorage.getItem("city")):r(!0)}),[]),e.loading?Object(j.jsx)(ce,{}):Object(j.jsxs)("div",{className:"main_app",children:[Object(j.jsx)(N,{weather:e.weather[0],setIsModal:r}),Object(j.jsx)(u,{name:e.name}),Object(j.jsx)(b,{main:e.main,weather:e.weather[0]}),Object(j.jsx)(L,{main:e.main,wind:e.wind}),n&&Object(j.jsx)(ae,{setIsModal:r}),e.error&&Object(j.jsx)(re,{error:e.error,setAPIError:e.setAPIError})]})})),se=a(8),oe=a(30),le=Object(se.c)(Q,Object(se.a)(oe.a));i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(F.a,{store:le,children:Object(j.jsx)(ie,{})})}),document.getElementById("root"))},9:function(e,t,a){e.exports={forecast_img:"HeaderBlock_forecast_img__1C0IN",menu_btn:"HeaderBlock_menu_btn__1uiEC",top_block:"HeaderBlock_top_block__2yT__",menu_btn_img:"HeaderBlock_menu_btn_img__PYUTs"}}},[[63,1,2]]]);
//# sourceMappingURL=main.ef00189f.chunk.js.map
webpackJsonp([0],{"0/R4":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("lWcZ"),a=e("szCL"),n=e("xRi5");var c=function(t){e("s4rh")},r=Object(n.a)(s.a,a.a,a.b,!1,c,null,null);i.default=r.exports},"5l70":function(t,i,e){"use strict";i.a={name:"LoadingArticle",props:["loading"]}},HxWs:function(t,i,e){t.exports={default:e("Q17y"),__esModule:!0}},Q17y:function(t,i,e){var s=e("zKeE"),a=s.JSON||(s.JSON={stringify:JSON.stringify});t.exports=function(t){return a.stringify.apply(a,arguments)}},V8V8:function(t,i,e){"use strict";e.d(i,"a",function(){return s}),e.d(i,"b",function(){return a});var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.loading?e("ul",{staticClass:"l"},t._l([1],function(i){return e("li",{key:i},[e("div",{staticClass:"a-img"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"assets/icons/overlay.png",expression:"'assets/icons/overlay.png'"}],staticClass:"dummy"})]),t._v(" "),e("div",{staticClass:"d-title"}),t._v(" "),e("div",{staticClass:"d-title"}),t._v(" "),t._m(0,!0),t._v(" "),t._m(1,!0)])})):t._e()},a=[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"d-wrap"},[i("div",{staticClass:"d-author"}),this._v(" "),i("div",{staticClass:"d-i"}),this._v(" "),i("div",{staticClass:"d-pub"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"c"},[i("div",{staticClass:"d-text"}),this._v(" "),i("div",{staticClass:"d-text"}),this._v(" "),i("div",{staticClass:"d-text"}),this._v(" "),i("div",{staticClass:"d-text"}),this._v(" "),i("div",{staticClass:"d-text"})])}]},g15A:function(t,i,e){"use strict";e.d(i,"a",function(){return n}),e.d(i,"b",function(){return c});var s=e("HxWs"),a=e.n(s),n=function(t){var i=null,e=localStorage.getItem("WWWID_"+t);try{if(i=JSON.parse(e))i=(new Date).getDate()!==new Date(i.created).getDate()?null:i.data}catch(t){}return i},c=function(t,i){var e={created:(new Date).getTime(),data:i},s=a()(e);localStorage.setItem("WWWID_"+t,s)}},lWcZ:function(t,i,e){"use strict";var s=e("g15A"),a=e("nOEZ");i.a={name:"Home",components:{LoadingArticle:a.a},data:function(){return{loading:!0,articles:[]}},mounted:function(){this.fetchArtciles()},methods:{fetchArtciles:function(){var t=this;this.loading=!0;var i=Object(s.a)("articles");i?(this.articles=i,this.loading=!1):fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid").then(function(t){return t.json()}).then(function(i){var e=/<p>.*.<\/p>\n</g;t.articles=i.items.map(function(t){var i=t.content.match(e);t.contentView=i[0].slice(0,-1);var s=t.link.split("/");return t.slug=s[s.length-1],t}),Object(s.b)("articles",t.articles),t.loading=!1})},seeDetail:function(t){var i=this.articles.filter(function(i){return i.slug===t});i.length>0&&(Object(s.b)("article",i[0]),this.$router.push("/post/"+i[0].slug))}}}},mhSU:function(t,i){},nOEZ:function(t,i,e){"use strict";var s=e("5l70"),a=e("V8V8"),n=e("xRi5");var c=function(t){e("mhSU")},r=Object(n.a)(s.a,a.a,a.b,!1,c,null,null);i.a=r.exports},s4rh:function(t,i){},szCL:function(t,i,e){"use strict";e.d(i,"a",function(){return s}),e.d(i,"b",function(){return a});var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"content"},[e("LoadingArticle",{attrs:{loading:t.loading}}),t._v(" "),t.loading?t._e():e("ul",t._l(t.articles,function(i){return e("li",{key:i.guid,on:{click:function(e){t.seeDetail(i.slug)}}},[e("div",{staticClass:"a-img"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.thumbnail,expression:"article.thumbnail"}],attrs:{alt:i.title}})]),t._v(" "),e("div",{staticClass:"a-title c"},[t._v(t._s(i.title))]),t._v(" "),e("div",{staticClass:"c a-wrap"},[e("span",{staticClass:"a-author"},[t._v(t._s(i.author))]),t._v(" "),e("span",{staticClass:"a-pub"},[t._v(t._s(i.pubDate))])]),t._v(" "),e("div",{staticClass:"a-content c",domProps:{innerHTML:t._s(i.contentView)}})])}))],1)},a=[]},zKeE:function(t,i){var e=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=e)}});
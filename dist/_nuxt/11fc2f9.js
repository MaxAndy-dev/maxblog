(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{259:function(t,e,n){var content=n(264);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("7ffce52e",content,!0,{sourceMap:!1})},263:function(t,e,n){"use strict";var r=n(259);n.n(r).a},264:function(t,e,n){(e=n(43)(!1)).push([t.i,"h2[data-v-3fd03cc7]{color:#63b3ed}p[data-v-3fd03cc7]{color:#000}",""]),t.exports=e},280:function(t,e,n){"use strict";n.r(e);n(24);var r=n(4),c=n(278),o={filters:{formatDate:function(){return Object(c.a)(new Date,"MM/dd/yyyy")}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("blog").fetch();case 3:return r=e.sent,e.abrupt("return",{articles:r});case 5:case"end":return e.stop()}}),e)})))()}},l=(n(263),n(21)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"text-gray-700 body-font overflow-hidden"},[n("div",{staticClass:"container px-5 py-24 mx-auto"},t._l(t.articles,(function(article){return n("div",{key:article.id,staticClass:"-my-8"},[n("div",{staticClass:"py-8 flex flex-wrap md:flex-no-wrap"},[n("div",{staticClass:"md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"},[n("span",{staticClass:"tracking-widest font-medium title-font bg-indigo-200 text-gray-900"},[t._v("Dat Soti")]),t._v(" "),n("span",{staticClass:"mt-1 text-gray-500 text-sm"},[t._v(t._s(t._f("formatDate")(article.createdAt)))])]),t._v(" "),n("div",{staticClass:"md:flex-grow"},[n("h2",{staticClass:"text-2xl font-medium text-gray-900 title-font mb-2"},[t._v(t._s(article.title))]),t._v(" "),n("p",{staticClass:"leading-relaxed"},[t._v(" "+t._s(article.description))]),t._v(" "),n("nuxt-link",{staticClass:"text-teal-500 inline-flex items-center mt-4",attrs:{to:"/"+article.slug+"/"}},[t._v("Li plis\n            "),n("svg",{staticClass:"w-4 h-4 ml-2",attrs:{viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[n("path",{attrs:{d:"M5 12h14"}}),t._v(" "),n("path",{attrs:{d:"M12 5l7 7-7 7"}})])])],1)])])})),0)])])}),[],!1,null,"3fd03cc7",null);e.default=component.exports}}]);
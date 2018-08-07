webpackJsonp([1],{"+LBu":function(s,t,n){(s.exports=n("FZ+f")(!1)).push([s.i,".header[data-v-1bb0c6c4]{padding:15px 0 0}span.date[data-v-1bb0c6c4]{font-size:14px;line-height:30px;font-weight:500;color:#8c8c8c}h2[data-v-1bb0c6c4]{margin-bottom:0!important}.divider[data-v-1bb0c6c4]{margin-top:0!important}.custom-divider[data-v-1bb0c6c4]{margin:50px 0 70px!important}",""])},"0Cjl":function(s,t,n){var a=n("McC+");"string"==typeof a&&(a=[[s.i,a,""]]),a.locals&&(s.exports=a.locals);n("rjj0")("9f49f664",a,!1,{sourceMap:!1})},"4CTp":function(s,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("o2na"),i=n("S1RD"),e=!1;var o=function(s){e||n("0Cjl")},l=n("VU/8")(a.a,i.a,!1,o,"data-v-727bf0c6",null);l.options.__file="pages/index/post/_MD.vue",t.default=l.exports},"77v1":function(s,t){s.exports='<section><hr>\n<h2>author: Cade Lee\ntitle: 블로그 작업일지\nsubtitle: start-blog\ncategory: LOG\ndate: 2018/08/01</h2>\n<p>///\n처음 개발 블로그를 시작하자고 마음먹었던적은 2016년 말쯤이고, 당시에 웹서치를 해본 결과 <a href="https://hexo.io">hexo</a>라는 프레임워크를 사용하는게 적합하다 판단, 해당 프레임워크를 이용하여 블로그를 개발했었다. 그렇게 2017년초에 내 블로그가 생겼고, 포스팅을 두개쯤 하고 바쁘다는 핑계로 블로그를 등한시했다.\n항상 마음 한구석에 블로그를 꼭 다시하리라는 생각만하다가 이제 더 이상 늦출순 없다는 생각에 블로그를 다시 시작했다.\n///</p>\n<p>그렇게 다시 시작할려고 기존 소스를 살펴보는데 대강의 플로우정도는 머릿속에 남아있었지만 빌드 명령어나 기타 명령어가 생각나질 않았고, 다시 사이트의 문서나 웹서치를 통해서 들여다보면 금방 다시 하겠지만 차라리 이 기회에 내가 익혔던 기술을 활용해서 블로그를 개발하자라는 생각으로 다시 블로그를 개발했다. 이 포스팅은 블로그를 다시 개발하면서 겪었던 이슈 및 해결방안, 그리고 앞으로의 더 개발하고자 하는 블로그내역까지 기록으로 남기고자한다.</p>\n<h2>1. 블로그 개발 언어 고민</h2>\n<p>현재 블로그는 jekyll, hexo 등등 좋은 프레임워크가 많이 있는 상태다. 이 프레임워크를 활용하여 개발한다면 짧은시간안에 훌륭한 퍼포먼스를 내며 블로그를 개발할수가 있다. 하지만 나는 개인적으로 공부했었고, 실제 프로젝트에도 활용했었던 <a href="https://vuejs.org">Vue</a>를 활용하고자 했다. (무엇보다도 Vue를 활용해서 개발하면서 프론트엔드에 대한 신세계를 맛보았고, 재미가 있었다.)\n디자인적으로도 <a href="https://getbootstrap.com/">Bootstrap</a>이나 <a href="https://semantic-ui.com/">SemanticUI</a> 등 훌륭한 프레임워크가 많았고 몇가지 블로그 템플릿들을 살펴보면서 내가 만들고자하는 방향에 부합하는 디자인이 SemanticUI 였기에 Vue + SemanticUI 조합으로 개발을 시작했다.</p>\n<h2>2. 이슈사항</h2>\n<h4>포스팅은 어떤 방식으로 하는가?</h4>\n<ul>\n<li>많은 블로그 프레임워크들이 markdown을 활용하고 있고, 다양한 활용방향을 갖고있는 markdown을 이용한 포스팅을 하고자 마음먹었다.</li>\n</ul>\n<h4>markdown 파일을 어떻게 보여줄것인가?</h4>\n<ul>\n<li>\n<p>이 부분이 가장 큰 고민이였다. 단순하게 markdown을 html화 시켜서 보여주는 문제는 어렵지 않았으나(이미 해당 라이브러리들이 많이 있다) 문제는 여러개의 포스팅을 보여줘야하는 메인페이지 혹은 기타페이지에 여러개의 markdown 파일들을 어떻게 보여줄지에 있었다.\n몇가지 방안을 고민해본 결과 2가지 방법이 있었다. 나중을 위해서라면 두번째 방법이 훨씬 편하기때문에 두번째 방법을 택하면 좋겠지만 급하게 개발해야하거나 혹은 수동으로 해도 전혀 불편할거 같지 않다면 첫번째 방법을 적용해도 된다. 필자는 두번째 방법을 적용했다.</p>\n<ol>\n<li>js 혹은 json 형태의 파일로 markdown 포스팅의 핵심부분들을 묶어놓은 파일을 수작업으로 제작. (하드코딩)</li>\n<li>번들러로 묶기전(build 전) nodejs로 markdown 파일들을 읽어들여서 js 혹은 json으로 추출하는 프로그램 개발.</li>\n</ol>\n</li>\n</ul>\n<h2></h2>\n<ul>\n<li>\n<p>아래는 그렇게 추출된 데이터 묶음의 예시다.</p>\n<pre><code class="language-json">[\n  {\n      <span class="hljs-attr">"title"</span>: <span class="hljs-string">"Test2"</span>,       // 제목\n      <span class="hljs-attr">"subtitle"</span>: <span class="hljs-string">"test2"</span>,    // markdown filename\n      <span class="hljs-attr">"preview"</span>: <span class="hljs-string">"내용1"</span>,      // 내용중 일부만 추출하여 preview로 뽑음\n      <span class="hljs-attr">"author"</span>: <span class="hljs-string">"Cade Lee"</span>,   // 작성자\n      <span class="hljs-attr">"category"</span>: <span class="hljs-string">"LOG"</span>,      // 글에대한 카테고리\n      <span class="hljs-attr">"date"</span>: <span class="hljs-string">"2018/09/01"</span>    // 날짜\n  },\n  {\n      <span class="hljs-attr">"title"</span>: <span class="hljs-string">"블로그 작업일지"</span>,\n      <span class="hljs-attr">"subtitle"</span>: <span class="hljs-string">"start-blog"</span>,\n      <span class="hljs-attr">"preview"</span>: <span class="hljs-string">"내용2"</span>,\n      <span class="hljs-attr">"author"</span>: <span class="hljs-string">"Cade Lee"</span>,\n      <span class="hljs-attr">"category"</span>: <span class="hljs-string">"JAVA"</span>,\n      <span class="hljs-attr">"date"</span>: <span class="hljs-string">"2018/08/01"</span>\n  },\n]\n</code></pre>\n</li>\n</ul>\n<h2>3. 개발시작</h2>\n<p>2가지 이슈사항에 대한 고민을 마치고, 바로 개발에 착수했다. 간단히 워크플로우를 소개하면,</p>\n<ol>\n<li><a href="https://cli.vuejs.org/">vue-cli</a>를 이용하여 webpack이 포함된 템플릿을 내려받는다. (다양한 옵션이 있지만 개인 기호에 맞게끔 설정한다)</li>\n<li>필요한 라이브러리 혹은 프레임워크를 npm, yarn을 이용하여 받아서 적용하거나 직접 내려받은 파일 혹은 cdn을 이용하여 설정</li>\n<li>전체적인 페이지를 가늠하고, 레이아웃중 공통영역에 대한 컴포넌트화 진행.</li>\n<li>공통영역을 제외한 각 페이지의 상세에 대한 작업 진행.</li>\n</ol>\n<h3></h3>\n<p>위와 같은 순서로 작업을 진행했고, 작업은 순조롭게 진행됐다.<br>\n그렇게 완성된 작업결과물을 github pages에 반영하여 확인하니 메인페이지가 잘 적용된게 보였다!<br>\n문제는 메인페이지만 잘 보이고 기타 페이지들은 404 not found..?</p>\n<p>그제서야 아차 싶었다. 기존에 이런 방식으로 개발하고나서 실제 반영을 할때는 사용하고있는 웹서버(nginx, apache, iis...)에 대체 경로를 추가하는 설정을 해줬었는데 github pages는 웹서버 설정이 불가능하다. 그렇기에 기존 프레임워크들은 빌드시에 모든 페이지가 정적페이지(html)로 생성되어 경로에 맞는 파일들을 불러오게 되어있다.</p>\n<p>분명 다른 해결방법이 있을거라 생각했기에 다른 방법을 찾아보았다. 그 결과 나온게 <a href="https://nuxtjs.org/guide">Nuxt.js</a>다. vue를 기반으로 한 프레임워크인데 해당 프레임워크가 정적 페이지 생성을 위한 기능을 제공하고있다. 기존 프로젝트를 Nuxt로 마이그레이션(작은 의미의 마이그레이션)을 문서를 참고하면서 작업한 결과 생각보다 그렇게 오래 걸리지 않고 작업을 끝마쳤다. (기존 컴포넌트나 라이브러리를 수월하게 재사용했다.)</p>\n<p>이 작업에 있어서 몇가지 핵심포인트들에 대한 소개도 간략히 하고자 한다.</p>\n<ul>\n<li><strong>완성된 결과물의 모든 route를 nuxt.config.js에 설정해줘야 모든 정적페이지가 생성된다.</strong><br>\n무슨 말인가 하면, 예를들어 2개의 포스팅이 있다. 하나의 포스팅은 cadelee.github.io/post/1 이라는 경로 그리고 또 하나는 cadelee.github.io/post/2 이런 경로로 하고자 할때 nuxt.config.js의 generate 옵션의 routes에 해당 경로가 배열형태로 주소가 들어가 있어야 generate 빌드시에 해당 경로가 정적페이지로 생성된다.</li>\n</ul>\n<h2></h2>\n<ul>\n<li><strong>완성된 빌드에 대한 결과물을 github pages에 반영하면 아무것도 안 보인다?</strong><br>\n결과물 반영 후 딱 열었는데 아무것도 안보인다..? 콘솔을 찍어보니 분명 내가 올린 파일들이 해당 경로에 존재함에도 불구하고 찾질 못한다. 해당 문제는 _(underscore)가 앞에 붙은채로 설정된 경로를 github pages는 무시하게끔 되어있다. (nuxt 기본 옵션일 경우에는 _nuxt라는 폴더명밑으로 파일들이 생성된다.) 이 경우 root 경로에 <a href="https://github.com/zeit/next.js/wiki/Deploying-a-Next.js-app-into-GitHub-Pages">.nojekyll</a> 이라는 파일을 생성해서 올려주면 _(underscore)도 인식한다.</li>\n</ul>\n<h2></h2>\n<ul>\n<li>\n<p><strong>라이브러리나 혹은 자체제작한 js 사용시 window/document를 찾을수 없다고 나오는 오류</strong><br>\n해당 오류는 서버측 랜더링이 발생할 때 실제로 window, document는 존재하지 않는 상황에서 구문이 실행되기에 발생하는 오류다.<br>\n실제로 처리할 구문을 아래와 같이 if문 안으로 감싸주면 더 이상 에러가 나지 않는다.</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">if</span> (process.client) {\n  <span class="hljs-comment">// 처리할 요청 구문</span>\n}\n</code></pre>\n</li>\n</ul>\n<h2>4. 앞으로 진행방향</h2>\n<ul>\n<li>mobile 디자인 작업</li>\n<li>about 부분에 대한 내용 보강</li>\n<li>페이지별 세부 디자인 보강</li>\n<li>전체적인 성능 향상</li>\n</ul>\n<h2>마치며</h2>\n<p>처음에 만만하게 보고 진행했다가 터져나오는 여러가지 각종 이슈들때문에 시간이 좀 지체되긴 했지만, 어쨋든 결과물은 나와서 다행이다.\n더 많은 부분을 적고자 했는데 잘 기억이 나질 않기에 크리티컬한 부분만 적은게 좀 아쉽긴 하지만, 앞으로의 진행방향을 해당 포스팅에 업데이트 하면서 생각나는 부분들 또한 보강할려고 한다. 끝!</p>\n</section>\n'},Hwj0:function(s,t,n){var a=n("+LBu");"string"==typeof a&&(a=[[s.i,a,""]]),a.locals&&(s.exports=a.locals);n("rjj0")("2c3ff06c",a,!1,{sourceMap:!1})},"McC+":function(s,t,n){(s.exports=n("FZ+f")(!1)).push([s.i,"",""])},S1RD:function(s,t,n){"use strict";var a=function(){var s=this.$createElement;return(this._self._c||s)("Post")};a._withStripped=!0;var i={render:a,staticRenderFns:[]};t.a=i},Wsbk:function(s,t,n){"use strict";var a=n("wSBy"),i=n("kKss"),e=!1;var o=function(s){e||n("Hwj0")},l=n("VU/8")(a.a,i.a,!1,o,"data-v-1bb0c6c4",null);l.options.__file="components/post/index.vue",t.a=l.exports},dFKr:function(s,t,n){var a={"./start-blog.md":"77v1"};function i(s){return n(e(s))}function e(s){var t=a[s];if(!(t+1))throw new Error("Cannot find module '"+s+"'.");return t}i.keys=function(){return Object.keys(a)},i.resolve=e,s.exports=i,i.id="dFKr"},kKss:function(s,t,n){"use strict";var a=function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"twelve wide column page-body"},[n("div",{staticClass:"header"},[n("h2",{staticClass:"ui header"},[n("label",{staticClass:"ui label",class:[s.lableColor(this.viewPostCat)]},[s._v("\n        "+s._s(this.viewPostCat)+"\n      ")]),s._v("\n      "+s._s(this.viewPostTitle)+"\n    ")]),n("div",{staticClass:"meta"},[n("span",{staticClass:"date"},[s._v(s._s(s._f("moment")([this.viewPostDate,"YYYY/MM/DD"],"MMMM DD, YYYY"))+" by "+s._s(this.viewPostAuthor))])]),n("div",{staticClass:"ui section divider"})]),n("div",{staticClass:"content",domProps:{innerHTML:s._s(s.viewPost)}}),n("div",{staticClass:"ui section divider custom-divider"}),n("div",{attrs:{id:"disqus_thread"}})])};a._withStripped=!0;var i={render:a,staticRenderFns:[]};t.a=i},o2na:function(s,t,n){"use strict";var a=n("Wsbk");t.a={name:"markdownPost",components:{Post:a.a},created:function(){}}},wSBy:function(s,t,n){"use strict";t.a={name:"Post",head:{script:[{src:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"}]},data:function(){return{viewPost:"",viewPostName:"",viewPostTitle:"",viewPostDate:"",viewPostAuthor:"",viewPostCat:""}},methods:{lableColor:function(s){return this.$common.findLabel(this.$const,s)}},created:function(){this.$disqus.initConfig(window,this.$route.fullPath,this.$route.path),this.$disqus.initDisqus(document),hljs.initHighlightingOnLoad(),this.viewPostName=this.$route.params.MD;var s=this.$common.customMdParser(n("dFKr")("./"+this.viewPostName+".md"));this.viewPost=s.content,this.viewPostTitle=s.title,this.viewPostDate=s.date,this.viewPostAuthor=s.author,this.viewPostCat=s.category,document.title=this.viewPostTitle+" - "+document.title},mounted:function(){this.$nprogress.done()}}}});
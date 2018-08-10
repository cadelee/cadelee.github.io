webpackJsonp([1],{"+LBu":function(s,n,a){(s.exports=a("FZ+f")(!1)).push([s.i,".header[data-v-1bb0c6c4]{padding:15px 0 0}span.date[data-v-1bb0c6c4]{font-size:14px;line-height:30px;font-weight:500;color:#8c8c8c}h2[data-v-1bb0c6c4]{margin-bottom:0!important}.divider[data-v-1bb0c6c4]{margin-top:0!important}.custom-divider[data-v-1bb0c6c4]{margin:50px 0 70px!important}",""])},"0Cjl":function(s,n,a){var t=a("McC+");"string"==typeof t&&(t=[[s.i,t,""]]),t.locals&&(s.exports=t.locals);a("rjj0")("9f49f664",t,!1,{sourceMap:!1})},"4CTp":function(s,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a("o2na"),e=a("S1RD"),i=!1;var l=function(s){i||a("0Cjl")},r=a("VU/8")(t.a,e.a,!1,l,"data-v-727bf0c6",null);r.options.__file="pages/index/post/_MD.vue",n.default=r.exports},"77v1":function(s,n){s.exports='<section><hr>\n<h2>author: Cade Lee\ntitle: 블로그 작업일지\nsubtitle: start-blog\ncategory: LOG\ndate: 2018/08/01</h2>\n<p>///\n처음 개발 블로그를 시작하자고 마음먹었던적은 2016년 말쯤이고, 당시에 웹서치를 해본 결과 <a href="https://hexo.io">hexo</a>라는 프레임워크를 사용하는게 적합하다 판단, 해당 프레임워크를 이용하여 블로그를 개발했었다. 그렇게 2017년초에 내 블로그가 생겼고, 포스팅을 두개쯤 하고 바쁘다는 핑계로 블로그를 등한시했다.\n항상 마음 한구석에 블로그를 꼭 다시하리라는 생각만하다가 이제 더 이상 늦출순 없다는 생각에 블로그를 다시 시작했다.\n///</p>\n<p>그렇게 다시 시작할려고 기존 소스를 살펴보는데 대강의 플로우정도는 머릿속에 남아있었지만 빌드 명령어나 기타 명령어가 생각나질 않았고, 다시 사이트의 문서나 웹서치를 통해서 들여다보면 금방 다시 하겠지만 차라리 이 기회에 내가 익혔던 기술을 활용해서 블로그를 개발하자라는 생각으로 다시 블로그를 개발했다. 이 포스팅은 블로그를 다시 개발하면서 겪었던 이슈 및 해결방안, 그리고 앞으로의 더 개발하고자 하는 블로그내역까지 기록으로 남기고자한다.</p>\n<h2>1. 블로그 개발 언어 고민</h2>\n<p>현재 블로그는 jekyll, hexo 등등 좋은 프레임워크가 많이 있는 상태다. 이 프레임워크를 활용하여 개발한다면 짧은시간안에 훌륭한 퍼포먼스를 내며 블로그를 개발할수가 있다. 하지만 나는 개인적으로 공부했었고, 실제 프로젝트에도 활용했었던 <a href="https://vuejs.org">Vue</a>를 활용하고자 했다. (무엇보다도 Vue를 활용해서 개발하면서 프론트엔드에 대한 신세계를 맛보았고, 재미가 있었다.)\n디자인적으로도 <a href="https://getbootstrap.com/">Bootstrap</a>이나 <a href="https://semantic-ui.com/">SemanticUI</a> 등 훌륭한 프레임워크가 많았고 몇가지 블로그 템플릿들을 살펴보면서 내가 만들고자하는 방향에 부합하는 디자인이 SemanticUI 였기에 Vue + SemanticUI 조합으로 개발을 시작했다.</p>\n<h2>2. 이슈사항</h2>\n<h4>포스팅은 어떤 방식으로 하는가?</h4>\n<ul>\n<li>많은 블로그 프레임워크들이 markdown을 활용하고 있고, 다양한 활용방향을 갖고있는 markdown을 이용한 포스팅을 하고자 마음먹었다.</li>\n</ul>\n<h4>markdown 파일을 어떻게 보여줄것인가?</h4>\n<ul>\n<li>\n<p>이 부분이 가장 큰 고민이였다. 단순하게 markdown을 html화 시켜서 보여주는 문제는 어렵지 않았으나(이미 해당 라이브러리들이 많이 있다) 문제는 여러개의 포스팅을 보여줘야하는 메인페이지 혹은 기타페이지에 여러개의 markdown 파일들을 어떻게 보여줄지에 있었다.\n몇가지 방안을 고민해본 결과 2가지 방법이 있었다. 나중을 위해서라면 두번째 방법이 훨씬 편하기때문에 두번째 방법을 택하면 좋겠지만 급하게 개발해야하거나 혹은 수동으로 해도 전혀 불편할거 같지 않다면 첫번째 방법을 적용해도 된다. 필자는 두번째 방법을 적용했다.</p>\n<ol>\n<li>js 혹은 json 형태의 파일로 markdown 포스팅의 핵심부분들을 묶어놓은 파일을 수작업으로 제작. (하드코딩)</li>\n<li>번들러로 묶기전(build 전) nodejs로 markdown 파일들을 읽어들여서 js 혹은 json으로 추출하는 프로그램 개발.</li>\n</ol>\n</li>\n</ul>\n<h2></h2>\n<ul>\n<li>\n<p>아래는 그렇게 추출된 데이터 묶음의 예시다.</p>\n<pre><code class="language-json">[\n  {\n      <span class="hljs-attr">"title"</span>: <span class="hljs-string">"Test2"</span>,       // 제목\n      <span class="hljs-attr">"subtitle"</span>: <span class="hljs-string">"test2"</span>,    // markdown filename\n      <span class="hljs-attr">"preview"</span>: <span class="hljs-string">"내용1"</span>,      // 내용중 일부만 추출하여 preview로 뽑음\n      <span class="hljs-attr">"author"</span>: <span class="hljs-string">"Cade Lee"</span>,   // 작성자\n      <span class="hljs-attr">"category"</span>: <span class="hljs-string">"LOG"</span>,      // 글에대한 카테고리\n      <span class="hljs-attr">"date"</span>: <span class="hljs-string">"2018/09/01"</span>    // 날짜\n  },\n  {\n      <span class="hljs-attr">"title"</span>: <span class="hljs-string">"블로그 작업일지"</span>,\n      <span class="hljs-attr">"subtitle"</span>: <span class="hljs-string">"start-blog"</span>,\n      <span class="hljs-attr">"preview"</span>: <span class="hljs-string">"내용2"</span>,\n      <span class="hljs-attr">"author"</span>: <span class="hljs-string">"Cade Lee"</span>,\n      <span class="hljs-attr">"category"</span>: <span class="hljs-string">"JAVA"</span>,\n      <span class="hljs-attr">"date"</span>: <span class="hljs-string">"2018/08/01"</span>\n  },\n]\n</code></pre>\n</li>\n</ul>\n<h2>3. 개발시작</h2>\n<p>2가지 이슈사항에 대한 고민을 마치고, 바로 개발에 착수했다. 간단히 워크플로우를 소개하면,</p>\n<ol>\n<li><a href="https://cli.vuejs.org/">vue-cli</a>를 이용하여 webpack이 포함된 템플릿을 내려받는다. (다양한 옵션이 있지만 개인 기호에 맞게끔 설정한다)</li>\n<li>필요한 라이브러리 혹은 프레임워크를 npm, yarn을 이용하여 받아서 적용하거나 직접 내려받은 파일 혹은 cdn을 이용하여 설정</li>\n<li>전체적인 페이지를 가늠하고, 레이아웃중 공통영역에 대한 컴포넌트화 진행.</li>\n<li>공통영역을 제외한 각 페이지의 상세에 대한 작업 진행.</li>\n</ol>\n<h3></h3>\n<p>위와 같은 순서로 작업을 진행했고, 작업은 순조롭게 진행됐다.<br>\n그렇게 완성된 작업결과물을 github pages에 반영하여 확인하니 메인페이지가 잘 적용된게 보였다!<br>\n문제는 메인페이지만 잘 보이고 기타 페이지들은 404 not found..?</p>\n<p>그제서야 아차 싶었다. 기존에 이런 방식으로 개발하고나서 실제 반영을 할때는 사용하고있는 웹서버(nginx, apache, iis...)에 대체 경로를 추가하는 설정을 해줬었는데 github pages는 웹서버 설정이 불가능하다. 그렇기에 기존 프레임워크들은 빌드시에 모든 페이지가 정적페이지(html)로 생성되어 경로에 맞는 파일들을 불러오게 되어있다.</p>\n<p>분명 다른 해결방법이 있을거라 생각했기에 다른 방법을 찾아보았다. 그 결과 나온게 <a href="https://nuxtjs.org/guide">Nuxt.js</a>다. vue를 기반으로 한 프레임워크인데 해당 프레임워크가 정적 페이지 생성을 위한 기능을 제공하고있다. 기존 프로젝트를 Nuxt로 마이그레이션(작은 의미의 마이그레이션)을 문서를 참고하면서 작업한 결과 생각보다 그렇게 오래 걸리지 않고 작업을 끝마쳤다. (기존 컴포넌트나 라이브러리를 수월하게 재사용했다.)</p>\n<p>이 작업에 있어서 몇가지 핵심포인트들에 대한 소개도 간략히 하고자 한다.</p>\n<ul>\n<li><strong>완성된 결과물의 모든 route를 nuxt.config.js에 설정해줘야 모든 정적페이지가 생성된다.</strong><br>\n무슨 말인가 하면, 예를들어 2개의 포스팅이 있다. 하나의 포스팅은 cadelee.github.io/post/1 이라는 경로 그리고 또 하나는 cadelee.github.io/post/2 이런 경로로 하고자 할때 nuxt.config.js의 generate 옵션의 routes에 해당 경로가 배열형태로 주소가 들어가 있어야 generate 빌드시에 해당 경로가 정적페이지로 생성된다.</li>\n</ul>\n<h2></h2>\n<ul>\n<li><strong>완성된 빌드에 대한 결과물을 github pages에 반영하면 아무것도 안 보인다?</strong><br>\n결과물 반영 후 딱 열었는데 아무것도 안보인다..? 콘솔을 찍어보니 분명 내가 올린 파일들이 해당 경로에 존재함에도 불구하고 찾질 못한다. 해당 문제는 _(underscore)가 앞에 붙은채로 설정된 경로를 github pages는 무시하게끔 되어있다. (nuxt 기본 옵션일 경우에는 _nuxt라는 폴더명밑으로 파일들이 생성된다.) 이 경우 root 경로에 <a href="https://github.com/zeit/next.js/wiki/Deploying-a-Next.js-app-into-GitHub-Pages">.nojekyll</a> 이라는 파일을 생성해서 올려주면 _(underscore)도 인식한다.</li>\n</ul>\n<h2></h2>\n<ul>\n<li>\n<p><strong>라이브러리나 혹은 자체제작한 js 사용시 window/document를 찾을수 없다고 나오는 오류</strong><br>\n해당 오류는 서버측 랜더링이 발생할 때 실제로 window, document는 존재하지 않는 상황에서 구문이 실행되기에 발생하는 오류다.<br>\n실제로 처리할 구문을 아래와 같이 if문 안으로 감싸주면 더 이상 에러가 나지 않는다.</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">if</span> (process.client) {\n  <span class="hljs-comment">// 처리할 요청 구문</span>\n}\n</code></pre>\n</li>\n</ul>\n<h2>4. 앞으로 진행방향</h2>\n<ul>\n<li><s>mobile 디자인 작업</s></li>\n<li>about 부분에 대한 내용 보강</li>\n<li>페이지별 세부 디자인 보강</li>\n<li>전체적인 성능 향상</li>\n</ul>\n<h2>마치며</h2>\n<p>처음에 만만하게 보고 진행했다가 터져나오는 여러가지 각종 이슈들때문에 시간이 좀 지체되긴 했지만, 어쨋든 결과물은 나와서 다행이다.\n더 많은 부분을 적고자 했는데 잘 기억이 나질 않기에 크리티컬한 부분만 적은게 좀 아쉽긴 하지만, 앞으로의 진행방향을 해당 포스팅에 업데이트 하면서 생각나는 부분들 또한 보강할려고 한다. 끝!</p>\n</section>\n'},Hwj0:function(s,n,a){var t=a("+LBu");"string"==typeof t&&(t=[[s.i,t,""]]),t.locals&&(s.exports=t.locals);a("rjj0")("2c3ff06c",t,!1,{sourceMap:!1})},"McC+":function(s,n,a){(s.exports=a("FZ+f")(!1)).push([s.i,"",""])},S1RD:function(s,n,a){"use strict";var t=function(){var s=this.$createElement;return(this._self._c||s)("Post")};t._withStripped=!0;var e={render:t,staticRenderFns:[]};n.a=e},Wsbk:function(s,n,a){"use strict";var t=a("wSBy"),e=a("kKss"),i=!1;var l=function(s){i||a("Hwj0")},r=a("VU/8")(t.a,e.a,!1,l,"data-v-1bb0c6c4",null);r.options.__file="components/post/index.vue",n.a=r.exports},"XkM/":function(s,n){s.exports='<section><hr>\n<h2>author: Cade Lee\ntitle: 자주 사용하는 도커기능 정리\nsubtitle: frequently-used-docker-features\ncategory: DOCKER\ndate: 2018/08/08</h2>\n<p>///\n<a href="https://www.docker.com/">Docker</a>는 컨테이너 기반 가상화 도구이다. 요즘의 Docker는 테스트를 위해서나 실제 운영할 서비스 등 어느곳에서나 활용되며 Microservice, Devops를 위한 최적의 기술로 각광받고 있다.\n그만큼 Docker에 대한 훌륭하고 좋은 정보들이 많기에 기본적인 개념에 대한 부분은 생략하고 Docker를 이용할때 개인적으로 자주 이용하는 커맨드와 그 개념에 대해서 몇가지 정리해보고자 포스팅을 작성했다.\n///</p>\n<h2>Network</h2>\n<p>처음 Docker를 사용할때 network의 존재를 모르고 같은 서버에 존재하는 다른 컨테이너를 연결할려고 할때 nginx proxy를 설정하여 A 컨테이너, B 컨테이너를 서로 웹서버를 통해서 바라볼 수 있게 했었다. 이렇게 하면 안되나? 아니다, 해도 된다. 서로 다른 서버에 존재하는 컨테이너라면 위와같은 방식을 통해서 할수도 있을것이다. 다만 같은 서버라면 얘기가 달라진다. 도메인을 통해서 호출하는 방식은 DNS를 거쳐 아이피를 얻어온 후 요청을 하게된다. 같은 네트워크로 묶어준다면 DNS에 질의할 필요없이 다이렉트로 해당 컨테이너에 연결이 가능하다. 전자와 후자중 더 빠른건 후자다. 빠르고 간편한데 안쓸 이유가 없다.</p>\n<p>간단히 도식화한 그림이다. 아래중 첫번째가 웹서버를 통한 컨테이너 접근이고 두번째는 같은 네트워크를 이용해서 다이렉트로 서로를 바라볼 수 있게 만든 방식이다.</p>\n<p><img src="/images/docker-network-explain(1).png" alt="docker-network-explain"></p>\n<p>이제 같은 네트워크로 묶는 방법을 설명하고자 한다.<br>\n먼저 서로를 같은 영역에 둘 네트워크를 생성하고, 해당 네트워크가 제대로 생성되었는지 확인한다.</p>\n<pre><code class="language-bash">docker network create abcd //network 생성 명령어 abcd가 네트워크 명칭이다.\n8422a4b89f4c14359cf1ed7e1f64e8992e55aa6580c924d199e165d7d83be6a4 // 생성된 결과 메시지\ndocker network ls // 네트워크 목록 확인\nNETWORK ID          NAME                          DRIVER              SCOPE\n8422a4b89f4c        abcd                          bridge              <span class="hljs-built_in">local</span>\n</code></pre>\n<p> <br>\n새로운 컨테이너를 생성할때 네트워크를 추가해주면 된다.</p>\n<pre><code class="language-bash">docker run -d --name a-container --network=abcd <span class="hljs-variable">${image}</span>\n</code></pre>\n<p> <br>\n-d: background로 동작함. 없이 실행하면 보고있는 커맨드 화면에서 직접 실행되고 종료시 컨테이너도 종료됨.<br>\n--name: 컨테이너 이름지정<br>\n--network: 네트워크 지정(아까 생성한 abcd 네트워크를 입력해줬다.)<br>\n${image}: 구동할 컨테이너의 이미지명</p>\n<p>이렇게 실행시킨 컨테이너가 abcd 네트워크에서 잘 동작하고 있는지 확인할려면</p>\n<pre><code class="language-bash">docker network inspect abcd\n[\n    {\n        <span class="hljs-string">"Name"</span>: <span class="hljs-string">"abcd"</span>,\n        <span class="hljs-string">"Id"</span>: <span class="hljs-string">"8422a4b89f4c14359cf1ed7e1f64e8992e55aa6580c924d199e165d7d83be6a4"</span>,\n        <span class="hljs-string">"Created"</span>: <span class="hljs-string">"2018-08-08T08:42:03.294322358Z"</span>,\n        <span class="hljs-string">"Scope"</span>: <span class="hljs-string">"local"</span>,\n        <span class="hljs-string">"Driver"</span>: <span class="hljs-string">"bridge"</span>,\n        <span class="hljs-string">"EnableIPv6"</span>: <span class="hljs-literal">false</span>,\n        <span class="hljs-string">"IPAM"</span>: {\n            <span class="hljs-string">"Driver"</span>: <span class="hljs-string">"default"</span>,\n            <span class="hljs-string">"Options"</span>: {},\n            <span class="hljs-string">"Config"</span>: [\n                {\n                    <span class="hljs-string">"Subnet"</span>: <span class="hljs-string">"172.20.0.0/16"</span>,\n                    <span class="hljs-string">"Gateway"</span>: <span class="hljs-string">"172.20.0.1"</span>\n                }\n            ]\n        },\n        <span class="hljs-string">"Internal"</span>: <span class="hljs-literal">false</span>,\n        <span class="hljs-string">"Attachable"</span>: <span class="hljs-literal">false</span>,\n        <span class="hljs-string">"Ingress"</span>: <span class="hljs-literal">false</span>,\n        <span class="hljs-string">"ConfigFrom"</span>: {\n            <span class="hljs-string">"Network"</span>: <span class="hljs-string">""</span>\n        },\n        <span class="hljs-string">"ConfigOnly"</span>: <span class="hljs-literal">false</span>,\n        <span class="hljs-string">"Containers"</span>: {\n            <span class="hljs-string">"7b70c0efc9586da76958d19e96aff04ca03c0f1fc9f148528bc4ada106dcfdb8"</span>: {\n                <span class="hljs-string">"Name"</span>: <span class="hljs-string">"a-container"</span>,\n                <span class="hljs-string">"EndpointID"</span>: <span class="hljs-string">"771f92ceda2513aea20d3c8bcf9b2f2c7d3d53e46cc5940f898535002fe0537b"</span>,\n                <span class="hljs-string">"MacAddress"</span>: <span class="hljs-string">"02:42:ac:14:00:02"</span>,\n                <span class="hljs-string">"IPv4Address"</span>: <span class="hljs-string">"172.20.0.2/16"</span>,\n                <span class="hljs-string">"IPv6Address"</span>: <span class="hljs-string">""</span>\n            }\n        },\n        <span class="hljs-string">"Options"</span>: {},\n        <span class="hljs-string">"Labels"</span>: {}\n    }\n]\n</code></pre>\n<p> <br>\nContainers 부분에 내가 지정한 컨테이너명이 배열로 들어가있는걸 확인할 수 있다.<br>\n마찬가지로 b-container도 동일한 방법으로 구동시키고 동일한 명령어로 확인해본다.<br>\n설정이 완료됐다면 이제 서로의 컨테이너로 다이렉트로 접근이 가능하다. 어떻게?!<br>\n연결하고자 하는 컨테이너에서 {컨테이너명}:port로 접근을 시도하거나 컨테이너 내부에서도 테스트가 가능하다.</p>\n<p>아래와 같은 명령어를 통해서 컨테이너 안으로 접근한 다음 curl이나 ping 명령어를 통해서 b-container를 확인해주면 된다.</p>\n<pre><code class="language-bash">docker <span class="hljs-built_in">exec</span> -it a-container bin/bash\nping b-container\n64 bytes from 172.20.0.3: icmp_seq=0 ttl=255 time=0.074 ms\n64 bytes from 172.20.0.3: icmp_seq=1 ttl=255 time=0.067 ms\n64 bytes from 172.20.0.3: icmp_seq=2 ttl=255 time=0.072 ms\n64 bytes from 172.20.0.3: icmp_seq=3 ttl=255 time=0.075 ms\n</code></pre>\n<p> <br>\n##Storage\n저장소 위치를 설정하는 내용이다. Docker를 내가 원하는 파일시스템에 위치시킨다거나 혹은 Container의 일부 설정을 내가 지정한 곳의 파일로 맵핑시킨다던지 등 원하는 목적에 맞게끔 설정하는 다양한 방법들이 존재한다.</p>\n<p>####계속 업데이트 될 예정입니다.</p>\n</section>\n'},dFKr:function(s,n,a){var t={"./frequently-used-docker-features.md":"XkM/","./start-blog.md":"77v1"};function e(s){return a(i(s))}function i(s){var n=t[s];if(!(n+1))throw new Error("Cannot find module '"+s+"'.");return n}e.keys=function(){return Object.keys(t)},e.resolve=i,s.exports=e,e.id="dFKr"},kKss:function(s,n,a){"use strict";var t=function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("div",{staticClass:"twelve wide column page-body",attrs:{id:"wide"}},[a("div",{staticClass:"header"},[a("h2",{staticClass:"ui header"},[a("label",{staticClass:"ui label",class:[s.lableColor(this.viewPostCat)]},[s._v("\n        "+s._s(this.viewPostCat)+"\n      ")]),s._v("\n      "+s._s(this.viewPostTitle)+"\n    ")]),a("div",{staticClass:"meta"},[a("span",{staticClass:"date"},[s._v(s._s(s._f("moment")([this.viewPostDate,"YYYY/MM/DD"],"MMMM DD, YYYY"))+" by "+s._s(this.viewPostAuthor))])]),a("div",{staticClass:"ui section divider"})]),a("div",{staticClass:"content post-content",domProps:{innerHTML:s._s(s.viewPost)}}),a("div",{staticClass:"ui section divider custom-divider"}),a("div",{attrs:{id:"disqus_thread"}})])};t._withStripped=!0;var e={render:t,staticRenderFns:[]};n.a=e},o2na:function(s,n,a){"use strict";var t=a("Wsbk");n.a={name:"markdownPost",components:{Post:t.a},created:function(){}}},wSBy:function(s,n,a){"use strict";n.a={name:"Post",head:function(){return{title:this.title,script:[{src:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"}],meta:[{hid:"author",name:"author",content:this.viewPostAuthor},{hid:"description",name:"description",content:this.viewPostTitle},{hid:"keywords",name:"keywords",content:this.viewPostTitle},{hid:"og:title",name:"og:title",content:this.title},{hid:"og:url",name:"og:url",content:"https://cadelee.github.io/post/"+this.viewPostName},{hid:"og:description",name:"og:description",content:this.viewPostTitle}]}},data:function(){return{title:"",viewPost:"",viewPostName:"",viewPostTitle:"",viewPostDate:"",viewPostAuthor:"",viewPostCat:""}},computed:{computeTitle:function(){return"a"}},methods:{lableColor:function(s){return this.$common.findLabel(this.$const,s)}},created:function(){this.$disqus.initConfig(window,this.$route.fullPath,this.$route.path),this.$disqus.initDisqus(document),hljs.initHighlightingOnLoad(),this.viewPostName=this.$route.params.MD;var s=this.$common.customMdParser(a("dFKr")("./"+this.viewPostName+".md"));this.viewPost=s.content,this.viewPostTitle=s.title,this.viewPostDate=s.date,this.viewPostAuthor=s.author,this.viewPostCat=s.category,this.title=this.viewPostTitle+" - Cade Lee"},mounted:function(){this.$nprogress.done();for(var s=document.querySelectorAll(".post-content img"),n=0;n<s.length;n+=1)console.log(s[n]),s[n].style.width="100%"}}}});
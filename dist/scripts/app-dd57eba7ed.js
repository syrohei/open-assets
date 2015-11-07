(function(){angular.module("openAssets",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router","ui.bootstrap"])}).call(this),function(){angular.module("openAssets").service("webDevTec",function(){var t,e;t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"},{title:"CoffeeScript",url:"http://coffeescript.org/",description:"CoffeeScript, 'a little language that compiles into JavaScript'.",logo:"coffeescript.png"}],e=function(){return t},this.getTec=e})}.call(this),function(){angular.module("openAssets").directive("acmeNavbar",function(){var t,e;return t=function(t){var e;e=this,e.relativeDate=t(e.creationDate).fromNow()},e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0}})}.call(this),function(){angular.module("openAssets").directive("acmeMalarkey",function(){var t,e,a;return t=function(t,e){var a,n,o;o=this,a=function(){return n().then(function(){t.info("Activated Contributors View")})},n=function(){return e.getContributors(10).then(function(t){return o.contributors=t,o.contributors})},o.contributors=[],a()},a=function(t,e,a,n){var o,r;r=void 0,o=malarkey(e[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "}),e.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(t){o.type(t).pause()["delete"]()}),r=t.$watch("vm.contributors",function(){angular.forEach(n.contributors,function(t){o.type(t.login).pause()["delete"]()})}),t.$on("$destroy",function(){r()})},e={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:a,controller:t,controllerAs:"vm"}})}.call(this),function(){angular.module("openAssets").factory("githubContributor",["$log","$http",function(t,e){var a,n,o;return a="https://api.github.com/repos/Swiip/generator-gulp-angular",n=function(n){var o,r;return o=function(t){return t.data},r=function(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))},n||(n=30),e.get(a+"/contributors?per_page="+n).then(o)["catch"](r)},o={apiHost:a,getContributors:n}}])}.call(this),function(){angular.module("openAssets").controller("MainController",["$timeout","webDevTec","toastr",function(t,e,a){var n,o,r,i;i=this,n=function(){o(),t(function(){i.classAnimation="rubberBand"},4e3)},r=function(){a.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),i.classAnimation=""},o=function(){i.awesomeThings=e.getTec(),angular.forEach(i.awesomeThings,function(t){t.rank=Math.random()})},i.awesomeThings=[],i.classAnimation="",i.creationDate=1446905224426,i.showToastr=r,n()}])}.call(this),function(){angular.module("openAssets").factory("GenerateAccount",["$resource",function(t){var e;return e=t("https://api.coinprism.com/v1/account/createaddress",{},{post:{method:"POST",isArray:!1,headers:{"Content-Type":"application/json","X-Coinprism-Username":"syrohei","X-Coinprism-Password":"bca81e32a7"}}})}]).controller("GenerateController",["$scope","$timeout","webDevTec","toastr","GenerateAccount",function(t,e,a,n,o){var r,i,s,l;t.generateAccount=function(){return o.post({alias:"address label"},function(e,a){return console.log(e),t.asset_address=e.asset_address,t.bitcoin_address=e.bitcoin_address,t.private_key=e.private_key})},l=this,r=function(){i(),e(function(){l.classAnimation="rubberBand"},4e3)},s=function(){n.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),l.classAnimation=""},i=function(){l.awesomeThings=a.getTec(),angular.forEach(l.awesomeThings,function(t){t.rank=Math.random()})},l.awesomeThings=[],l.classAnimation="",l.creationDate=1446905224426,l.showToastr=s,r()}])}.call(this),function(){angular.module("openAssets").run(["$log",function(t){return t.debug("runBlock end")}])}.call(this),function(){angular.module("openAssets").config(["$stateProvider","$urlRouterProvider",function(t,e){return t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("generate",{url:"/generate",templateUrl:"app/generate/generate.html",controller:"GenerateController",controllerAs:"generate"}),e.otherwise("/")}])}.call(this),function(){angular.module("openAssets").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}.call(this),function(){angular.module("openAssets").config(["$logProvider","toastr",function(t,e){return t.debugEnabled(!0),e.options.timeOut=3e3,e.options.positionClass="toast-top-right",e.options.preventDuplicates=!0,e.options.progressBar=!0}])}.call(this),angular.module("openAssets").run(["$templateCache",function(t){t.put("app/generate/generate.html",'<div class="container"><div>Created By CoinPrismAPI</div><button type="button" class="btn btn-lg btn-success" ng-click="generateAccount()">アカウント作成</button><div><div>Asset_addresss: {{asset_address}}</div><div>Bitcoin_address: {{bitcoin_address}}</div><div>PrivateKEY: {{private_key}}</div></div></div>'),t.put("app/main/main.html",'<div class="container"><div><acme-navbar creationdate="main.creationDate"></acme-navbar></div><div class="jumbotron text-center"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><button type="button" class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</button></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{awesomeThing.url}}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li><li><a ng-href="#/generate">Generate</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>')}]);
angular.module "openAssets"
  .config ($stateProvider, $urlRouterProvider) ->
    $stateProvider
      .state "home",
        url: "/"
        templateUrl: "app/main/main.html"
        controller: "MainController"
        controllerAs: "main"

      .state "generate",
        url: "/generate"
        templateUrl: "app/generate/generate.html"
        controller: "GenerateController"
        controllerAs: "generate"

    $urlRouterProvider.otherwise '/'

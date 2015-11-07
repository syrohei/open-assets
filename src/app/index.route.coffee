angular.module "openAssets"
  .config ($stateProvider, $urlRouterProvider) ->
    $stateProvider
      .state "generate",
        url: "/"
        templateUrl: "app/generate/generate.html"
        controller: "GenerateController"
        controllerAs: "generate"
      .state "scan",
        url: "/scan"
        templateUrl: "app/scan/scan.html"
        controller: "ScanController"
        controllerAs: "scan"

    $urlRouterProvider.otherwise '/'

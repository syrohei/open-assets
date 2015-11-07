angular.module "openAssets"
  .factory 'GenerateAccount', ($resource) ->
    resource = $resource('https://api.coinprism.com/v1/account/createaddress',{},{
      post:
        method:"POST",
        isArray:false,
        headers:{'Content-Type':'application/json', 'X-Coinprism-Username':'syrohei', 'X-Coinprism-Password':'bca81e32a7'}
    })
    return resource

  .controller "GenerateController", ($scope, $timeout, webDevTec, toastr, GenerateAccount) ->

    $scope.generateAccount = ->
      GenerateAccount.post({"alias": "address label"}, (response, getResponseHeader) ->
        console.log(response)
        $scope.asset_address = response.asset_address
        $scope.bitcoin_address = response.bitcoin_address
        $scope.private_key = response.private_key
      )
    

    vm = this
    activate = ->
      getWebDevTec()
      $timeout (->
        vm.classAnimation = 'rubberBand'
        return
      ), 4000
      return

    showToastr = ->
      toastr.info 'Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'
      vm.classAnimation = ''
      return

    getWebDevTec = ->
      vm.awesomeThings = webDevTec.getTec()
      angular.forEach vm.awesomeThings, (awesomeThing) ->
        awesomeThing.rank = Math.random()
        return
      return

    vm.awesomeThings = []
    vm.classAnimation = ''
    vm.creationDate = 1446905224426
    vm.showToastr = showToastr
    activate()
    return

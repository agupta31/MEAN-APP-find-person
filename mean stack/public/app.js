angular.module("myApp",["ngRoute"])
.service("myService",function($http){
    this.findMatch=function(item){
        return $http({
              method:"post",
              url:"/matchPerson",
              data:item
        })
    }

})
.controller("appCtrl",function($scope,myService){
     $scope.item={};


     $scope.matchData=function(){
             myService.findMatch($scope.item).then(function(response){
                 console.log(response.data);
                    if(response.data.length>0)
                        $scope.result=response.data;
                        else {
                          $scope.error="person not found";
                        }

             })
     }


})

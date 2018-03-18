var app = angular.module('myApp', []);

app.controller("myCtrl", function($scope) {

	$scope.Wishlist=[];
  $scope.job={};

	$scope.job.company="Facebook";
  $scope.job.role="Network Engineer";

   $scope.AddJob=function(){
   $scope.job.do="add";
   document.getElementById('company').style.display='';
   document.getElementById('jobrole').style.display='';
   document.getElementById('jobrole-edit').style.display='none';
   document.getElementById('company-edit').style.display='none';
  
  }

    $scope.sve=function(){
      if($scope.job.do=="add"){
        $scope.Wishlist.push($scope.job);
        console.log($scope.Wishlist);
        
      }
     else{
     	
    	$scope.Wishlist[index]=$scope.job;
     	
     }
	}


$scope.update=function(item){
 $scope.job.do="edit";


$scope.job.role=item.role;
$scope.job.company=item.company;
document.getElementById('company').style.display='none';
document.getElementById('jobrole').style.display='none';
document.getElementById('jobrole-edit').style.display='block';
document.getElementById('company-edit').style.display='block';

index = $scope.Wishlist.indexOf(item);

}

});
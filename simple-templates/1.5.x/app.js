(function(){
    
var app = angular.module('app', []);

app.controller('main-controller', function ($scope) {
        
    $scope.pageTitle = null; // "Angular Simple Template";
    $scope.title = "Title of section";
    $scope.phones = [
        {'name': 'Nexus S',
         'snippet': 'Fast just got faster with Nexus S.'},
        {'name': 'Motorola XOOM™ with Wi-Fi',
         'snippet': 'The Next, Next Generation tablet.'},
        {'name': 'MOTOROLA XOOM™',
         'snippet': 'The Next, Next Generation tablet.'}
    ];
});

})();
/**
 * Created by paipeng on 15/11/15.
 */


angular.module('rsaWebApp.module', [
    'ngRoute',
    'ngResource'
    ]
)

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'rsa/rsaView.html',
            controller: 'rsaController'
        });
    }])

    .controller('rsaController', ['$scope', 'RSA', function($scope, RSA) {
        console.log("rsaController");
        $scope.rsaText = ""
        $scope.rsaKey = undefined;
        $scope.generateRSAKey = function() {
            var data = RSA.GenerateRSA(function(ret) {
                console.log(data);
                $scope.rsaKey = data;
            });
        };

        $scope.encryptRSA = function() {
            if ($scope.rsaText !== undefined && $scope.rsaText.length > 0) {
                var rsa = {};
                rsa.modulusBase16  = $scope.rsaKey.modulusBase16;
                rsa.publicKeyBase16 = $scope.rsaKey.publicExponentBase16;
                rsa.privateKeyBase16 = $scope.rsaKey.privateExponentBase16;
                rsa.text = $scope.rsaText;
                var data = RSA.EncryptRSA(rsa, function() {
                    console.log(data);
                    $scope.rsaEncodedText = data.encodedText;
                });
            }
        };

        $scope.decryptRSA = function() {
            if ($scope.rsaEncodedText !== undefined && $scope.rsaEncodedText.length > 0) {
                var rsa = {};
                rsa.modulusBase16  = $scope.rsaKey.modulusBase16;
                rsa.publicKeyBase16 = $scope.rsaKey.publicExponentBase16;
                rsa.privateKeyBase16 = $scope.rsaKey.privateExponentBase16;
                rsa.text = $scope.rsaText;
                rsa.encodedText = $scope.rsaEncodedText;

                var data = RSA.DecryptRSA(rsa, function() {
                    console.log(data);
                    $scope.rsaDecodedText = data.decodedText;
                });
            }
        }
    }]);
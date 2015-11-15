/**
 * Created by paipeng on 15/11/15.
 */


angular.module('rsaWebApp.module')

    .factory('RSA', ['$resource', function($resource) {
        return $resource("/rest/rsakeys",
            {action: "@action", text: "@text"},
            {
                GenerateRSA: { method: "GET", params: { action: "generateRSA" } },
                EncryptRSA: {
                    method: "POST",
                    params: { action: "EncryptRSA" }
                },
                DecryptRSA: { method: "POST", params: { action: "DecryptRSA" } }
            });
    }]);
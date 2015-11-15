'use strict';

angular.module('rsaWebApp.version', [
  'rsaWebApp.version.interpolate-filter',
  'rsaWebApp.version.version-directive'
])

.value('version', '0.1');

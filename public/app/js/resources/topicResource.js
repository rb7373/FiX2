angular.module('app').factory('topicResource', function($resource) {
  var topicById = $resource('/api/topics/:_id', {_id: "@id"}, {
    update: {method:'PUT', isArray:false}
  });

  return topicById;
});
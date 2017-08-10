//do all our services go in this file???

angular.module('myApp')
.service('UsersService', ['$http', function($http) {


  getUsers = function(){
    return $http.get('/api/users')
    .then(users => {
      return users.data;
    });
  }

  getUser = function(id){
    return $http.get(`/api/users/${id}`)
    .then(user => {
      return user.data;
    });
  }

  addUser = function(user){
    console.log('running addUser function');
    console.log('this is the object we are sending to POST', user);
    return $http.post('/api/users', user)
    .then(user => {
      console.log('THIS IS THE USER THAT COMES BACK ON POST', user);
      return user.data;
    })
  }

  loginUser = function(username){
    console.log('loginUser method on service running');
    return $http.get(`/api/users/login/${username}`)
    .then(user => {
      console.log('USER.DATA BACK FROM GET /:username', user.data);
      console.log('type of user', (typeof user.data));
      if (typeof user.data !== 'object'){
        return null;
      }
      return user.data;
    })

  }

  return {
    getUsers: getUsers,
    getUser: getUser,
    addUser: addUser,
    loginUser: loginUser
  }

}])
.service('TopicsService', ['$http', function($http){
  getTopics = function(){
    return $http.get('/api/topics')
    .then(topics => {
      return topics.data;
    });
  }

  getTopic = function(id){
    return $http.get(`/api/topics/${id}`)
    .then(topic => {
      return topic.data;
    });
  }

  return {
    getTopics: getTopics,
    getTopic: getTopic,
  }
}])
.service('MessagesService', ['$http', function($http){
  getMessages = function(){
    return $http.get('/api/messages')
    .then(messages => {
      return messages.data;
    });
  }

  return {
    getMessages: getMessages
  }
}]);
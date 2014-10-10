(function() {
  var DanaKeli;

  document.createElement('SECTION');

  document.createElement('HEADER');

  document.createElement('ASIDE');

  document.createElement('NAV');

  document.createElement('MENU');

  document.createElement('VIDEO');

  document.createElement('AUDIO');

  document.createElement('PICTURE');

  document.createElement('TIME');

  document.createElement('PROGRESS');

  document.createElement('ARTICLE');

  document.createElement('FOOTER');

  DanaKeli = angular.module('DanaKeli', ['duScroll']);

  DanaKeli.controller('WelcomeCtrl', [
    '$scope', '$window', function($scope, $window) {
      $scope.weddingsPhotos = ["public/images/photos/weddings/d9.jpeg", "public/images/photos/weddings/d11.jpeg", "public/images/photos/weddings/d13.jpeg", "public/images/photos/weddings/d17.jpeg", "public/images/photos/weddings/d18.jpeg", "public/images/photos/weddings/d20.jpeg", "public/images/photos/weddings/d23.jpeg", "public/images/photos/weddings/IMG_3639.jpeg", "public/images/photos/weddings/IMG_3710.jpeg", "public/images/photos/weddings/IMG_3722.jpeg", "public/images/photos/weddings/IMG_4280.jpeg", "public/images/photos/weddings/IMG_4290.jpeg", "public/images/photos/weddings/IMG_4319.jpeg", "public/images/photos/weddings/IMG_6991.jpeg", "public/images/photos/weddings/IMG_7035.jpeg", "public/images/photos/weddings/IMG_7096.jpeg", "public/images/photos/weddings/IMG_7106.jpeg", "public/images/photos/weddings/IMG_7170.jpeg", "public/images/photos/weddings/IMG_7174.jpeg", "public/images/photos/weddings/IMG_7244.jpeg", "public/images/photos/weddings/IMG_7258.jpeg", "public/images/photos/weddings/IMG_7313.jpeg", "public/images/photos/weddings/IMG_7409.jpeg"];
      $scope.personalPhotos = ["public/images/photos/personal/2L6TDJB76Wk.jpeg", "public/images/photos/personal/02630005.jpeg", "public/images/photos/personal/02710018.jpeg", "public/images/photos/personal/02710028.jpeg", "public/images/photos/personal/IMG_0667.jpeg", "public/images/photos/personal/IMG_1369.jpeg", "public/images/photos/personal/IMG_1604.jpeg", "public/images/photos/personal/IMG_1807.jpeg", "public/images/photos/personal/IMG_1821.jpeg", "public/images/photos/personal/IMG_1831.jpeg", "public/images/photos/personal/IMG_1945.jpeg", "public/images/photos/personal/IMG_2224.jpeg", "public/images/photos/personal/IMG_2287.jpeg", "public/images/photos/personal/IMG_2535.jpeg", "public/images/photos/personal/IMG_2574.jpeg", "public/images/photos/personal/IMG_2655.jpeg", "public/images/photos/personal/IMG_2689.jpeg", "public/images/photos/personal/IMG_4133.jpeg", "public/images/photos/personal/IMG_4215.jpeg", "public/images/photos/personal/IMG_4492.jpeg", "public/images/photos/personal/IMG_4787.jpeg", "public/images/photos/personal/IMG_4859.jpeg", "public/images/photos/personal/IMG_4891.jpeg", "public/images/photos/personal/IMG_4926.jpeg", "public/images/photos/personal/IMG_5740.jpeg", "public/images/photos/personal/IMG_5746.jpeg", "public/images/photos/personal/IMG_5886.jpeg", "public/images/photos/personal/IMG_8645.jpeg", "public/images/photos/personal/M8QnJ44s5RM.jpeg", "public/images/photos/personal/THZyjHe_Eiw.jpeg"];
      $scope.routes = ['welcome', 'contacts', 'weddings', 'personal'];
      $scope.setCurrentPhoto = function(gallery, photo) {
        return $scope[gallery] = photo;
      };
      $scope.isCurrentPhoto = function(gallery, photo) {
        return $scope[gallery] === photo;
      };
      $scope.getPhotoGroup = function(photo) {
        return photo.match(/(\w+)\/(\w|\.)+$/)[1];
      };
      $scope.setCurrentPhoto('weddings', $scope.weddingsPhotos[0]);
      $scope.setCurrentPhoto('personal', $scope.personalPhotos[0]);
      return $scope.mixedPhotos = $scope.weddingsPhotos.concat($scope.personalPhotos);
    }
  ]);

  DanaKeli.config([
    '$locationProvider', function($locationProvider) {
      return $locationProvider.html5Mode(true);
    }
  ]);

  DanaKeli.run([
    '$rootScope', '$location', function($rootScope, $location) {
      return $rootScope.$on('duScrollspy:becameActive', function($event, $element) {
        var hash;
        hash = $element.prop('hash');
        if (hash) {
          $location.hash(hash.substr(1)).replace();
          return $rootScope.$apply();
        }
      });
    }
  ]);

  DanaKeli.filter('shuffle', function() {
    var shuffledArr, shuffledLength;
    shuffledArr = [];
    shuffledLength = 0;
    return function(arr) {
      var i, j, o, x;
      o = arr.slice(0, arr.length);
      if (shuffledLength === arr.length) {
        return shuffledArr;
      }
      j = void 0;
      x = void 0;
      i = o.length;
      while (i) {
        j = parseInt(Math.random() * i);
        x = o[--i];
        o[i] = o[j];
        o[j] = x;
      }
      shuffledArr = o;
      shuffledLength = o.length;
      return o;
    };
  });

}).call(this);

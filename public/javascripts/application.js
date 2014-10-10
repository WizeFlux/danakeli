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
      $scope.weddingsPhotos = ["public/images/photos/weddings/d9.jpg", "public/images/photos/weddings/d11.jpg", "public/images/photos/weddings/d13.jpg", "public/images/photos/weddings/d17.jpg", "public/images/photos/weddings/d18.jpg", "public/images/photos/weddings/d20.jpg", "public/images/photos/weddings/d23.jpg", "public/images/photos/weddings/IMG_3639.jpg", "public/images/photos/weddings/IMG_3710.jpg", "public/images/photos/weddings/IMG_3722.jpg", "public/images/photos/weddings/IMG_4280.jpg", "public/images/photos/weddings/IMG_4290.jpg", "public/images/photos/weddings/IMG_4319.jpg", "public/images/photos/weddings/IMG_6991.jpg", "public/images/photos/weddings/IMG_7035.jpg", "public/images/photos/weddings/IMG_7096.jpg", "public/images/photos/weddings/IMG_7106.jpg", "public/images/photos/weddings/IMG_7170.jpg", "public/images/photos/weddings/IMG_7174.jpg", "public/images/photos/weddings/IMG_7244.jpg", "public/images/photos/weddings/IMG_7258.jpg", "public/images/photos/weddings/IMG_7313.jpg", "public/images/photos/weddings/IMG_7409.jpg"];
      $scope.personalPhotos = ["public/images/photos/personal/2L6TDJB76Wk.jpg", "public/images/photos/personal/02630005.jpg", "public/images/photos/personal/02710018.jpg", "public/images/photos/personal/02710028.jpg", "public/images/photos/personal/IMG_0667.jpg", "public/images/photos/personal/IMG_1369.jpg", "public/images/photos/personal/IMG_1604.jpg", "public/images/photos/personal/IMG_1807.jpg", "public/images/photos/personal/IMG_1821.jpg", "public/images/photos/personal/IMG_1831.jpg", "public/images/photos/personal/IMG_1945.jpg", "public/images/photos/personal/IMG_2224.jpg", "public/images/photos/personal/IMG_2287.jpg", "public/images/photos/personal/IMG_2535.jpg", "public/images/photos/personal/IMG_2574.jpg", "public/images/photos/personal/IMG_2655.jpg", "public/images/photos/personal/IMG_2689.jpg", "public/images/photos/personal/IMG_4133.jpg", "public/images/photos/personal/IMG_4215.jpg", "public/images/photos/personal/IMG_4492.jpg", "public/images/photos/personal/IMG_4787.jpg", "public/images/photos/personal/IMG_4859.jpg", "public/images/photos/personal/IMG_4891.jpg", "public/images/photos/personal/IMG_4926.jpg", "public/images/photos/personal/IMG_5740.jpg", "public/images/photos/personal/IMG_5746.jpg", "public/images/photos/personal/IMG_5886.jpg", "public/images/photos/personal/IMG_8645.jpg", "public/images/photos/personal/M8QnJ44s5RM.jpg", "public/images/photos/personal/THZyjHe_Eiw.jpg"];
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

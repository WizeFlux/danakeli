document.createElement 'SECTION'
document.createElement 'HEADER'
document.createElement 'ASIDE'
document.createElement 'NAV'
document.createElement 'MENU'
document.createElement 'VIDEO'
document.createElement 'AUDIO'
document.createElement 'PICTURE'
document.createElement 'TIME'
document.createElement 'PROGRESS'
document.createElement 'ARTICLE'
document.createElement 'FOOTER'

DanaKeli = angular.module 'DanaKeli', ['duScroll']

DanaKeli.controller 'WelcomeCtrl', ['$scope', ($scope) ->
  $scope.weddingsPhotos = [
    "images/photos/weddings/d9.jpg"
    "images/photos/weddings/d11.jpg"
    "images/photos/weddings/d13.jpg"
    "images/photos/weddings/d17.jpg"
    "images/photos/weddings/d18.jpg"
    "images/photos/weddings/d20.jpg"
    "images/photos/weddings/d23.jpg"
    "images/photos/weddings/IMG_3639.jpg"
    "images/photos/weddings/IMG_3710.jpg"
    "images/photos/weddings/IMG_3722.jpg"
    "images/photos/weddings/IMG_4280.jpg"
    "images/photos/weddings/IMG_4290.jpg"
    "images/photos/weddings/IMG_4319.jpg"
    "images/photos/weddings/IMG_6991.jpg"
    "images/photos/weddings/IMG_7035.jpg"
    "images/photos/weddings/IMG_7096.jpg"
    "images/photos/weddings/IMG_7106.jpg"
    "images/photos/weddings/IMG_7170.jpg"
    "images/photos/weddings/IMG_7174.jpg"
    "images/photos/weddings/IMG_7244.jpg"
    "images/photos/weddings/IMG_7258.jpg"
    "images/photos/weddings/IMG_7313.jpg"
    "images/photos/weddings/IMG_7409.jpg"
  ]
  
  $scope.personalPhotos = [
    "images/photos/personal/2L6TDJB76Wk.jpg"
    "images/photos/personal/02630005.jpg"
    "images/photos/personal/02710018.jpg"
    "images/photos/personal/02710028.jpg"
    "images/photos/personal/IMG_0667.jpg"
    "images/photos/personal/IMG_1369.jpg"
    "images/photos/personal/IMG_1604.jpg"
    "images/photos/personal/IMG_1807.jpg"
    "images/photos/personal/IMG_1821.jpg"
    "images/photos/personal/IMG_1831.jpg"
    "images/photos/personal/IMG_1945.jpg"
    "images/photos/personal/IMG_2224.jpg"
    "images/photos/personal/IMG_2287.jpg"
    "images/photos/personal/IMG_2535.jpg"
    "images/photos/personal/IMG_2574.jpg"
    "images/photos/personal/IMG_2655.jpg"
    "images/photos/personal/IMG_2689.jpg"
    "images/photos/personal/IMG_4133.jpg"
    "images/photos/personal/IMG_4215.jpg"
    "images/photos/personal/IMG_4492.jpg"
    "images/photos/personal/IMG_4787.jpg"
    "images/photos/personal/IMG_4859.jpg"
    "images/photos/personal/IMG_4891.jpg"
    "images/photos/personal/IMG_4926.jpg"
    "images/photos/personal/IMG_5740.jpg"
    "images/photos/personal/IMG_5746.jpg"
    "images/photos/personal/IMG_5886.jpg"
    "images/photos/personal/IMG_8645.jpg"
    "images/photos/personal/M8QnJ44s5RM.jpg"
    "images/photos/personal/THZyjHe_Eiw.jpg"
  ]
  
  $scope.routes = [
    'welcome'
    'contacts'
    'weddings'
    'personal'
  ]
  
  $scope.setCurrentPhoto = (gallery, photo)->
    $scope[gallery] = photo
  
  $scope.isCurrentPhoto = (gallery, photo)->
    $scope[gallery] == photo
  
  $scope.setCurrentPhoto 'weddings', $scope.weddingsPhotos[0]
  $scope.setCurrentPhoto 'personal', $scope.personalPhotos[0]
]

DanaKeli.config ['$locationProvider', ($locationProvider)->
  $locationProvider.html5Mode true
]

DanaKeli.run ['$rootScope', '$location', ($rootScope, $location)->
  $rootScope.$on 'duScrollspy:becameActive', ($event, $element)->
    hash = $element.prop 'hash'
    if hash
      $location.hash(hash.substr(1)).replace()
      $rootScope.$apply()
]
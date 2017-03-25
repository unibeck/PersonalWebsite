angular.module('App', [
  'ngMaterial'
]);

angular.module('App').config(function ($mdThemingProvider) {
  $mdThemingProvider.theme('home')
    .primaryPalette('blue', {
      'hue-2': 'A400'
    })
    .accentPalette('blue-grey', {
      'hue-2': '600'
    })
    .warnPalette('red');
});

angular.module('App').controller('AppCtrl', function ($scope, $mdDialog, $http) {

  var init = function () {
    $http.get('https://personalwebsite-4caa3.firebaseio.com/public/headers.json')
      .then(function(result) {
          $scope.section = result.data;
      });

    $http.get('https://personalwebsite-4caa3.firebaseio.com/public/career.json')
      .then(function(result) {
          $scope.careerList = result.data;
      });

    $http.get('https://personalwebsite-4caa3.firebaseio.com/public/projects.json')
      .then(function(result) {
          $scope.projectList = result.data;
      });
  };

  init();
  
  $scope.showProject = function (event, projectItem) {
    $mdDialog.show({
      controller: DialogController,
      template:
        '<md-dialog aria-label="Project dialog" style="width: 512px">'+
        '  <md-dialog-content style="padding: 24px">'+
        '     <div class="md-headline project-title">'+projectItem.title+''+
        '      <md-button class="md-icon-button section-button" href="https://github.com/rajonbeckman/PersonalWebsite">'+
        '        <md-icon md-font-icon="fa-github-square" class="fa s24" style="color: #E67E22"></md-icon>'+
        '      </md-button>'+
        '      <p class="md-subhead" style="color: #000; margin-bottom: 8px">'+projectItem.body+'</p>'+
        '    </div>'+
        '    <md-chips>'+
        '      <md-chip>'+projectItem.tag1+'</md-chip>'+
        '      <md-chip>'+projectItem.tag2+'</md-chip>'+
        '      <md-chip>'+projectItem.tag3+'</md-chip>'+
        '    </md-chips>'+
        '  </md-dialog-content>'+
        '</md-dialog>',
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose: true
    })
  };
  
  function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };
  }

  $scope.aboutMeInformation = [
    {
      icon: 'email',
      title: 'JonathanTBeckman@gmail.com'
    },
    {
      icon: 'phone',
      title: '518-567-9965'
    },
    {
      icon: 'home',
      title: 'Albany, New York 12222'
    }
  ];

  $scope.eduInformation = [
    {
      icon: 'location_on',
      title: 'University at Albany'
    },
    {
      icon: 'school',
      title: 'B.S. in Computer Science'
    },
    {
      icon: 'event',
      title: 'Graduated May 2017'
    }
  ];
});

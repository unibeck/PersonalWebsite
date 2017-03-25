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

  $scope.section = {
    aboutme: {
      title: 'About Me',
      text: 'Most of my free time is spent doing activities and hobbies outside. From camping in the Adirondack\'s with my girlfriend to throwing a football around with the guys, I\'m always enjoying what Earth has to offer.',
      img: "images/profile.jpg"
    },
    career: {
      title: 'Career',
      text: 'Below is a timeline of my career path in chronological order. For a more in-depth analysis of my past jobs please reference my resume.'
    },
    projects: {
      title: 'Personal Projects',
      text: 'These are the following projects I\'ve been working on in my spare time. I have taken interest in these projects becuase of my curiousity to learn and establish a foundation in the latest languages and technologies.'
    },
    updates:{
      title: 'Updates',
      text: 'Here you can find the latest updates to my projects, my career, and my life in general. Below are my latest updates, but I implore you to check out the project section to learn more.'
    },
    education:{
      title: 'Education',
      text: 'I am starting my senior year of university this fall. The past three years of my journey have been exciting, intense, and rewarding. I have been loving every minute of it!'
    }
  };

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
      title: 'Anticipated May 2017'
    }
  ];


});

/*
<div class="md-headline project-title">{{title}}'+
        '     <md-button class="md-icon-button md-primary section-button" href="https://github.com/rajonbeckman/PersonalWebsite">'+
        '       <md-icon md-font-icon="fa-github-square" class="fa s24"></md-icon>'+
        '     </md-button>'+
        '     <p class="md-subhead" style="color: #000; margin-bottom: 8px">{{projectTile.body}}</p>'+
        '   </div>'+
        '   <md-chips>'+
        '     <md-chip>{{projectTile.tag1}}</md-chip>'+
        '     <md-chip>{{projectTile.tag2}}</md-chip>'+
        '     <md-chip>{{projectTile.tag3}}</md-chip>'+
        '   </md-chips>'+
        */


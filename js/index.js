angular.module('App', [
  'ngMaterial'
]);

angular.module('App').config(function($mdThemingProvider) {
  $mdThemingProvider.theme('home')
    .primaryPalette('blue', {
      'hue-2': 'A400'
    })
    .accentPalette('blue-grey', {
      'hue-2': '600'
    })
    .warnPalette('red');

  $mdThemingProvider.theme('aboutMe')
    .primaryPalette('blue', {
      'default': '700'
    })
    .accentPalette('yellow')
    .warnPalette('red');

  $mdThemingProvider.theme('projects')
    .primaryPalette('green', {
      'default': '600'
    })
    .accentPalette('yellow')
    .warnPalette('red');

  $mdThemingProvider.theme('updates')
    .primaryPalette('yellow', {
      'default': '900'
    })
    .accentPalette('cyan')
    .warnPalette('red');
})

angular.module('App').controller('AppCtrl', function($scope, $mdSidenav, $mdDialog) {
  
  $scope.toggleSidenav = function(menu) {
    $mdSidenav(menu).toggle();
  }

  $scope.isOpen = false;

  $scope.demo = {
    isOpen: false,
    count: 0,
    selectedDirection: 'left'
  };

  $scope.showUpdate = function(title, event) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Latest '+title+' Update')
        .textContent('Inspect')
        .ariaLabel('Person inspect demo')
        .ok('Awesome')
        .targetEvent(event)
    );
  };

  $scope.section = {
    aboutme: {
      title: 'About Me',
      text: 'Most of my free time is spent doing activities and hobbies outside. From camping in the Adirondack\'s with my girlfriend to throwing a football around with the guys, I\'m always enjoying what Earth has to offer.',
      img: "images/profile.jpg"
    },
    projects: {
      title: 'Projects',
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

  $scope.projectTiles = [
    {
      title: 'Activity Weather',
      img: 'images/ActivityWeather.png',
      body: 'The Android app that I\'ve been developing in my free time. Select your preferred weather that you like to do an activity with and the app will let you know when the weather is nice enough to do that sport, lawn work, or any hobby. For example, Activity Weather will let you know if you have enough time to mow your lawn before a thunderstorm hits.',
      tag1: 'Java',
      tag2: 'JSON',
      tag3: 'Android Studio',
    },
    {
      title: 'Personal Website',
      img: 'images/website.png',
      body: 'You\'re using it! This is my first major project involving the latest web development tools. I first started with the Material Design Lite framework and realized that I needed something different. Still loving the feel of material design I went with framework called Angular Material. A few major redesigns later, I am quite happy with what I have built. Enjoy!',
      tag1: 'AngularJS',
      tag2: 'HTML5',
      tag3: 'CSS3',
    }
  ];

  $scope.updateCards = [
    {
      title: 'Activity Weather',
      subTitle: 'Update 0.7.4',
      icon: 'android'
    },
    {
      title: 'Personal Website',
      subTitle: 'Update 0.1.3',
      icon: 'web'
    },
    {
      title: 'Career',
      subTitle: '3/28/2016',
      icon: 'work'
    }
  ];

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
      icon: 'work',
      title: 'Auto/Mate'
    },
    {
      icon: 'school',
      title: 'University at Albany'
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
      title: 'Graduation: May 2017'
    }
  ];


});

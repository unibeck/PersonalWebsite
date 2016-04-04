angular.module('App', [
  'ngMaterial'
]);

angular.module('App').config(function($mdThemingProvider) {
  $mdThemingProvider.theme('home')
    .primaryPalette('blue-grey')
    .accentPalette('indigo')
    .warnPalette('red');

  $mdThemingProvider.theme('aboutMe')
    .primaryPalette('deep-orange')
    .accentPalette('brown')
    .warnPalette('green');

  $mdThemingProvider.theme('projects')
    .primaryPalette('teal')
    .accentPalette('orange')
    .warnPalette('blue');

  $mdThemingProvider.theme('updates')
    .primaryPalette('purple')
    .accentPalette('cyan')
    .warnPalette('deep-orange');
})

angular.module('App').controller('AppCtrl', function($scope, $mdSidenav) {
  
  $scope.toggleSidenav = function(menu) {
    $mdSidenav(menu).toggle();
  }

  $scope.data = {
    title: 'Jonathan Beckman',
    user: {
      email: 'JonathanTBeckman@gmail.com',
      iconurl: 'images/profile.png'
    }
  };

  $scope.section = {
    aboutme: {
      title: 'About Me',
      text: 'You\'re using the first website that I have built. Here you can find all of my notable achievements through-out my career as a software engineer, my contact information, and some other personal updates of my life. To learn more about me, head over to any of my social networks or select \'Read More\'.',
      position: 'absolute',
      top: '40%'
    },
    projects: {
      title: 'Projects',
      text: 'These are the following projects I\'ve been working on in my spare time. I have taken interest in these projects becuase of my curiousity to learn and establish a foundation in the latest languages/technologies.'
    },
    updates:{
      title: 'Updates',
      text: 'Here you can find the latest updates to my projects, my career, and my life in general. Above are my latest updates, but I implore you to head into the Update page to learn more.'
    }
  };

  $scope.projectTiles = [
    {
      title: 'Activity Weather',
      img: 'images/ActivityWeather.png',
      body: 'Find out more about my Android app \"Activity Weather\". Select your preferred weather that you like to do an activity with and the app will let you know when the weather is nice enough to do that sport, lawn work, or any hobby. For example, Activity Weather will let you know if you have enough time to mow your lawn before a thunderstorm hits.'
    },
    {
      title: 'Personal Website',
      img: 'images/ActivityWeather.png',
      body: 'You\'re using it! This is my first major project involving the latest web development tools, including HTML5, Angular Material, and CSS3. You can learn more about the development process by clicking read more. Thank you for browsing!',
    },
    {
      title: 'SharePoint',
      img: 'images/ActivityWeather.png',
      body: 'This is the project I\'ve been mostly concerned with during my time with NYS Derpartment of Health. SharePoint was the main development tool, where I further learn JS, CSS, and HTML. Though I can not disclose everything about the site, you can select read more if you would like to read about what I learned during the process',
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

  $scope.menu = [
    {
      link : '',
      title: 'Home',
      icon: 'home'
    },
    {
      link : '',
      title: 'About Me',
      icon: 'person'
    },
    {
      link : '',
      title: 'Projects',
      icon: 'content_paste'
    },
    {
      link : '',
      title: 'Updates',
      icon: 'flag'
    }
  ];

  $scope.aboutMeTiles = {
    mainIntro: 'Most of my free time is spent doing activities and hobbies outside. From camping in the Adirondack\'s with my girlfriend to throwing a football around with the guys, I\'m always enjoying what Earth has to offer. Some other outside hobbies I love are snowboarding, riding my motorcycle, fishing, and hanging around a bonfire with all of my closest friends.',
    subIntro: 'If I am inside, I\'m probably working on my personal projects or school work, watching Netflix with my love, or playing games on my PC. My favorite show is a throw up between Mad Men or House of Cards, with The Office and Parks and Recreation as 3rd and 4th. As for gaming, lately I\'ve been really enjoying Rainbow Six Seige and Dirt 3.'
  };

  $scope.aboutMeInformation = [
    {
      icon: 'email',
      title: 'JonathanTBeckman@gmail.com',
    },
    {
      icon: 'phone',
      title: '518-567-9965',
    },
    {
      icon: 'location_on',
      title: 'Hudson, New York 12534',
    }
  ];


});

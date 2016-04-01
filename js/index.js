angular.module('App', [
  'ngMaterial'
]);

angular.module('App').config(function($mdThemingProvider) {
  $mdThemingProvider.theme('blue-grey')
    .primaryPalette('blue-grey')
    .accentPalette('indigo')
    .warnPalette('green');

  $mdThemingProvider.theme('teal')
      .primaryPalette('teal')
      .accentPalette('orange')
      .warnPalette('blue');

  $mdThemingProvider.theme('purple')
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
          text: 'These are the following projects I\'ve been working on in my spare time. I have taken interest in these projects becuase of my curiousity to learn and establish a foundation in the latest languages/technologies.',
          activityWeather: {
            title: 'Activity Weather',
            img: 'images/ActivityWeather.png',
            body: 'Find out more about my Android app \"Activity Weather\". Select your preferred weather that you like to do an activity with and the app will let you know when the weather is nice enough to do that sport, lawn work, or any hobby. For example, Activity Weather will let you know if you have enough time to mow your lawn before a thunderstorm hits.'
          },
          personalWebsite: {
            title: 'Personal Website',
            img: 'images/ActivityWeather.png',
            body: 'You\'re using it! This is my first major project involving the latest web development tools, including HTML5, Angular Material, and CSS3. You can learn more about the development process by clicking read more. Thank you for browsing!',
          },
          sharePoint: {
            title: 'SharePoint',
            img: 'images/ActivityWeather.png',
            body: 'This is the project I\'ve been mostly concerned with during my time with NYS Derpartment of Health. SharePoint was the main development tool, where I further learn JS, CSS, and HTML. Though I can not disclose everything about the site, you can select read more if you would like to read about what I learned during the process',
          }
      },
      updates:{
          title: 'Updates',
          text: 'Here you can find the latest updates to my projects, my career, and my life in general. Above are my latest updates, but I implore you to head into the Update page to learn more.'
      }
    };

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
    },
    {
      link : '',
      title: 'Career',
      icon: 'work'
    }
  ];


});

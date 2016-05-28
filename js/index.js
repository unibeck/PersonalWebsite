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

angular.module('App').controller('AppCtrl', function ($scope, $mdDialog) {
  
  $scope.showProject = function (event, title, body, tag1, tag2, tag3) {
    $mdDialog.show({
      controller: DialogController,
      template:
        '<md-dialog aria-label="Project dialog" style="width: 512px">'+
        '  <md-dialog-content style="padding: 24px">'+
        '     <div class="md-headline project-title">'+title+''+
        '      <md-button class="md-icon-button section-button" href="https://github.com/rajonbeckman/PersonalWebsite">'+
        '        <md-icon md-font-icon="fa-github-square" class="fa s24" style="color: #E67E22"></md-icon>'+
        '      </md-button>'+
        '      <p class="md-subhead" style="color: #000; margin-bottom: 8px">'+body+'</p>'+
        '    </div>'+
        '    <md-chips>'+
        '      <md-chip>'+tag1+'</md-chip>'+
        '      <md-chip>'+tag2+'</md-chip>'+
        '      <md-chip>'+tag3+'</md-chip>'+
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
  
  $scope.projectList = [
    {
      title: 'Activity Weather',
      icon: 'android',
      img: 'images/ActivityWeather.png',
      body: 'The Android app that I\'ve been developing in my free time. Select your preferred weather that you like to do an activity with and the app will let you know when the weather is nice enough to do that sport, lawn work, or any hobby. For example, Activity Weather will let you know if you have enough time to mow your lawn before a thunderstorm hits.',
      tag1: 'Java',
      tag2: 'JSON',
      tag3: 'Android Studio'
    },
    {
      title: 'Personal Website',
      icon: 'web',
      img: 'images/website.png',
      body: 'You\'re using it! This is my first major project involving the latest web development tools. I first started with the Material Design Lite framework and realized that I needed something different. Still loving the feel of material design I went with framework called Angular Material. A few major redesigns later, I am quite happy with what I have built. Enjoy!',
      tag1: 'AngularJS',
      tag2: 'HTML5',
      tag3: 'CSS3'
    }
  ];

  $scope.careerList = [
    {
      who: 'Auto/Mate',
      where: 'Albany, NY 12222',
      what: 'Software Development Intern',
      whenTo: 'Present',
      whenFrom: 'May 16',
      body: 'Advancing the development of our Dealership Managament System (DMS) using mostly Java. Advancing the development of our Dealership Managament System (DMS) using mostly Java.'
    },
    {
      who: 'Office of Quality and Patient Safety (OQPS)',
      where: 'Albany, NY 12222',
      what: 'Web Developer Intern',
      whenTo: 'May 16',
      whenFrom: 'Oct 15',
      body: 'Developing an intranet catered to the Office of Quality and Patient Safety (OQPS), though also accessible by other employees at the Department of Health (DOH). Developer tools included HTML, CSS, JavaScript, and SharePoint.'
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


angular.module('App', [
  'ngMaterial'
]);

angular.module('App').config(function($mdThemingProvider) {
  $mdThemingProvider.theme('home')
    .primaryPalette('blue-grey', {
      'hue-2': '800'
    })
    
    .accentPalette('indigo')
    .warnPalette('red');

  $mdThemingProvider.theme('aboutMe')
    .primaryPalette('deep-orange')
    .accentPalette('brown')
    .warnPalette('green');

  $mdThemingProvider.theme('projects')
    .primaryPalette('light-blue')
    .accentPalette('orange')
    .warnPalette('teal');

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
      iconurl: 'images/profile.jpg'
    }
  };

  $scope.section = {
    aboutme: {
      title: 'About Me',
      text: 'Most of my free time is spent having fun outside. From camping in the Adirondack\'s with my girlfriend to throwing a football around with the guys, I\'m always enjoying what Earth has to offer.',
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

  $scope.aboutMeCards = [
    {
      img: 'images/motorcycle.gif',
      title: 'Riding',
      body: 'Cool, crisp air flows around your face as every hue of green flickers past. A 100hp engine block sits between your legs that howls at you to let her breath. Experiencing a road, rather than traveling on one, is the most exceptional feeling - that is what I love most about riding.'
    },
    {
      img: 'images/fishing.jpg',
      link: 'https://goo.gl/photos/2eh3c2w9yZnvb98A7',
      title: 'Fishing',
      body: 'Fishing is the ultimate getaway. Fighting with a fish is both a challenge and relaxing. To see some amazing photospheres of my fishing spots select the button in the top right.'
    },
    {
      img: 'images/hiking.jpg',
      title: 'Hiking',
      body: 'I love to hike because I get to experience a lot of new things - especially with my girlfriend Alyssa. Whether it\’s new terrain, a new fern, or a new bird, they all excite my curiosity. Plus it\’s a good work out!'
    }
  ];

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

  $scope.charts = [
    {
      rank: '9',
      title: "Java",
    },
    {
      rank: '9',
      title: "C",
    },
    {
      rank: '8',
      title: "HTML/CSS",
    },
    {
      rank: '7',
      title: "AngularJS",
    }
  ];

});

angular.element(document).ready(function () {
    var w = 200,    //width
        h = 100,    //height
        r = 100,    //radius
        ir = 50,
        pi = Math.PI,
        color = d3.scale.category20c();     

        data = [{"value":1}, 
                {"value":9}];

        var color = d3.scale.ordinal()
        .range(["#FFC107", "#2196F3"]);

        var vis = d3.select("#donut-0") 
            .data([data])          
                .attr("width", w)  
                .attr("height", h)
            .append("svg:g")       
                .attr("transform", "translate(" + r + "," + r + ")")    

        var arc = d3.svg.arc()              
            .outerRadius(r)
        .innerRadius(ir);

        var pie = d3.layout.pie()          
            .value(function(d) { return d.value; })
            .startAngle(-90 * (pi/180))
            .endAngle(90 * (pi/180));

        var arcs = vis.selectAll("g.slice")     
            .data(pie)                          
            .enter()                            
                .append("svg:g")                
                    .attr("class", "slice");    

            arcs.append("svg:path")
                    .attr("fill", function(d, i) { return color(i); } ) 
                    .attr("d", arc);

    var w = 200,    //width
        h = 100,    //height
        r = 100,    //radius
        ir = 50,
        pi = Math.PI,
        color = d3.scale.category20c();     

        data = [{"value":1}, 
                {"value":9}];
    
        var color = d3.scale.ordinal()
        .range(["#FFC107", "#2196F3"]);

        var vis = d3.select("#donut-1") 
            .data([data])          
                .attr("width", w)  
                .attr("height", h)
            .append("svg:g")       
                .attr("transform", "translate(" + r + "," + r + ")")    

        var arc = d3.svg.arc()              
            .outerRadius(r)
        .innerRadius(ir);

        var pie = d3.layout.pie()          
            .value(function(d) { return d.value; })
            .startAngle(-90 * (pi/180))
            .endAngle(90 * (pi/180));

        var arcs = vis.selectAll("g.slice")     
            .data(pie)                          
            .enter()                            
                .append("svg:g")                
                    .attr("class", "slice");    

            arcs.append("svg:path")
                    .attr("fill", function(d, i) { return color(i); } ) 
                    .attr("d", arc);
    
    
    var w = 200,    //width
        h = 100,    //height
        r = 100,    //radius
        ir = 50,
        pi = Math.PI,
        color = d3.scale.category20c();     

        data = [{"value":2}, 
                {"value":8}];
    
        var color = d3.scale.ordinal()
        .range(["#FFC107", "#2196F3"]);

        var vis = d3.select("#donut-2") 
            .data([data])          
                .attr("width", w)  
                .attr("height", h)
            .append("svg:g")       
                .attr("transform", "translate(" + r + "," + r + ")")    

        var arc = d3.svg.arc()              
            .outerRadius(r)
        .innerRadius(ir);

        var pie = d3.layout.pie()          
            .value(function(d) { return d.value; })
            .startAngle(-90 * (pi/180))
            .endAngle(90 * (pi/180));

        var arcs = vis.selectAll("g.slice")     
            .data(pie)                          
            .enter()                            
                .append("svg:g")                
                    .attr("class", "slice");    

            arcs.append("svg:path")
                    .attr("fill", function(d, i) { return color(i); } ) 
                    .attr("d", arc);
    
    var w = 200,    //width
        h = 100,    //height
        r = 100,    //radius
        ir = 50,
        pi = Math.PI,
        color = d3.scale.category20c();     

        data = [{"value":3}, 
                {"value":7}];
    
        var color = d3.scale.ordinal()
        .range(["#FFC107", "#2196F3"]);

        var vis = d3.select("#donut-3") 
            .data([data])          
                .attr("width", w)  
                .attr("height", h)
            .append("svg:g")       
                .attr("transform", "translate(" + r + "," + r + ")")    

        var arc = d3.svg.arc()              
            .outerRadius(r)
        .innerRadius(ir);

        var pie = d3.layout.pie()          
            .value(function(d) { return d.value; })
            .startAngle(-90 * (pi/180))
            .endAngle(90 * (pi/180));

        var arcs = vis.selectAll("g.slice")     
            .data(pie)                          
            .enter()                            
                .append("svg:g")                
                    .attr("class", "slice");    

            arcs.append("svg:path")
                    .attr("fill", function(d, i) { return color(i); } ) 
                    .attr("d", arc);

});

function resetGif(id) {
    var img = document.getElementById(id);
    var imageUrl = img.src;
    img.src = "#";
    img.src = imageUrl;
};

/*
{
      img: 'images/motorcycle.gif',
      title: 'Snowboarding',
      body: 'Going snowboarding with my girlfriend is the best part of winter. Nothing comes close to the amount of fun we have up on the mountain. It\'s the perfect getaway from the nasty New York winters.'
    },
*/
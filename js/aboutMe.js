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
})

angular.module('App').controller('AppCtrl', function($scope, $mdSidenav) {
  
  $scope.toggleSidenav = function(menu) {
    $mdSidenav(menu).toggle();
  }

  $scope.section = {
    aboutme: {
      title: 'About Me',
      text: 'Most of my free time is spent having fun outside. From camping in the Adirondack\'s with my girlfriend to throwing a football around with the guys, I\'m always enjoying what Earth has to offer.'
    }
  };

  $scope.aboutMeCards = [
    
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

var myanim = new Image();
    myanim.src = 'images/motorcycle_frame.jpg';
    myanim.onload = function() {
        document.getElementById('tilePicGif').src = myanim.src;
    }

/*
{
      img: 'images/motorcycle.gif',
      title: 'Snowboarding',
      body: 'Going snowboarding with my girlfriend is the best part of winter. Nothing comes close to the amount of fun we have up on the mountain. It\'s the perfect getaway from the nasty New York winters.'
    },
*/
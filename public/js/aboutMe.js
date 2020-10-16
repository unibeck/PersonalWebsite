angular.module('App', [
  'ngMaterial'
]);

angular.module('App').config(function ($mdThemingProvider) {
  $mdThemingProvider.theme('aboutMe')
    .primaryPalette('blue', {
      'default': '700'
    })
    .accentPalette('yellow')
    .warnPalette('red');
});

angular.module('App').controller('AppCtrl', function ($scope, $http) {

  var init = function () {
    $http.get('https://personalwebsite-4caa3.firebaseio.com/public/headers/aboutme.json')
      .then(function (result) {
          $scope.section = {};
          $scope.section.aboutme = result.data;
      });
  };

  init();

  $scope.aboutMeCards = [
    {
      img: 'images/fishing.jpg',
      link: 'https://goo.gl/photos/2eh3c2w9yZnvb98A7',
      title: 'Fishing',
      body: 'Fishing is the ultimate getaway. Fighting with a fish is both challenging and relaxing. To see some amazing photospheres of my fishing spots select the button in the top right.'
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
      title: 'hello@jonbeckman.com'
    },
    {
      icon: 'phone',
      title: '518-567-9965'
    },
    {
      icon: 'home',
      title: 'Woodstock, Georgia 30188'
    }
  ];

  $scope.gifIsLoading = true;

  var myanim = new Image();
  myanim.src = 'images/motorcycle.gif';

  $scope.resetGif = function () {
    document.getElementById('tilePicGif').src = myanim.src;
  };

  myanim.onload = function () {
    $scope.gifIsLoading = false;
    document.getElementById('tilePicGif').src = myanim.src;
    $scope.$apply();
  };
});

/* Use to make SVG donuts from D3
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
                .attr("viewBox", "0, 0, 232, 116")
            .append("svg:g")
                .attr("transform", "translate(116,116)")

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
*/

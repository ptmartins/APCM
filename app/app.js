angular.module('apcmApp', ['ngRoute', 'apcmControllers', 'slickCarousel']);

angular.module('apcmApp').config(function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'HomeCtrl',
        templateUrl: '../app/partials/home.html'
    })
    .when('/whoWeAre', {
        // controller: 'WhoWeAreCtrl',
        templateUrl: '../app/partials/whoWeAre.html'
    })
    .when('/team', {
        controller: 'TeamCtrl',
        templateUrl: '../app/partials/team.html'
    })
    .when('/partners', {
        controller: 'PartnersCtrl',
        templateUrl: '../app/partials/partners.html'
    })
    .when('/research', {
        controller: 'ResearchCtrl',
        templateUrl:  '../app/partials/research.html'
    })
    .when('/communication', {
        controller: 'CommunicationCtrl',
        templateUrl:  '../app/partials/communication.html'
    })
    .when('/contacts', {
        // controller: 'ContactsCtrl',
        templateUrl:  '../app/partials/contacts.html'
    })
    .otherwise({
        redirecTo: '/'
    });
});

angular.module('apcmApp').run(function ($rootScope, $location) {
    $rootScope.$on('$locationChangeSuccess', function () {
        $rootScope.location = $location.path().replace("/","");
    });
});
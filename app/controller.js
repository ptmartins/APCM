angular.module('apcmControllers', []);

angular.module('apcmControllers')

    // var dotsTitles = ['Investigacao Cientifica', 'Comunicacao de Ciencia', 'Apoiar-nos']

    .controller('HeaderCtrl', function($scope, $location) {
        // $scope.location=$location.path().replace("/","");
    })
    .controller('HomeCtrl', function($scope) {
        $scope.slickConfig = {
            dots: true,
            enabled: true,
            autoplay: false,
            draggable: false,  
            autoplaySpeed: 3000,
            prevArrow:"<i class='carousel-prev fas fa-chevron-left'>",
            nextArrow:"<i class='carousel-next fas fa-chevron-right'>",
            customPaging : function(slick, i) {
                var title = slick.$slides.eq(i).find('.carousel-slide').data('title');
                return title;
            }
        };

    })
    .controller('WhoWeAreCtrl', function($scope) {
        $scope.test = 'Who we are';
    })
    .controller('TeamCtrl', function($scope, $http) {
        $scope.team = '';

        $http.get('../app/data/team.json').then(function(response) {
            $scope.team = response.data.team;
        })
    })
    .controller('ResearchCtrl', function($scope) {
    
    })
    .controller('CommunicationCtrl', function($scope) {
    
    })
    .controller('PartnersCtrl', function($scope, $http) {
        $scope.insutional = '';
        $scope.funders = '';
        $scope.partners = '';

        $http.get('../app/data/partners.json').then(function(response) {
            $scope.funders = response.data.partners["funders"];
            $scope.institutional = response.data.partners["institutional"];
            $scope.partners = response.data.partners["partners"];

        })
    })
    .controller('ContactsCtrl', function($scope) {

    });
// create module named gemStore -level 1
// var app = angular.module('gemStore', []);
// angular:angularJs  gemStore: NameApplication []:dependencies

(function(){

    var app = angular.module('gemStore', []);

    app.controller('StoreController', function(){
        this.products = books ;
    });
    // app.controller('GalleryController', function(){
    //   this.current = 0;
    //   this.SetCurrent = function(newGallery) {
    //     this.current = newGalery || 0;
    //   }
    // });

    app.controller('ReviewController', function(){
      this.review = {};
      this.addReview = function(product){
        this.review.createdOn = Date.now();
        product.reviews.push(this.review);
        this.review = {};
      }
    });

    app.directive('productDescriptions', function(){
      return {
        restrict: 'E',
        templateUrl: 'product/product-descriptions.html',
        };
    });
    app.directive('productSpecs', function(){
      return {
        restrict: 'E',
        templateUrl: 'product/product-specs.html',
       };


      });

    app.directive("productReviews", function() {
      return {
        restrict: 'E',
        templateUrl: "product/product-reviews.html"
      };
    });

    app.directive('productTabs', function(){
      return {
      restrict: 'E',
      templateUrl:'product/product-tabs.html',
      controller: function(){
        this.tab = 1;
        this.setTab = function(selectTab) {
           this.tab = selectTab;};

         this.isSet = function(selectedTab){
            return this.tab === selectedTab;};
      },
      controllerAs:'tab',

      };

    });

    app.directive('productGallery', function() {
  return {
    restrict: 'E',
    templateUrl: 'product/product-gallery.html',
    controller: function(){
      this.current = 0;
      this.setCurrent = function(imageNumber){
      this.current = imageNumber || 0;
        };

    },
    controllerAs: 'gallery'
  };
});


var books = [

  {
     name : ' Laissée pour morte' ,
     price : 6.95 ,
     description : ' Un témoignage poignant et courageux. ',

     canPurchase : true,
     shine: 8,
     soldeOut : false,
     images: [
          "images/gem-02.gif",
          "images/gem-05.gif",
          "images/gem-09.gif"
        ],
    reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
 },

{
     name : ' Wild' ,
     price : 22.99 ,
     description : ' Cheryl Strayed nous entraîne grâce à ce récit humain et bouleversant sur les chemins. ',
     canPurchase : true,
     shine: 9,
     soldeOut : false,
     images: [
      "images/gem-01.gif",
      "images/gem-03.gif",
      "images/gem-04.gif"
    ],

    reviews: [{
        stars: 3,
        body: "I think this gem was just OK, could honestly use more shine, IMO.",
        author: "JimmyDean@example.org",
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: "Any gem with 12 faces is for me!",
        author: "gemsRock@example.org",
        createdOn: 1397490980837
      }]
 }

 ];

})();

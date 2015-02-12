// create module named gemStore -level 1
// var app = angular.module('gemStore', []);
// angular:angularJs  gemStore: NameApplication []:dependencies

(function(){

    var app = angular.module('gemStore', []);

    app.controller('StoreController', function(){
        this.products = books ;
    });





var books = [

{
     name : ' Laissée pour morte' ,
     price : 6.95 ,
     description : ' Un témoignage poignant et courageux. ',
     canPurchase : true,
     soldeOut : false,
     images: [
          "images/gem-02.gif",
          "images/gem-05.gif",
          "images/gem-09.gif"
    ]
 },

{
     name : ' Wild' ,
     price : 22.99 ,
     description : ' Cheryl Strayed nous entraîne grâce à ce récit humain et bouleversant sur les chemins. ',
     canPurchase : true,
     soldeOut : false,
     images: [
      "images/gem-01.gif",
      "images/gem-03.gif",
      "images/gem-04.gif"
    ]
 }

 ];

})();


//MODEL
  var map;
  var infowindow;

  var Model = [

        {title: 'Village Sake',
        lat: 37.986748899999, 
        lng: -122.58891260000001,
        desc: 'Best food in the world',
        yelpId: 'village-sake-fairfax',
        genre: 'restaurant, food'
          
        },
        {title: 'Marin Museum of Bicycling',
       lat:37.9878821, 
       lng: -122.58968299999998,
       desc: 'Fairfax mountain biking history',
       yelpId: 'marin-museum-of-bicycling-fairfax-2',
       genre: 'museum, bike, bikes'
         
         }, 
        {title: 'Fairfax Cyclery',
        lat: 37.9883012, 
        lng: -122.5904658,
        desc: 'Local bike shop/repair',
        yelpId: 'fairfax-cyclery-fairfax',
        genre: 'bike, bikes'
       },       
       {title: 'Wu Wei Tea Temple',
        lat:37.9873444 ,
        lng:-122.5876811,
        desc: "performance art tea",
        yelpId: 'wu-wei-tea-temple-fairfax',
        genre: 'tea lounge'
      },
       {title: 'Sunshine Bikes', 
       lat: 37.9859543, 
       lng: -122.58375990000,
       desc: 'Best bike shop in Fairfax',
       yelpId: 'sunshine-bicycle-center-fairfax',
       genre: 'bike, bikes'
     },
     {title: 'Peris Silver Dollar Bar', 
     lat: 37.9868, 
     lng: -122.5886,
     desc: 'Fairfax cultural icon & best bar',
     yelpId: 'peris-silver-dollar-bar-fairfax',
     genre: 'bar'
   },
        {title: 'Iron Springs Pub & Brewery', 
        lat: 37.9859758 , 
        lng: -122.5839887,
        desc: 'great beer and bike friendly hangout',
        yelpId: 'iron-springs-pub-and-brewery-fairfax',
        genre:'restaurant, pub, food'
        }

    ];        
//VIEW MODEL
var ViewModel = function(){
   var self = this;
    self.query = ko.observable('');//property to store the filter, empty str so not undefined in computed function
    self.locations = ko.observableArray(Model);//turns data into ObArray

   
    self.showQuery = ko.computed(function(locations){
      
     var filter = self.query().toLowerCase();
     //simplifies the ko observable
      if (!filter) {
        //code to show all map markers
        for (var i=0; i<self.locations().length; i++){
          //if self.locations.marker is defined, i.e. map has loaded
          if (self.locations()[i].marker) {
            self.locations()[i].marker.setVisible(true);
          }
        }
      return self.locations();
     }
      else {
        return ko.utils.arrayFilter(self.locations(), function(location) {
          
          if ((location.genre.toLowerCase().indexOf(filter) > -1) ||
            (location.title.toLowerCase().indexOf(filter) > -1)) {
           //code to show markers when search filter used

           location.marker.setVisible(true);
           return true;//show list item
          }
          else {
            location.marker.setVisible(false);//hides markers
            return false;//hide list item
          }        
            }); 

       }
       }); 
          
        
    self.locations().forEach(function(location){
      
    var marker = new google.maps.Marker ({

      map: map,
      position: new google.maps.LatLng(location.lat, location.lng),
      title: location.title,
      animation: google.maps.Animation.DROP   
        
    }); 
      //bounds.extend(marker.position);
      location.marker = marker;  

      marker.addListener('click', function(){
           
          yelpCall(location);
          //map.setCenter(marker.getPosition());
          marker.setAnimation(google.maps.Animation.BOUNCE);
          setTimeout(function(){
            location.marker.setAnimation(null);
          }, 750);
       });    
               
  });
    self.showInfo = function (location){
        google.maps.event.trigger(location.marker,
          'click');      
        };
    //map.fitBounds(bounds);
  };     
     
//function to load map and start app
//var bounds;
  function initMap(){ 

  var styles = [
     {
         "featureType": "all",
         "elementType": "geometry",
        "stylers": [
             {
                 "color": "#63b5e5"
             }
         ]
     },
     {
         "featureType": "all",
         "elementType": "labels.text.fill",
                "stylers": [
             {
                 "gamma": 0.01
             },
             {
                 "lightness": 20
             }
         ]
     },
     {
         "featureType": "all",
         "elementType": "labels.text.stroke",
         "stylers": [
             {
                 "saturation": -31
             },
             {
                 "lightness": -33
             },
             {
                 "weight": 2
             },
             {
                 "gamma": 0.8
             }
         ]
     },
     {
         "featureType": "all",
         "elementType": "labels.icon",
         "stylers": [
             {
                 "visibility": "off"
             }
        ]
    },
     {
         "featureType": "landscape",
         "elementType": "geometry",
         "stylers": [
             {
                 "lightness": 30
             },
             {
                 "saturation": 30
             }
         ]
     },
     {
         "featureType": "poi",
         "elementType": "geometry",
         "stylers": [
             {
                 "saturation": 20
             }
         ]
     },
     {
         "featureType": "poi.park",
         "elementType": "geometry",
        "stylers": [
             {
                 "lightness": 20
             },
             {
                 "saturation": -20
             }
         ]
     },
     {
         "featureType": "road",
         "elementType": "geometry",
        "stylers": [
             {
                 "lightness": 10
             },
             {
                 "saturation": -30
             }
         ]
     },
     {
         "featureType": "road",
         "elementType": "geometry.stroke",
         "stylers": [
             {
                 "saturation": 25
             },
             {
                 "lightness": 25
             }
         ]
     },
     {
         "featureType": "water",
         "elementType": "all",
         "stylers": [
             {
                 "lightness": -20
             }
         ]
     }
  ];     
            
       //constructor creates a new map - only center and zoom required
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 37.9873444, lng: -122.5876811},
          styles: styles,
          zoom: 16,
          mapTypeControl: false

        });
    
        //bounds = new google.maps.LatLngBounds();
        infowindow = new google.maps.InfoWindow();
        google.maps.event.addDomListener(window, 'resize', function(){
          map.setZoom(16);
        });

         ko.applyBindings(new ViewModel()); 
      }  
          
  
    
    

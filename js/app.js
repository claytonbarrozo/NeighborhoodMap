
//MODEL
  var map;
  var infowindow;

  //var locations;
  var Model = [

        {title: 'Village Sake',
        lat: 37.986748899999, 
        lng: -122.58891260000001,
        desc: 'Best food in the world',
        yelpId: 'village-sake-fairfax',
        genre: 'restaurant'
          
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
        {title: 'Red Boy Pizza',
        lat: 37.9961896,
        lng:  -122.59658619999999,
        desc: 'Pizza delivery place',
        yelpId: 'red-boy-pizza-fairfax',
        genre: 'restaurant'
         
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
        genre:'restaurant, pub'
        }

        ];        
//VIEW MODEL

 var ViewModel = function(){
   var self = this;
    self.query = ko.observable();
   self.showQuery = function(){
   //  //if location.genre = self.query etc
    console.log(self.query());
    }
  self.locations = ko.observableArray(Model);
    self.locations().forEach(function(location){
    var marker = new google.maps.Marker ({
      map: map,
      position: new google.maps.LatLng(location.lat, location.lng),
      title: location.title,
      animation: google.maps.Animation.DROP    

    })
 
      location.marker = marker;
      marker.addListener('click', function(){
           
          yelpCall(location);
          marker.setAnimation(google.maps.Animation.BOUNCE);
          setTimeout(function(){
            location.marker.setAnimation(null);
          }, 750);
});
         
  
       self.showInfo = function (location){

        google.maps.event.trigger(location.marker,
          'click');      
      };          
  })  
    
 }       
       
//function to load map and start app

 	function initMap(){       
        	 
       //constructor creates a new map - only center and zoom required
       	map = new google.maps.Map(document.getElementById('map'), {
       		center: {lat: 37.996481, lng: -122.59430600000002},
          //styles: styles,
       		zoom: 15,
       		mapTypeControl: false

       	});
        infowindow = new google.maps.InfoWindow;
        ko.applyBindings(new ViewModel());
      }  
        	
  
    
    

       
 		
 	  
 	    
  

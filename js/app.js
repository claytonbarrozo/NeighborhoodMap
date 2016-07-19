
//MODEL
  var map;
  var infowindow;
  //var locations;
  var Model = [

        {title: 'Village Sake',
        lat: 37.986748899999, 
        lng: -122.58891260000001,
        desc: 'Best food in the world',
        yelpId: 'village-sake-fairfax'
          
        },
        {title: 'Marin Museum of Bicycling',
       lat:37.9878821, 
       lng: -122.58968299999998,
       desc: 'Fairfax mountain biking history',
       yelpId: 'marin-museum-of-bicycling-fairfax-2'
         
         }, 
        {title: 'Fairfax Cyclery',
        lat: 37.9883012, 
        lng: -122.5904658,
        desc: 'Local bike shop/repair',
        yelpId: 'fairfax-cyclery-fairfax'
       },
        {title: 'Red Boy Pizza',
        lat: 37.9961896,
        lng:  -122.59658619999999,
        desc: 'Pizza delivery place',
        yelpId: 'red-boy-pizza-fairfax'
         
         }, 
       
       {title: 'Wu Wei Tea Temple',
        lat:37.9873444 ,
        lng:-122.5876811,
        desc: "performance art tea",
        yelpId: 'wu-wei-tea-temple-fairfax'
      },
       {title: 'Sunshine Bikes', 
       lat: 37.9859543, 
       lng: -122.58375990000,
       desc: 'Best bike shop in Fairfax',
       yelpId: 'sunshine-bicycle-center-fairfax'
     },
     {title: 'Peris Silver Dollar Bar', 
     lat: 37.9868, 
     lng: -122.5886,
     desc: 'Fairfax cultural icon & best bar',
     yelpId: 'peris-silver-dollar-bar-fairfax'
   },
        {title: 'Iron Springs Pub & Brewery', 
        lat: 37.9859758 , 
        lng: -122.5839887,
        desc: 'great beer and bike friendly hangout',
        yelpId: 'iron-springs-pub-and-brewery-fairfax'
        }

        ];        
//VIEW MODEL

 var ViewModel = function(){
//   //show places on side nav
   var self = this;
  self.locations = ko.observableArray(Model);

  
    self.locations().forEach(function(location){
    var marker = new google.maps.Marker ({
      map: map,
      position: new google.maps.LatLng(location.lat, location.lng),
      title: location.title,
      animation: google.maps.Animation.DROP    

    })
       //var business_id = location.yelpId;
      //self.locations().forEach(function(){
      
      //console.log(business_id);
      //})

      location.marker = marker;
         marker.addListener('click',function(){
          yelpCall();
          infowindow.setContent('<p>' + Object.rating + '</p>');   
          
      infowindow.open(map, marker);
      
      });
         function createMarkerButton(marker) {
          //creates a sidebar button
          var ul = document.getElementById('locations');
          var li = document.createelement('li');
         
          li.innerHTML = title();
          ul.appendChild(li);

          google.maps.event.addDomListener(li, "click", function(){
            google.maps.event.trigger(marker, 'click');
          });
         }
         google.maps.event.addDomListener(infowindow);

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
        	
  
    
    

       
 		
 	  
 	    
  

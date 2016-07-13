
//MODEL
  var map;
  var Model = [

        {title: 'Village Sake',
        lat: 37.986748899999, 
        lng: -122.58891260000001
          
        },
        {title: 'Marin Museum of Bicycling',
       lat:37.9878821, 
       lng: -122.58968299999998
         
         }, 
        {title: 'Fairfax Cyclery',
        lat: 37.9883012, 
        lng: -122.5904658
       },
        {title: 'Red Boy Pizza',
        lat: 37.9961896,
        lng:  -122.59658619999999
         
         }, 
        {title: 'Manor Elementary School', 
        lat:37.996481, 
       lng: -122.59430600000002
       },
        {title: 'White Hill Middle School', 
       lat: 38.002858,
        lng: -122.60625700000003
       },
       {title: 'Wu Tei Tea Temple',
        lat:37.9873444 ,
        lng:-122.5876811
      },
       {title: 'Sunshine Bikes', 
       lat: 37.9859543, 
       lng: -122.58375990000
     },
     {title: 'Peris Bar', 
     lat: 37.9868, 
     lng: -122.5886
   },
        {title: 'Iron Springs Pub & Brewery', 
        lat: 37.9859758 , 
        lng: -122.5839887
        }

        ];

        

//VIEW MODEL

 var ViewModel = function(){
//   //show places on side nav
   var self = this;
  self.locations = ko.observableArray(Model);
  self.locations().forEach(function(location){
    location.marker = new google.maps.Marker ({
      map: map,
      position: new google.maps.LatLng(location.lat, location.lng),
      title: location.title,
      animation: google.maps.Animation.DROP
    })
    // var infowindow = new google.maps.infoWindow({
    //   content: location.title
    // });
    // infowindow.open();
  //
      
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
        ko.applyBindings(new ViewModel());
      }  
        	
    
  

  //};      
       	
      
       	
       

       	
     //   	//create an onclick event to open an infowindow at each marker.
     //   	marker.addListener('click', function(){
     //   		populateInfoWindow(this, largeInfowindow);
     //   	});
     // }  	
       
     //   	function populateInfoWindow(marker, infowindow) {
     //   		//check to make sure infowindow is not already opened on this marker
     //   		if (infowindow.marker != marker) {
     //   			infowindow.marker = marker;
     //   			infowindow.setContent('');
     //   			infowindow.open(map, marker);
     //   			//make sure the marker property is cleared if infowindow is closed.
     //   			infowindow.addListener('closeclick',function(){
     //   				infowindow.setMarker(null);
     //   			});
     //   			var streetViewService = new google.maps.StreetViewService();
     //   			var radius = 30;
     //   			function getStreetView(data, status){
     //   			if (status == google.maps.StreetViewStatus.OK) {
     //   				var nearStreetViewLocation = data.location.latLng;
     //   				var heading = google.maps.geometry.spherical.computeHeading(
     //   					nearStreetViewLocation, marker.position);
     //   				infowindow.setContent('<div>' + marker.title + '</div><div id="pano"></div>');
     //   				var panoramaOptions = {
     //   					position: nearStreetViewLocation,
     //   					pov: {
     //   						heading: heading,
     //   						pitch: 30

     //   					}
     //   				};
     //   				var panorama = new google.maps.StreetViewPanorama(
     //   					document.getElementById('pano'), panoramaOptions);
     //   			} else {
     //   				infowindow.setContent('<div>' + marker.title + '</div>' +
     //   					'<div>No Street View Found</div>')
     //   			}
     //   		}
     //   		//use streetview service to get the closest streetview image 
     //   		streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
     //   		//open the infowindow on the correct marker.
     //   		infowindow.open(map, marker);
     //   	}   	
       	
     //   }
    
    

       
 		
 	  
 	    
  

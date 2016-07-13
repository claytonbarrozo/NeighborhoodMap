
//MODEL
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
        {title: 'Girenghelli Pizza', 
        lat: 48.8879, 
        lng: 2.3299}
        }

        ];


       
        // {title: 'Peris Bar', location:{lat: 48.8840, lng: 2.3090}},
        // marker: {position: this.location,
        //   title: this.title,
        //   animation: google.maps.Animation.DROP,
        //   id: i},
        // {title: 'Sunshine Bikes', location: {lat: 37.9859543, lng: -122.58375990000}},
        // marker: {position: this.location,
        //   title: this.title,
        //   animation: google.maps.Animation.DROP,
        //   id: i},
        // {title: 'Iron Springs Pub & Brewery', location: {lat: 37.9859758 ,lng:-122.5839887}},
        // marker: {position: this.location,
        //   title: this.title,
        //   animation: google.maps.Animation.DROP,
        //   id: i},
        // {title: 'Wu Tei Tea Temple', location: {lat:37.9873444 ,lng:-122.5876811}}
        // marker: {position: this.location,
        //   title: this.title,
        //   animation: google.maps.Animation.DROP,
        //   id: i}

//VIEW MODEL

 var ViewModel = function(){
//   //show places on side nav
   
  Model = ko.observableArray();

  var markers = ko.observableArray();
  markers.push('marker');


 }

 ko.applyBindings(new ViewModel());


//function to load map and start app

 	var map;
 
 	function initMap(){       
        	 
       //constructor creates a new map - only center and zoom required
       	map = new google.maps.Map(document.getElementById('map'), {
       		center: {lat: 37.996481, lng: -122.59430600000002},
          //styles: styles,
       		zoom: 15,
       		mapTypeControl: false

       	});
      }  
         var marker = new google.maps.Marker ({
          map: map,
          position: new google.maps.LatLng(Model.lat, Model.lng);
          title: title;
          animation: google.maps.Animation.DROP,
          //id: i
         });	
    
  

  //};      
       	// var largeInfowindow = new google.maps.InfoWindow();
       	// //this uses the locations array to create an array of markers
       	// for (var i=0; i< locations.length; i++){
       	// 	//get the position from the location array.
       	// var position = locations[i].location;
        // //get the title from the location array.
       	// var title = locations[i].title;
      
       	
       

       	
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
    
    

       
 		
 	  
 	    
  

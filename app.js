
/*function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "red";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "#63b5e5";
}*/

 	var map;
 	var markers = [];
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
]
 	 
       //constructor creates a new map - only center and zoom required
       	map = new google.maps.Map(document.getElementById('map'), {
       		center: {lat: 37.996481, lng: -122.59430600000002},
          styles: styles,
       		zoom: 15,
       		mapTypeControl: false

       	});	

       	var locations = [

       	{title: 'Village Sake',location: {lat: 37.986748899999, lng: -122.58891260000001}},
       	{title: 'Marin Museum of Bicycling', location: {lat:37.9878821, lng: -122.58968299999998}},
        {title: 'Fairfax Cyclery', location: {lat: 37.9883012, lng: -122.5904658}},
       	{title: 'Red Boy Pizza',location: {lat: 37.9961896, lng: 
       		-122.59658619999999}},
       	{title: 'Manor Elementary School', location: {lat:37.996481, lng: -122.59430600000002}},
       	{title: 'White Hill Middle School', location: {lat: 38.002858, lng: -122.60625700000003}},
       	{title: 'Girenghelli Pizza', location: {lat: 48.8879, lng: 2.3299}},
       	{title: 'Peris Bar', location:{lat: 48.8840, lng: 2.3090}},
        {title: 'Sunshine Bikes', location: {lat: 37.9859543, lng: -122.58375990000}},
        {title: 'Iron Springs Pub & Brewery', location: {lat: 37.9859758 ,lng:-122.5839887}},
        {title: 'Wu Tei Tea Temple', location: {lat:37.9873444 ,lng:-122.5876811}}
       		
       	]

           //put location titles in side navigation bar
            var Place = function () {
             
      this.title = ko.observable(locations[0].title);  
    ko.applyBindings(new Place());
    };
        
       	var largeInfowindow = new google.maps.InfoWindow();
       	//this uses the locations array to create an array of markers
       	for (var i=0; i< locations.length; i++){
       		//get the position from the location array.
       	var position = locations[i].location;
        //get the title from the location array.
       	var title = locations[i].title;
      
       	//create a marker per location, and put into the markers array.
       	var marker = new google.maps.Marker ({
       		map: map,
       		position: position,
       		title: title,
       		animation: google.maps.Animation.DROP,
       		id: i
       	});
       
       	//push the marker to the array of markers.
       	markers.push(marker);
       

       	
       	//create an onclick event to open an infowindow at each marker.
       	marker.addListener('click', function(){
       		populateInfoWindow(this, largeInfowindow);
       	});
     }  	
       
       	function populateInfoWindow(marker, infowindow) {
       		//check to make sure infowindow is not already opened on this marker
       		if (infowindow.marker != marker) {
       			infowindow.marker = marker;
       			infowindow.setContent('');
       			infowindow.open(map, marker);
       			//make sure the marker property is cleared if infowindow is closed.
       			infowindow.addListener('closeclick',function(){
       				infowindow.setMarker(null);
       			});
       			var streetViewService = new google.maps.StreetViewService();
       			var radius = 30;
       			function getStreetView(data, status){
       			if (status == google.maps.StreetViewStatus.OK) {
       				var nearStreetViewLocation = data.location.latLng;
       				var heading = google.maps.geometry.spherical.computeHeading(
       					nearStreetViewLocation, marker.position);
       				infowindow.setContent('<div>' + marker.title + '</div><div id="pano"></div>');
       				var panoramaOptions = {
       					position: nearStreetViewLocation,
       					pov: {
       						heading: heading,
       						pitch: 30

       					}
       				};
       				var panorama = new google.maps.StreetViewPanorama(
       					document.getElementById('pano'), panoramaOptions);
       			} else {
       				infowindow.setContent('<div>' + marker.title + '</div>' +
       					'<div>No Street View Found</div>')
       			}
       		}
       		//use streetview service to get the closest streetview image 
       		streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
       		//open the infowindow on the correct marker.
       		infowindow.open(map, marker);
       	}   	
       	
       }
    
    }

       
 		
 	  
 	    
  

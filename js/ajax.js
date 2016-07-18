// function loadData() {

// 	var auth = { 
//     consumerKey: "sIviEjpkR-UPVcBVByApvg", 
//     consumerSecret: "4dGFLphhhoj9m3byKmuQ7AMb9Yw",
//     accessToken: "0In4SF1qFjsutKlMoJTx9sIIEUGHECUO",
//     accessTokenSecret: "EwdV_f0Mm0oYYFG_QaqaqTy4JhA",
//   };

 // * Generates a random number and returns it as a string for OAuthentication
 // * @return {string}
 // */
  

function nonce_generate() {
  return (Math.floor(Math.random() * 1e12).toString());
}

var yelp_url = 'https://api.yelp.com/v2/business/' + business_id;

YELP_KEY = "sIviEjpkR-UPVcBVByApvg";
YELP_Key_SECRET = "4dGFLphhhoj9m3byKmuQ7AMb9Yw";
YELP_TOKEN = "0In4SF1qFjsutKlMoJTx9sIIEUGHECUO";
YELP_TOKEN_SECRET = "EwdV_f0Mm0oYYFG_QaqaqTy4JhA";

    var parameters = {
      oauth_consumer_key: "sIviEjpkR-UPVcBVByApvg",
      oauth_token: "0In4SF1qFjsutKlMoJTx9sIIEUGHECUO",
      oauth_nonce: nonce_generate(),
      oauth_timestamp: Math.floor(Date.now()/1000),
      oauth_signature_method: 'HMAC-SHA1',
      oauth_version : '1.0',
      callback: 'cb',// This is crucial to include for jsonp implementation in AJAX or else the oauth-signature will be wrong.
      cll: '37.986748899999, -122.58891260000001' 
                      
    };

    var encodedSignature = oauthSignature.generate('GET',yelp_url, parameters, YELP_Key_SECRET,YELP_TOKEN_SECRET);
    parameters.oauth_signature = encodedSignature;

    var settings = {
      url: yelp_url,
      data: parameters,
      cache: true, // This is crucial to include as well to prevent jQuery from adding on a cache-buster parameter "_=23489489749837", invalidating our oauth-signature
      dataType: 'jsonp',
      jsonpCallback: 'cb',
      success: function(results) {
        //console.log(results);
        // self.locations = ko.observableArray(Model);
     //self.locations().forEach(function(location){
        var yelpResults = ko.observableArray(results);
        yelpResults().forEach(function(ratings){
         infowindow.append('location.ratings');
        })
       
      },
      fail: function(xhr, status, error) {
        console.log("An AJAX error occurred: " + status + "\nError: " + error + "\nError detail: " + xhr.responseText);
        // Do stuff on fail
      }
    };

    // Send AJAX query via jQuery library.
    $.ajax(settings);
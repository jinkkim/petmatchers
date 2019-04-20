// Create the tile layer that will be the background of our map
var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_KEY
});

// Initialize all of the LayerGroups we'll be using
var layers = {
  Dog: new L.LayerGroup(),
  Cat: new L.LayerGroup()
};

// Create the map with our layers
var map = L.map("map-id", {
  center: [40.73, -74.0059],
  zoom: 12,
  layers: [
    layers.Dog,
    layers.Cat
  ]
});

// Add our 'lightmap' tile layer to the map
lightmap.addTo(map);

// Create an overlays object to add to the layer control
var overlays = {
  "Dog": layers.Dog,
  "Cat": layers.Cat
};

// Create a control for our layers, add our overlay layers to it
L.control.layers(null, overlays).addTo(map);

// Create a legend to display information about our map
var info = L.control({
  position: "bottomright"
});

// When the layer control is added, insert a div with the class of "legend"
info.onAdd = function() {
  var div = L.DomUtil.create("div", "legend");
  return div;
};
// Add the info legend to the map
info.addTo(map);

// Initialize an object containing icons for each layer group
var icons = {
  Cat: L.ExtraMarkers.icon({
    icon: "ion-minus-circled",
    iconColor: "white",
    markerColor: "blue-dark",
    shape: "penta"
  }),
  Dog: L.ExtraMarkers.icon({
    icon: "ion-android-cat",
    iconColor: "white",
    markerColor: "orange",
    shape: "circle"
  })
};

// Perform an API call to the Citi Bike Station Information endpoint
d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_information.json", function(infoRes) {

  // When the first API call is complete, perform another call to the Citi Bike Station Status endpoint
  d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_status.json", function(statusRes) {
    var updatedAt = infoRes.last_updated;
    var PetStatus = statusRes.data.stations;
    var PetInfo = infoRes.data.stations;

    // Create an object to keep of the number of markers in each layer
    var PetCount = {
      Dog: 0,
      Cat: 0
    };

    // Initialize a stationStatusCode, which will be used as a key to access the appropriate layers, icons, and station count for layer group
    var PetStatusCode;

    // Loop through the stations (they're the same size and have partially matching data)
    for (var i = 0; i < PetInfo.length; i++) {

      // Create a new station object with properties of both station objects
      var station = Object.assign({}, PetInfo[i], PetStatus[i]);
      // If a station is listed but not installed, it's coming soon
      if (!station.is_installed) {
        PetStatusCode = "Dog";
      }
      else {
        PetStatusCode = "Cat";
      }

      // Update the Pet count
      PetCount[PetStatusCode]++;
      // Create a new marker with the appropriate icon and coordinates
      var newMarker = L.marker([station.lat, station.lon], {
        icon: icons[PetStatusCode]
      });

      // Add the new marker to the appropriate layer
      newMarker.addTo(layers[PetStatusCode]);

      // Bind a popup to the marker that will  display on click. This will be rendered as HTML
      newMarker.bindPopup(station.name + "<br> Capacity: " + station.capacity + "<br>" + station.num_bikes_available + " Bikes Available");
    }

    // Call the updateLegend function, which will... update the legend!
    updateLegend(updatedAt, PetCount);
  });
});

// Update the legend's innerHTML with the last updated time and station count
function updateLegend(time, PetCount) {
  document.querySelector(".legend").innerHTML = [
    "<p>Updated: " + moment.unix(time).format("h:mm:ss A") + "</p>",
    "<p class='Dog'>Dog: " + PetCount.Dog + "</p>",
    "<p class='Cat'>Cat: " + PetCount.Cat + "</p>"
  ].join("");
}

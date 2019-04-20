function drawPlot(dog_statistics){

    var data = [
        {
        values: dog_statistics[1],
        labels: dog_statistics[0],
        domain: {column: 0},
        name: 'breed',
        hole: .4,
        type: 'pie'
        },
        {
        values: dog_statistics[3],
        labels: dog_statistics[2],
        domain: {column: 1},
        name: 'age',
        hole: .4,
        type: 'pie'
        },
        {
        values: dog_statistics[5],
        labels: dog_statistics[4],
        domain: {column: 2},
        name: 'size',
        hole: .4,
        type: 'pie'
        }]

    var layout = {
        title: 'Statistics for dogs',
        annotations: [
            {
              font: {size: 18},
              showarrow: false,
              text: 'Breed',
              x: 0.12,
              y: 0.5
            },
            {
              font: {size: 18},
              showarrow: false,
              text: 'Age',
              x: 0.5,
              y: 0.5
            },
            {
                font: {size: 18},
                showarrow: false,
                text: 'Size',
                x: 0.88,
                y: 0.5
              }
        ],
        height: 400,
        width: 1000,
        showlegend: false,
        grid: {rows: 1, columns: 3}

    }
    Plotly.newPlot('pie_dog', data, layout); 

    //create map
    //reference  : https://leafletjs.com/examples/choropleth/

    

    function getColor(d) {
      return d > 1000 ? '#800026' :
             d > 500  ? '#BD0026' :
             d > 300  ? '#E31A1C' :
             d > 100  ? '#FC4E2A' :
             d > 50   ? '#FD8D3C' :
             d > 20   ? '#FEB24C' :
             d > 10   ? '#FED976' :
                        '#FFEDA0';
    }

    function style(feature) {
      return {
          fillColor: getColor(feature.properties.density),
          weight: 2,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.7
      };
  }

    var myMap = L.map("map", {
      center: [40.13, -94.93],
      zoom: 5
    });

    L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
    }).addTo(myMap);

    //correct populaton in goejson to dog population
    statesData.features.forEach(function(feature){
      feature.properties.density = dog_statistics[6][feature.properties.name]
    })

    var geojson = L.geoJson(statesData, {style: style}).addTo(myMap);





    // insert legend
    var legend = L.control({position: 'bottomright'});

    legend.onAdd = function (map) {
      var div = L.DomUtil.create('div', 'info legend'),
          grades = [0, 10, 20, 50, 100, 200, 500, 1000],
          labels = [];

      // loop through our density intervals and generate a label with a colored square for each interval
      for (var i = 0; i < grades.length; i++) {
          div.innerHTML +=
              '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
              grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
      }

      return div;
    };

    legend.addTo(myMap);
    

    


}
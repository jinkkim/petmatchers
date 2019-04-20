function drawPlot(cat_statistics){

  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data_breed = google.visualization.arrayToDataTable(cat_statistics[0]);
    var options_breed = {
      title: 'Adoptable Cats by Breed (Top 10)',
      pieHole: 0.4,
      width:550,
      height:500,
      //legend:'none'
    };
    var chart_breed = new google.visualization.PieChart(document.getElementById('pie_breed_cat'));
    chart_breed.draw(data_breed, options_breed);

    var data_age = google.visualization.arrayToDataTable(cat_statistics[1]);
    var options_age = {
      title: 'Age Distribution',
      pieHole: 0.4,
      width:550,
      height:500,
      //legend:'none'
    };
    var chart_age = new google.visualization.PieChart(document.getElementById('pie_age_cat'));
    chart_age.draw(data_age, options_age);

    var data_size = google.visualization.arrayToDataTable(cat_statistics[2]);
    var options_size = {
      title: 'Size Distribution',
      pieHole: 0.4,
      width:550,
      height:500,
      //legend:'none'
    };
    var chart_size = new google.visualization.PieChart(document.getElementById('pie_size_cat'));
    chart_size.draw(data_size, options_size);

    var data_color = google.visualization.arrayToDataTable(cat_statistics[3]);
    var options_color = {
      title: 'Color Distribution',
      pieHole: 0.4,
      width:550,
      height:500,
      //legend:'none'
    };
    var chart_color = new google.visualization.PieChart(document.getElementById('pie_color_cat'));
    chart_color.draw(data_color, options_color);

  }

}
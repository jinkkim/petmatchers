function drawPlot(cat_statistics){

    var data = [
        {
        values: cat_statistics[1],
        labels: cat_statistics[0],
        domain: {column: 0},
        name: 'breed',
        hole: .4,
        type: 'pie'
        },
        {
        values: cat_statistics[3],
        labels: cat_statistics[2],
        domain: {column: 1},
        name: 'age',
        hole: .4,
        type: 'pie'
        },
        {
        values: cat_statistics[5],
        labels: cat_statistics[4],
        domain: {column: 2},
        name: 'size',
        hole: .4,
        type: 'pie'
        }]

    var layout = {
      //  title: 'Statistics for cats',
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
    Plotly.newPlot('pie_cat', data, layout); 
}
function drawPlot(cost_data){
    var json_cost = JSON.parse(cost_data)
    var x_axis = ["Small dog", "Medium dog", "Large dog", "Cat"];
    
    var y_food = [];
    var y_medical = [];
    var y_litter = [];
    var y_toy = [];
    var y_license = [];
    var y_insurance = [];
    var y_misc = [];
    var y_groom = [];
    var y_total = [];

    //data cleaning
    json_cost.forEach(function(cost){
        if (cost["Items"] == "Food") {
            y_food.push(cost["Sm_Dog"])
            y_food.push(cost["Med_Dog"])
            y_food.push(cost["Lg_Dog"])
            y_food.push(cost["Cat"])

        } else if (cost["Items"] == "Recurring medical") {
            y_medical.push(cost["Sm_Dog"])
            y_medical.push(cost["Med_Dog"])
            y_medical.push(cost["Lg_Dog"])
            y_medical.push(cost["Cat"])

        } else if (cost["Items"] == "Litter") {
            y_litter.push(cost["Sm_Dog"])
            y_litter.push(cost["Med_Dog"])
            y_litter.push(cost["Lg_Dog"])
            y_litter.push(cost["Cat"])

        } else if (cost["Items"] == "Toys/Treats") {
            y_toy.push(cost["Sm_Dog"])
            y_toy.push(cost["Med_Dog"])
            y_toy.push(cost["Lg_Dog"])
            y_toy.push(cost["Cat"])

        } else if (cost["Items"] == "License") {
            y_license.push(cost["Sm_Dog"])
            y_license.push(cost["Med_Dog"])
            y_license.push(cost["Lg_Dog"])
            y_license.push(cost["Cat"])

        } else if (cost["Items"] == "Health Insurance") {
            y_insurance.push(cost["Sm_Dog"])
            y_insurance.push(cost["Med_Dog"])
            y_insurance.push(cost["Lg_Dog"])
            y_insurance.push(cost["Cat"])

        } else if (cost["Items"] == "Misc.") {
            y_misc.push(cost["Sm_Dog"])
            y_misc.push(cost["Med_Dog"])
            y_misc.push(cost["Lg_Dog"])
            y_misc.push(cost["Cat"])

        } else if (cost["Items"] == "Long Hair Groom") {
            y_groom.push(cost["Sm_Dog"])
            y_groom.push(cost["Med_Dog"])
            y_groom.push(cost["Lg_Dog"])
            y_groom.push(cost["Cat"])

        } else if (cost["Items"] == "Annual Total") {
            y_total.push(cost["Sm_Dog"])
            y_total.push(cost["Med_Dog"])
            y_total.push(cost["Lg_Dog"])
            y_total.push(cost["Cat"])

        } else {

        }

    })

    // Stacked bar chart
    var food = {
        x: x_axis,
        y: y_food,
        name: 'cost for food',
        type: 'bar'
      };
    
    var medical = {
      x: x_axis,
      y: y_medical,
      name: 'cost for medical',
      type: 'bar'
    };

    var litter = {
        x: x_axis,
        y: y_litter,
        name: 'cost for litter',
        type: 'bar'
      };

      var toy = {
        x: x_axis,
        y: y_toy,
        name: 'cost for toy',
        type: 'bar'
      };

      var license = {
        x: x_axis,
        y: y_license,
        name: 'cost for license',
        type: 'bar'
      };

      var insurance = {
        x: x_axis,
        y: y_insurance,
        name: 'cost for insurance',
        type: 'bar'
      };

      var misc = {
        x: x_axis,
        y: y_misc,
        name: 'cost for misc',
        type: 'bar'
      };

      var groom = {
        x: x_axis,
        y: y_groom,
        name: 'cost for groom',
        type: 'bar'
      };

      var data = [food, medical, litter, toy, license, insurance, misc, groom];
    
      var layout = {barmode: 'stack'};
      
    Plotly.newPlot('stacked_bar', data, layout);


    // Dropdown bar chart
    var data2 = [
        {
            x: x_axis,
            y: y_food,
            name: 'cost for food'
            type: 'bar'
        },
        {
            x: x_axis,
            y: y_medical,
            name: 'cost for medical',
            type: 'bar'
        },
        {
            x: x_axis,
            y: y_litter,
            name: 'cost for litter',
            type: 'bar'
        },
        {
            x: x_axis,
            y: y_toy,
            name: 'cost for toy',
            type: 'bar'
        },
        {
            x: x_axis,
            y: y_license,
            name: 'cost for license',
            type: 'bar'
        },
        {
            x: x_axis,
            y: y_insurance,
            name: 'cost for insurance',
            type: 'bar'
        },
        {
            x: x_axis,
            y: y_misc,
            name: 'cost for misc',
            type: 'bar'
        },
        {
            x: x_axis,
            y: y_groom,
            name: 'cost for groom',
            type: 'bar'
        },
        {
            x: x_axis,
            y: y_total,
            name: 'cost for total',
            type: 'bar'
        }]; 
        
        Plotly.newPlot('dropdown_bar', data2, {
        updatemenus: [{
            y: 1,
            yanchor: 'top',
            buttons: [{
                method: 'restyle',
                args: ['visible', [true, false, false, false,false, false, false,false, false]],
                label: 'food'
            }, {
                method: 'restyle',
                args: ['visible', [false, true, false, false,false, false, false,false, false]],
                label: 'medical'
            }, {
                method: 'restyle',
                args: ['visible', [false, false, true, false,false, false, false,false, false]],
                label: 'litter'
            }, {
                method: 'restyle',
                args: ['visible', [false, false, false, true,false, false, false,false, false]],
                label: 'toy'
            }, {
                method: 'restyle',
                args: ['visible', [false, false, false, false,true, false, false,false, false]],
                label: 'license'
            }, {
                method: 'restyle',
                args: ['visible', [false, false, false, false,false, true, false,false, false]],
                label: 'insurance'
            }, {
                method: 'restyle',
                args: ['visible', [false, false, false, false,false, false, true,false, false]],
                label: 'misc'
            }, {
                method: 'restyle',
                args: ['visible', [false, false, false, false,false, false, false,true, false]],
                label: 'groom'
            }, {
                method: 'restyle',
                args: ['visible', [false, false, false, false,false, false, false,false, true]],
                label: 'total'
            }]
        }],
    });
    




    
}


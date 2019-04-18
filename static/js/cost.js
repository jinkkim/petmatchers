function drawPlot(cost_data){
    //anual costs
    var json_annual_cost = JSON.parse(cost_data[0])
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
    json_annual_cost.forEach(function(cost){
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
      
    Plotly.newPlot('stacked_bar_annual_cost', data, layout);


    // Dropdown bar chart
    var data2 = [
        {
            x: x_axis,
            y: y_food,
            name: 'cost for food',
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
        
        Plotly.newPlot('dropdown_bar_annual_cost', data2, {
        updatemenus: [{
            y: 1,
            yanchor: 'top',
            buttons: [
            {
                method: 'restyle',
                args: ['visible', [false, false, false, false,false, false, false,false, true]],
                label: 'total'
            },{
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
            }]
        }],
    });
    

    //capital cost
    var json_capital_cost = JSON.parse(cost_data[1])

    var y_carrier = [];
    var y_crate = [];
    var y_leash = [];
    var y_neuter = [];
    var y_initialMedical = [];
    var y_litterBox = [];
    var y_scratchingPost = [];
    var y_training = [];
    var y_total2 = [];


    // data cleaning for capital cost
    json_capital_cost.forEach(function(cost){
        if (cost["Items"] == "Carrier bag") {
            y_carrier.push(cost["Sm_Dog"])
            y_carrier.push(cost["Med_Dog"])
            y_carrier.push(cost["Lg_Dog"])
            y_carrier.push(cost["Cat"])

        } else if (cost["Items"] == "Crate") {
            y_crate.push(cost["Sm_Dog"])
            y_crate.push(cost["Med_Dog"])
            y_crate.push(cost["Lg_Dog"])
            y_crate.push(cost["Cat"])

        } else if (cost["Items"] == "Collar/Leash") {
            y_leash.push(cost["Sm_Dog"])
            y_leash.push(cost["Med_Dog"])
            y_leash.push(cost["Lg_Dog"])
            y_leash.push(cost["Cat"])

        } else if (cost["Items"] == "Spay/neuter") {
            y_neuter.push(cost["Sm_Dog"])
            y_neuter.push(cost["Med_Dog"])
            y_neuter.push(cost["Lg_Dog"])
            y_neuter.push(cost["Cat"])

        } else if (cost["Items"] == "Other initial Medical") {
            y_initialMedical.push(cost["Sm_Dog"])
            y_initialMedical.push(cost["Med_Dog"])
            y_initialMedical.push(cost["Lg_Dog"])
            y_initialMedical.push(cost["Cat"])

        } else if (cost["Items"] == "Litter Box") {
            y_litterBox.push(cost["Sm_Dog"])
            y_litterBox.push(cost["Med_Dog"])
            y_litterBox.push(cost["Lg_Dog"])
            y_litterBox.push(cost["Cat"])

        } else if (cost["Items"] == "Scratching Post") {
            y_scratchingPost.push(cost["Sm_Dog"])
            y_scratchingPost.push(cost["Med_Dog"])
            y_scratchingPost.push(cost["Lg_Dog"])
            y_scratchingPost.push(cost["Cat"])

        } else if (cost["Items"] == "Training class") {
            y_training.push(cost["Sm_Dog"])
            y_training.push(cost["Med_Dog"])
            y_training.push(cost["Lg_Dog"])
            y_training.push(cost["Cat"])

        } else if (cost["Items"] == "Capital Total") {
            y_total2.push(cost["Sm_Dog"])
            y_total2.push(cost["Med_Dog"])
            y_total2.push(cost["Lg_Dog"])
            y_total2.push(cost["Cat"])

        } else {

        }

    })

    // Stacked bar chart
    var carrier = {
        x: x_axis,
        y: y_carrier,
        name: 'cost for carrier',
        type: 'bar'
      };
    
    var crate = {
      x: x_axis,
      y: y_crate,
      name: 'cost for crate',
      type: 'bar'
    };

    var leash = {
        x: x_axis,
        y: y_leash,
        name: 'cost for leash',
        type: 'bar'
      };

      var neuter = {
        x: x_axis,
        y: y_neuter,
        name: 'cost for neuter',
        type: 'bar'
      };

      var initialMedical = {
        x: x_axis,
        y: y_initialMedical,
        name: 'cost for Initial Medical',
        type: 'bar'
      };

      var litterBox = {
        x: x_axis,
        y: y_litterBox,
        name: 'cost for litter box',
        type: 'bar'
      };

      var scratchingPost = {
        x: x_axis,
        y: y_scratchingPost,
        name: 'cost for scratching post',
        type: 'bar'
      };

      var training = {
        x: x_axis,
        y: y_training,
        name: 'cost for training',
        type: 'bar'
      };

      var data3 = [carrier, crate, leash, neuter, initialMedical, litterBox, scratchingPost, training];
    
      var layout = {barmode: 'stack'};
      
    Plotly.newPlot('stacked_bar_capital_cost', data3, layout);

    // Dropdown bar chart for capital cost
    var data4 = [
        {
            x: x_axis,
            y: y_carrier,
            name: 'cost for carrier',
            type: 'bar'
        },
        {
            x: x_axis,
            y: y_crate,
            name: 'cost for crate',
            type: 'bar'
        },
        {
            x: x_axis,
            y: y_leash,
            name: 'cost for leash',
            type: 'bar'
        },
        {
            x: x_axis,
            y: y_neuter,
            name: 'cost for neuter',
            type: 'bar'
        },
        {
            x: x_axis,
            y: y_initialMedical,
            name: 'cost for Initial Medical',
            type: 'bar'
        },
        {
            x: x_axis,
            y: y_litterBox,
            name: 'cost for litter box',
            type: 'bar'
        },
        {
            x: x_axis,
            y: y_scratchingPost,
            name: 'cost for scratching post',
            type: 'bar'
        },
        {
            x: x_axis,
            y: y_training,
            name: 'cost for training',
            type: 'bar'
        },
        {
            x: x_axis,
            y: y_total2,
            name: 'cost for total capital costs',
            type: 'bar'
        }]; 
        
        Plotly.newPlot('dropdown_bar_capital_cost', data4, {
        updatemenus: [{
            y: 1,
            yanchor: 'top',
            buttons: [{
                method: 'restyle',
                args: ['visible', [false, false, false, false,false, false, false,false, true]],
                label: 'total'
            }, {
                method: 'restyle',
                args: ['visible', [true, false, false, false,false, false, false,false, false]],
                label: 'Carrier bag'
            }, {
                method: 'restyle',
                args: ['visible', [false, true, false, false,false, false, false,false, false]],
                label: 'Crate'
            }, {
                method: 'restyle',
                args: ['visible', [false, false, true, false,false, false, false,false, false]],
                label: 'Collar/Leash'
            }, {
                method: 'restyle',
                args: ['visible', [false, false, false, true,false, false, false,false, false]],
                label: 'Spay/neuter'
            }, {
                method: 'restyle',
                args: ['visible', [false, false, false, false,true, false, false,false, false]],
                label: 'Other initial Medical'
            }, {
                method: 'restyle',
                args: ['visible', [false, false, false, false,false, true, false,false, false]],
                label: 'Litter Box'
            }, {
                method: 'restyle',
                args: ['visible', [false, false, false, false,false, false, true,false, false]],
                label: 'Scratching Post'
            }, {
                method: 'restyle',
                args: ['visible', [false, false, false, false,false, false, false,true, false]],
                label: 'Training class'
            }]
        }],
    });
   
}


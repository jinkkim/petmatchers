function drawPlot(cap_cost_data){
    var json_cap_cost = JSON.parse(cap_cost_data)
    var x_axis = ["Small dog", "Medium dog", "Large dog", "Cat"];
    
    var y_Cage = [];
    var y_Carrierbag = [];
    var y_Crate = [];
    var y_CollarLeash = [];
    var y_Spayneuter = [];
    var y_AquariumEqpt = [];
    var y_OtherinitialMedical = [];
    var y_LitterBox = [];
    var y_ScratchingrPost = [];
    var y_Trainingclass = [];
    var y_CapitalTotal = [];




    //data cleaning
    json_cap_cost.forEach(function(cap_cost){
        if (cap_cost["Items"] == "Cage") {
            y_food.push(cap_cost["Sm_Dog"])
            y_food.push(cap_cost["Med_Dog"])
            y_food.push(cap_cost["Lg_Dog"])
            y_food.push(cap_cost["Cat"])

        } else if (cap_cost["Items"] == "Carrierbag") {
            y_medical.push(cap_cost["Sm_Dog"])
            y_medical.push(cap_cost["Med_Dog"])
            y_medical.push(cap_cost["Lg_Dog"])
            y_medical.push(cap_cost["Cat"])

        } else if (cap_cost["Items"] == "Crate") {
            y_litter.push(cap_cost["Sm_Dog"])
            y_litter.push(cap_cost["Med_Dog"])
            y_litter.push(cap_cost["Lg_Dog"])
            y_litter.push(cap_cost["Cat"])

        } else if (cap_cost["Items"] == "Collar/Leash") {
            y_toy.push(cap_cost["Sm_Dog"])
            y_toy.push(cap_cost["Med_Dog"])
            y_toy.push(cap_cost["Lg_Dog"])
            y_toy.push(cap_cost["Cat"])

        } else if (cap_cost["Items"] == "Spay/neuter") {
            y_license.push(cap_cost["Sm_Dog"])
            y_license.push(cap_cost["Med_Dog"])
            y_license.push(cap_cost["Lg_Dog"])
            y_license.push(cap_cost["Cat"])

        } else if (cap_cost["Items"] == "Other initial Medical") {
            y_insurance.push(cap_cost["Sm_Dog"])
            y_insurance.push(cap_cost["Med_Dog"])
            y_insurance.push(cap_cost["Lg_Dog"])
            y_insurance.push(cap_cost["Cat"])

        } else if (cap_cost["Items"] == "Litter Box") {
            y_misc.push(cap_cost["Sm_Dog"])
            y_misc.push(cap_cost["Med_Dog"])
            y_misc.push(cap_cost["Lg_Dog"])
            y_misc.push(cap_cost["Cat"])

        } else if (cap_cost["Items"] == "Scratching Post") {
            y_groom.push(cap_cost["Sm_Dog"])
            y_groom.push(cap_cost["Med_Dog"])
            y_groom.push(cap_cost["Lg_Dog"])
            y_groom.push(cap_cost["Cat"])
        
        } else if (cap_cost["Items"] == "Training class") {
            y_groom.push(cap_cost["Sm_Dog"])
            y_groom.push(cap_cost["Med_Dog"])
            y_groom.push(cap_cost["Lg_Dog"])
            y_groom.push(cap_cost["Cat"])

        } else if (cap_cost["Items"] == "Capital Total") {
            y_total.push(cap_cost["Sm_Dog"])
            y_total.push(cap_cost["Med_Dog"])
            y_total.push(cap_cost["Lg_Dog"])
            y_total.push(cap_cost["Cat"])

        } else {

        }

    })

    // Stacked bar chart
    var Cage = {
        x: x_axis,
        y: y_Cage,
        name: 'cost for food',
        type: 'bar'
      };
    
    var Carrierbag = {
      x: x_axis,
      y: y_Carrierbag,
      name: 'cost for medical',
      type: 'bar'
    };

    var Crate = {
        x: x_axis,
        y: y_Crate,
        name: 'cost for litter',
        type: 'bar'
      };

      var CollarLeash = {
        x: x_axis,
        y: y_CollarLeash,
        name: 'cost for toy',
        type: 'bar'
      };

      var Spayneuter = {
        x: x_axis,
        y: y_Spayneuter,
        name: 'cost for license',
        type: 'bar'
      };

      var OtherinitialMedical = {
        x: x_axis,
        y: y_OtherinitialMedical,
        name: 'cost for insurance',
        type: 'bar'
      };

      var LitterBox = {
        x: x_axis,
        y: y_LitterBox,
        name: 'cost for misc',
        type: 'bar'
      };

      var ScratchingPost = {
        x: x_axis,
        y: y_ScratchingrPost,
        name: 'cost for groom',
        type: 'bar'
      };

      var Trainingclass = {
        x: x_axis,
        y: y_Trainingclass,
        name: 'cost for groom',
        type: 'bar'
      };

      var CapitalTotal = {
        x: x_axis,
        y: y_CapitalTotal,
        name: 'cost for groom',
        type: 'bar'
      };

      var cap_data = [Cage, Carrierbag, Crate, CollarLeash, Spayneuter, OtherinitialMedical, LitterBox, ScratchingPost, Trainingclass, CapitalTotal];
    
      var layout = {barmode: 'stack'};
      
    Plotly.newPlot('stacked_bar2', cap_data, layout);


   // // Dropdown bar chart
   // var data2 = [
   //     {
   //         x: x_axis,
   //         y: y_food,
   //         name: 'cost for food',
   //         type: 'bar'
   //     },
   //     {
   //         x: x_axis,
   //         y: y_medical,
   //         name: 'cost for medical',
   //         type: 'bar'
   //     },
   //     {
   //         x: x_axis,
   //         y: y_litter,
   //         name: 'cost for litter',
   //         type: 'bar'
   //     },
   //     {
   //         x: x_axis,
   //         y: y_toy,
   //         name: 'cost for toy',
   //         type: 'bar'
   //     },
   //     {
   //         x: x_axis,
   //         y: y_license,
   //         name: 'cost for license',
   //         type: 'bar'
   //     },
   //     {
   //         x: x_axis,
   //         y: y_insurance,
   //         name: 'cost for insurance',
   //         type: 'bar'
   //     },
   //     {
   //         x: x_axis,
   //         y: y_misc,
   //         name: 'cost for misc',
   //         type: 'bar'
   //     },
   //     {
   //         x: x_axis,
   //         y: y_groom,
   //         name: 'cost for groom',
   //         type: 'bar'
   //     },
   //     {
   //         x: x_axis,
   //         y: y_total,
   //         name: 'cost for total',
   //         type: 'bar'
   //     }]; 
   //     
   //     Plotly.newPlot('dropdown_bar', data2, {
   //     updatemenus: [{
   //         y: 1,
   //         yanchor: 'top',
   //         buttons: [{
   //             method: 'restyle',
   //             args: ['visible', [true, false, false, false,false, false, false,false, false]],
   //             label: 'food'
   //         }, {
   //             method: 'restyle',
   //             args: ['visible', [false, true, false, false,false, false, false,false, false]],
   //             label: 'medical'
   //         }, {
   //             method: 'restyle',
   //             args: ['visible', [false, false, true, false,false, false, false,false, false]],
   //             label: 'litter'
   //         }, {
   //             method: 'restyle',
   //             args: ['visible', [false, false, false, true,false, false, false,false, false]],
   //             label: 'toy'
   //         }, {
   //             method: 'restyle',
   //             args: ['visible', [false, false, false, false,true, false, false,false, false]],
   //             label: 'license'
   //         }, {
   //             method: 'restyle',
   //             args: ['visible', [false, false, false, false,false, true, false,false, false]],
   //             label: 'insurance'
   //         }, {
   //             method: 'restyle',
   //             args: ['visible', [false, false, false, false,false, false, true,false, false]],
   //             label: 'misc'
   //         }, {
   //             method: 'restyle',
   //             args: ['visible', [false, false, false, false,false, false, false,true, false]],
   //             label: 'groom'
   //         }, {
   //             method: 'restyle',
   //             args: ['visible', [false, false, false, false,false, false, false,false, true]],
   //             label: 'total'
   //         }]
   //     }],
   // });
   // 
//
//
//
//
   // 
}//
//

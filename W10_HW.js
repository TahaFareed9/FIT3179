var vg_1 = "W10_HW_MAP.vg.json";

vegaEmbed("#W10_map", vg_1)
  .then(function (result) {
    //("https://vega.github.io/vega/docs/api/view/") as result.view
  })
  .catch(console.error);

var vg_2 = "W10_HW_TRELLIS.vg.json";

vegaEmbed("#W10_area_trellis", vg_2)
  .then(function (result) {
  
  })
  .catch(console.error);
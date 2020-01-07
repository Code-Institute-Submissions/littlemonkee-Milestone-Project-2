const dataURL = "https://swapi.co/api/";

function fetchData(type, cb) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cb(JSON.parse(this.responseText));

    }
  };

  xhr.open("GET", dataURL + type);
  xhr.send();
}

var results1;

function dataSelection(type) {
  results1 = '';
  var filmChosen;
  var male = 0,
    female = 0,
    other = 0;
  var filmChoice = document.getElementsByName("films"); // LOOP THRU FILMS CHECKBOXES AND RETURN CHECKED OPTION

  for (var i = 0; i < filmChoice.length; i++) {
    if (filmChoice[i].checked == true) {
      filmChosen = filmChoice[i].value;
      console.log("Film chosen: " + filmChosen);
    }
  }

  for (i = 1; i < 11; i++) { // NUMBER OF TIMES TO ITERATE WRT NUMBER OF PAGES

    fetchData(type + "/?page=" + i, function(myData) // GET SELECTED DATA FROM API FOR SPECIFIED PAGE
      {
        var optionObject1 = myData.results;
        var text = [];

        // var optionObject2 = data.count;
        // var optionObject3 = data;

        for (var i = 0; i < optionObject1.length; i++) { // GET ALL PERSON RESULTS FROM  EACH PAGE OF THE API

          var obj = optionObject1[i]; // THE 'PERSON' AND THEIR ASSOCIATED ATTRIBUTES

          for (var j = 0; j < optionObject1[i]["films"].length; j++) { // LOOP THROUGH EACH FILM ASSOCIATED WITH THE PERSON

            var film = optionObject1[i]["films"][j];
            //    console.log(film);
            var filmNo = film.charAt(film.length - 2);

            if (filmChosen === filmNo) {

              if (obj["gender"] === "male") {
                male++;
              }
              else if (obj["gender"] === "female") {
                female++;
              }
              else {
                other++;
              }
            }
          }
        }
        results1 = [{ "type": "male", "number": male }, { "type": "female", "number": female }, { "type": "other", "number": other }];
        // console.log(results);
        // console.log(typeof(results));
        //return results1;
        drawGraph();
      });

  }

}



function drawGraph() {
  d3.select("svg").remove();

  var w = 400, //width
    h = 400, //height
    r = 200, //radius
    color = d3.scale.category20c(); //builtin range of colors

  var data = results1;

  var vis = d3.select("#draw-here")
    .append("svg:svg")
    .data([data])
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 " + w + " " + h)
    .classed("svg-content-responsive", true)
    .attr("width", w)
    .attr("height", h)
    .append("svg:g")
    .attr("transform", "translate(" + r + "," + r + ")");

  var arc = d3.arc() //this will create <path> elements for us using arc data
    .innerRadius(0)
    .outerRadius(r)
    .padRadius(50);

  var pie = d3.layout.pie() //this will create arc data for us given a list of values
    .value(function(d) { return d.number; }); //we must tell it to access the value of each element in our data array

  //var pie = d3.pie().sort(null).value(function(d) { return d.number; })(data);

  var arcs = vis.selectAll("g.slice") //this selects all <g> elements with class slice (there aren't any yet)
    .data(pie) //associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties) 
    .enter() //this will create <g> elements for every "extra" data element that should be associated with a selection. The result is creating a <g> for every object in the data array
    .append("svg:g") //create a group to hold each slice (we will have a <path> and a <text> element associated with each slice)
    .attr("class", "slice"); //allow us to style things in the slices (like text)

  arcs.append("svg:path")
    .attr("fill", function(d, i) { return color(i); }) //set the color for each slice to be chosen from the color function defined above
    .attr("d", arc); //this creates the actual SVG path using the associated data (pie) with the arc drawing function

  arcs.append("svg:text") //add a label to each slice
    .attr("transform", function(d) { //set the label's origin to the center of the arc
      //we have to make sure to set these before calling arc.centroid
      d.innerRadius = 0;
      d.outerRadius = r;
      return "translate(" + arc.centroid(d) + ")"; //this gives us a pair of coordinates like [50, 50]
    })
    .attr("text-anchor", "middle") //center the text on it's origin
    .text(function(d, i) { return data[i].type; }); //get the label from our original data array


}

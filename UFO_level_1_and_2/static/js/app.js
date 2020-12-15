var tableData = data;

tbody = d3.select("tbody")
console.log("ciao")

// Create a loop & use Object
function loop(something){ 
    tbody.text("")
    something.forEach(function(ufo){
    tr_data = tbody.append("tr")
    Object.entries(ufo).forEach(function([key, value]){
        addRow = tr_data.append("td").text(value)	
    })
})}

loop(tableData)

var submitID = d3.select("#submit");

submitID.on("click", function() {

  d3.event.preventDefault();

  var Input_date = d3.select("#datetime");
  var Input_city = d3.select("#city");
  var Input_state = d3.select("#state");
  var Input_country = d3.select("#country");
  var Input_shape = d3.select("#shape");

 
  console.log(Input_date.property(""));
  console.log(Input_city.property("value"));
  console.log(Input_state.property("value"));
  console.log(Input_country.property("value"));
  console.log(Input_shape.property("value"));

  //Generate a filtering loop

 var loopData = tableData.filter(ufo =>{
  return (ufo.datetime===Input_date.property("value") || !Input_date.property("value") ) && 
            (ufo.city===Input_city.property("value") || !Input_city.property("value")) &&
            (ufo.state===Input_state.property("value") || !Input_state.property("value")) &&
            (ufo.country===Input_country.property("value") || !Input_country.property("value")) &&
            (ufo.shape===Input_shape.property("value") || !Input_shape.property("value"))
 })

  loop(loopData);


});

var filterData = d3.selectAll('.form-control');

// Reset data and empty fields

function clearEntries() {
    filters = {};
   
    filterData._groups[0].forEach(par => {
        if (par.value != 0) {
            d3.select('#' + par.id).node().value = "";
        }
    });
};

var Reset = d3.select("#clear");


Reset.on('click', function () {


    clearEntries()
});
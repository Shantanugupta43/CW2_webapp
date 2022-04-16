var pageCounter = 1;
var moduleContainer = document.getElementById('module-info');
var btn = document.getElementById("btn");
var addinglist = document.getElementById("addlist")


btn.addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://raw.githubusercontent.com/Shantanugupta43/CW2_webapp/master/module-'+ pageCounter +'.json');
  ourRequest.onload = function(){
    //console.log(ourRequest.responseText);
    var data = JSON.parse(ourRequest.responseText);
    //console.log(ourData[0]);
    renderHTML(data);
  };
  ourRequest.send();
pageCounter++;
if (pageCounter > 4){
//btn.classList.add("hide-me");
  btn.disabled = true;
}
});









function renderHTML(data){
  var htmlString = "";

  for(i = 0; i < data.length; i++){
    htmlString += "<p>" + data[i].Course + " is a " + data[i].Name + " programme that has assements "; //".</p>";
    for(ii = 0; ii < data[i].Module.Assignment.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.Assignment[ii];
      } else {
        htmlString += " and " + data[i].Module.Assignment[ii];
      }
    }
    htmlString += ' and Learning Outcome ';
    for(ii = 0; ii < data[i].Module.Learning_outcomes.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.Learning_outcomes[ii];
      } else {
        htmlString += " and " + data[i].Module.Learning_outcomes[ii];
      }
    }

    htmlString += ' and Volume ';
    for(ii = 0; ii < data[i].Module.Volume.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.Volume[ii];
      } else {
        htmlString += " and " + data[i].Module.Volume[ii];
      }
    }

    htmlString += ' and credits ';
    for(ii = 0; ii < data[i].Module.credits.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.credits[ii];
      } else {
        htmlString += " and " + data[i].Module.credits[ii];
      }
    }


    htmlString += ' and hours ';
    for(ii = 0; ii < data[i].Module.hours.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.hours[ii];
      } else {
        htmlString += " and " + data[i].Module.hours[ii];
      }
    }





    htmlString += ' and weights ';
    for(ii = 0; ii < data[i].Module.weights.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.weights[ii];
      } else {
        htmlString += " and " + data[i].Module.weights[ii];
      }
    }
    htmlString += '.</p>';
  }


  moduleContainer.insertAdjacentHTML('beforeend', htmlString);

  degreeHTML(data);

}



function moduleHTML(data) {

  var htmlString = "";



  for(i = 0; i < data.length; i++){
    htmlString += "<h2>" + data[i].Course + " - - " + data[i].Name + "</h2>";
    for(ii = 0; ii < data[i].code.length; ii++){
      if (ii == 0){
        htmlString += "<h4> ID: " + data[i].code[ii] + "</h4>";


        htmlString += "Module led by: " + data[i].Module.Academic[0];
        htmlString += "<ul><li>" + data[i].Module.Name[0] + "<p> Module Time Slots Each week: </p>" + data[i].Module.Time_table_name1[0] + "</li></ul>";
        htmlString += "<ul><li>" + data[i].Module.Name[1] + "<p> Module Time Slots Each week: </p>" + data[i].Module.Time_table_name2[0] + "</li></ul>";
        htmlString += "<ul><li>" + data[i].Module.Name[2] +  "<p> Module Time Slots Each week: </p>" + data[i].Module.Time_table_name3[0] + "</li></ul>";
        






        







        

        

        
      }

    }
  

  
  
  
  
  }


  htmlString += `<p><form>
  <label for="webdev">Add Module Name in : Web dev  </label><p>
  <input type="text" id="webdev" name="webdev">`;

  htmlString += `<p><form>
  <label for="bigdata">Add Module Name in : Big data  </label><p>
  <input type="bigdata" id="bigdata" name="bigdata">`;

  htmlString += `<p><form>
  <label for="bigdata">Add Module Name in : Data Mining  </label><p>
  <input type="bigdata" id="datamining" name="datamining">`;


  b = document.createElement('button');
  b.innerText = 'Click to update new modules'
  b.id = 'list'
  b.addEventListener('click', () => {
    storenewmodulesHTML();
      
  });
  document.body.appendChild(b)



  moduleContainer.insertAdjacentHTML('beforeend', htmlString);


    

   






}







function degreeHTML(data) {

  var htmlString = "";

  htmlString += "<h3>" + "Teaching related activities" + "</h3>";
  htmlString += "<p>" + "Degree programmes";

  for(i = 0; i < data.length; i++){
    htmlString += "<p>" + data[i].Course + " - - " + data[i].Name + " - - ";
    for(ii = 0; ii < data[i].code.length; ii++){
      if (ii == 0){
        htmlString += " ID: " + data[i].code[ii];
        htmlString += "<p> Learning outcome: " + data[i].learning[0];





        

        

        
      }

    }
  
  
  
  
  
  
  }

  button = document.createElement('button');
  button.innerText = 'Click to view modules'
  button.id = 'mod'
  button.addEventListener('click', () => {
    moduleHTML(data);
  });
  document.body.appendChild(button)



  e = document.createElement('button');
  e.innerText = 'Click to Add Degree'
  e.id = 'degreeadd'
  e.addEventListener('click', () => {
    adddegreeHTML();
  });
  document.body.appendChild(e)










    moduleContainer.insertAdjacentHTML('beforeend', htmlString);






}



function adddegreeHTML() {

  var htmlString = "";

  htmlString += "<h3>" + "Add a Degree and its modules" + "</h3>";
  htmlString += `<p><form>
  <label for="degree1">Add a new degree:  </label><p>
  <input type="text" id="degree1" name="degree1">`;

  htmlString += `<p><form>
  <label for="module1">Add a New or Existing Module:  </label><p>
  <input type="text" id="module1" name="module1">`;


  f = document.createElement('button');
  f.innerText = 'Click to Add New Degree and modules'
  f.id = 'degreeadd'
  f.addEventListener('click', () => {
    storedegreeHTML();
  });
  document.body.appendChild(f)

























    moduleContainer.insertAdjacentHTML('beforeend', htmlString);






}

function storedegreeHTML() {

  var htmlString = "";

  htmlString += "<p>" + "New degree and module generated!" + "</p>";


  degnew = document.getElementById("degree1");
  modnew = document.getElementById("module1");


  htmlString += "<h3>" + degnew.value + "</h3>";
  htmlString += "<p> Module </p>"
  htmlString += "<ul><li>" + modnew.value + "</li></ul>";





























    moduleContainer.insertAdjacentHTML('beforeend', htmlString);






}



function storenewmodulesHTML() {

  var htmlString = "";

  htmlString += "<h3>" + "New modules" + "</h3>";


  webdev = document.getElementById("webdev");
  bigdata = document.getElementById("bigdata");
  mining = document.getElementById("datamining");



  htmlString += "<p> New Module added in webdev </p>";


  htmlString += "<ul><li>" + webdev.value + "</li></ul>";

  htmlString += "<p> New Module added in Big Data </p>";
  htmlString += "<ul><li>" + bigdata.value + "</li></ul>";

  htmlString += "<p> New Module added in Data Mining </p>";
  htmlString += "<ul><li>" + mining.value + "</li></ul>";





























    moduleContainer.insertAdjacentHTML('beforeend', htmlString);






}
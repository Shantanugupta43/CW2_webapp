var pageCounter = 1;
var moduleContainer = document.getElementById('module-info');
var btn = document.getElementById("btn");


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

  teachingHTML(data);

}




function teachingHTML(data) {

  var htmlString = "";

  for(i = 0; i < data.length; i++){
    htmlString += "<p>" + data[i].Name + " is a " + data[i].Course + " has assements "; //".</p>";
    for(ii = 0; ii < data[i].Module.Assignment.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.Assignment[ii];
      } else {
        htmlString += " and " + data[i].Module.Assignment[ii];
      }
    }
  }



    moduleContainer.insertAdjacentHTML('beforeend', htmlString);






}






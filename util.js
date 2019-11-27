

function
getResponse(){
  // Selecting the input element and get its value
  var inputVal = document.getElementById("myInput").value;
  var showtext = "";
  // Displaying the value
  if (inputVal == "") {
    return;
  }
  if (inputVal == "yes") {
    showtext = "Do you want to see this again?<br>";
    //alert("y");
  } else {
    //alert("n");
  }
  document.getElementById('shadow').value = inputVal;
  document.getElementById('myInput').value = '';
  document.getElementById("story").innerHTML += showtext;
}

function
getInput(){
  document.getElementById('myInput').value = document.getElementById('shadow').value;

}


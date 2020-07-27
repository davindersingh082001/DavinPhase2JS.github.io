
var input = document.getElementById('input1');          //Selecting elements by their ids
var cityname = document.getElementById('cityname');
var temp = document.getElementById('temp');
var data = document.getElementById('info');
var button= document.getElementById('submit1');
var adddiv=document.getElementById('adddiv');

button.addEventListener('click', function(){    //adding event handler to run function
//fetching third party's Api using Api key
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=cb6e3edac30349f7991dbcbd69d5ab43')       
    .then(response => response.json())  //getting promised response in json format
    .then(value => {  
        var data2 = value['main']['temp'];      //getting values like temp, weather detail and name of the searched city
        var data1 = value['name'];   
        var data3 = value['weather'][0]['description'];
      
        cityname.innerHTML = data1;                     //assigning values to the elements
        data.innerHTML = "Weather Info: "+data3;
        temp.innerHTML = "Temperature: "+data2;
        input.value ="";                //reseting input value at the end of the function
        
    })
    
    .catch(err => alert("Invalid city name!!!! Try Again"));        //setting error message in case we enter wrong city name or something else
    })
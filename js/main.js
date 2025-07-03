var city = document.querySelector("#home .today-footer .city");
var temp = document.querySelector("#home .today-footer .degree .num");
var is_day = document.querySelector("#home .today-footer .degree .degree-icon");
var custom = document.querySelector("#home .today-footer .custom");
var custom1 = document.querySelectorAll("#home .today-footer span");
var tomorrow_maxtemp = document.querySelector("#home .tomorrow-footer .degree .num");
var tomorrow_mintemp = document.querySelector("#home .tomorrow-footer .degree .num-2");
var tomorrow_custom = document.querySelector("#home .tomorrow-footer .custom");
var third_maxtemp = document.querySelector("#home .tomorrow-footer2 .degree .num");
var third_mintemp = document.querySelector("#home .tomorrow-footer2 .degree .num-2");
var third_custom = document.querySelector("#home .tomorrow-footer2 .custom");
var today_day = document.querySelector("#home .today-head .day");
var today_date = document.querySelector("#home .today-head .date");
var tomorrow_day = document.querySelector("#home .tomorrow-head .day")
var third_day = document.querySelector("#home .tomorrow-weather .today-head .day")
var searchBox = document.getElementById("search");
var btnBox = document.getElementById("submit");
// console.log(searchBox.value);
// console.log(btnBox);


searchBox.addEventListener("keyup",function(){
    displaycity(searchBox.value);
})
btnBox.addEventListener("click",function(){
    displaycity(searchBox.value);
})




// var city2;
// async function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition
//     ((position)=>{
//         var bdcapi = `https://api-bdc.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`
//         getAPI(bdcapi)
//     },
//     (error)=>{
//       alert("Sorry, no position available.");
//     });
//   } else {
//     city.innerHTML = "Geolocation is not supported by this browser.";
//   }
  
// }

// async function getAPI(bdcapi){
//     var res = await fetch(bdcapi)
//     var loc = await res.json();
//     city2=loc.city;
//     console.log(city2);
//     city.innerHTML=loc.city;
// }














var api="68bf994bb10a44b68c0183925252706";

async function displaycity(cityName){
var response =await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${api}&q=${cityName}&days=3&aqi=no&alerts=no`)
var data =await response.json();



if(!data.error){
var location = data.location.name;
var degree = data.current.temp_c;
var is_Day = data.current.is_day;
var clear = data.current.condition.text;
var humidity = data.current.humidity;
var wind_speed= data.current.wind_kph;
var wind_dir = data.current.wind_dir;
var Tomorrow_maxtemp = data.forecast.forecastday[1].day.maxtemp_c;
var Tomorrow_mintemp = data.forecast.forecastday[1].day.mintemp_c;
var Tomorrow_custom = data.forecast.forecastday[1].day.condition.text
var Third_maxtemp = data.forecast.forecastday[2].day.maxtemp_c;
var Third_mintemp = data.forecast.forecastday[2].day.mintemp_c;
var Third_custom = data.forecast.forecastday[2].day.condition.text;
var day=data.current.last_updated;
var Today_day=new Date(day);
var Today_day1=Today_day.getDay();
var Today_date=Today_day.getDate();
var Today_month=Today_day.getMonth();


var nextDay=data.forecast.forecastday[1].date;
var Tomorrow_day=new Date(nextDay);
var Tomorrow_day1=Tomorrow_day.getDay();

var thirdDay=data.forecast.forecastday[2].date;
var Third_day=new Date(thirdDay);
var Third_day1=Third_day.getDay();



const dayNames = ["Sunday", "Monday", "Tuesday" ,"Wednesday","Thursday","Friday","Saturday"];
const monthNames = ["January", "February", "March","April","May","June","July","August","Septamber","October","November","December" ];







if(is_Day===0){
    is_day.innerHTML='<img src="images/113 (1).png" alt="" width="90px">'
}else{
    is_day.innerHTML='<img src="images/113.png" alt="" width="90px">'
}
city.innerHTML=location;
temp.innerHTML=degree+"<sup>o</sup>C";
custom.innerHTML=clear;
custom1[0].innerHTML='<img src="images/icon-umberella.png" alt=""> '+ humidity  + "%";
custom1[1].innerHTML='<img src="images/icon-wind.png" alt=""> '+ wind_speed  + "km/h";
custom1[2].innerHTML='<img src="images/icon-compass.png" alt=""> '+ wind_dir ;

tomorrow_maxtemp.innerHTML=Tomorrow_maxtemp+"<sup>o</sup>C";
tomorrow_mintemp.innerHTML=Tomorrow_mintemp+"<sup>o</sup>C";
tomorrow_custom.innerHTML=Tomorrow_custom;

third_maxtemp.innerHTML=Third_maxtemp+"<sup>o</sup>C";
third_mintemp.innerHTML=Third_mintemp+"<sup>o</sup>C";
third_custom.innerHTML=Third_custom;


today_day.innerHTML=dayNames[Today_day1];
today_date.innerHTML=Today_date+monthNames[Today_month];

tomorrow_day.innerHTML=dayNames[Tomorrow_day1];

third_day.innerHTML=dayNames[Third_day1];


}





}
  
displaycity("cairo");
    

const API_KEY = '24b48dfb3291728d0268213e51d94794';

function onGeoSuccess(position){
  const lat=position.coords.latitude;
  const lon=position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response)=>response.json()).then((data)=>{
    const weather = document.querySelector('#weather')
    const city = document.querySelector('#city')
    const temp = document.querySelector('#temp-min-max')
    city.innerText = data.name;
    weather.innerText = data.weather[0].main;
    temp.innerText =`temp-min : ${data.main.temp_min}, temp-max : ${data.main.temp_max}`;});
}
function onGeoErr(){
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoErr)
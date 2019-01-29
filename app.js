window.addEventListener("load", ()=> {
    let long;
    let lat;
    
    if(navigator.geolcation){
        navigator.geolcation.getCurrentPostion(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
    const api =`https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139/${lat},${long}`; 
    
    fetch(api);
        .then(response => {
            return response.json();
        })
        .then(data =>{
            
        });
    });
  }
});

// <p>api/current?lon=:longitude&lat=:latitud</p>
        // <p>https://fcc-weather-api.glitch.me/</p>
        // <p>weather[0].icon</p>


// else{
    //     h1.textContent = "your browser does not support this"
    // }
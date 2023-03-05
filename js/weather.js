function onGeoOk(position) {
    // position: getCurrentPosition이 주는 object
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}
  
// navigator.geolocation.getCurrentPosition(위치를 찾았을 때 함수, 못 찾았을 때 함수)
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
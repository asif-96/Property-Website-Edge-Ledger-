// Initialize and add the map
function initMap(){
    // Your location
    const loc = {lat: 24.894930, lng: 91.868706};
    // Centered map on location
    const map =  new google.maps.Map(document.querySelector('.map'),
        {
            zoom: 14,
            center: loc
        }
    );
    // Ther marker, positioned at location
    const marker = new google.maps.Marker({position: loc, map:
    map });
}
const initializeMap = () => {
    var map = L.map('map').setView([20.688378431264432, -105.29208653535487], 17)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        zoom: 20,
        scrollWheelZoom: false,
        center: [20.688378431264432, -105.29208653535487],
        attribution:
        '<a href="https://maps.app.goo.gl/ChyCXFJTszsBCKzR9" target="_blank">Open on Google Maps</a>',
    }).addTo(map)

    L.marker([20.688378431264432, -105.29208653535487]).addTo(map)
}
  
initializeMap()
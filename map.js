const initializeMap = () => {
    var map = L.map('map').setView([20.67485636299717, -103.4297946181008], 16)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        zoom: 15,
        scrollWheelZoom: false,
        center: [20.67485636299717, -103.4297946181008],
        attribution:
        '<a href="https://maps.app.goo.gl/P5cAsZ3MLniJ11Uw5" target="_blank">Open on Google Maps</a>',
    }).addTo(map)

    L.marker([20.67485636299717, -103.4297946181008]).addTo(map)
}
  
initializeMap()
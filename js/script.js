let scale = 1;
let locations = document.querySelector('.locations_wrapper');
document.querySelector('#plus').addEventListener('click', function () {
    scale += 0.05;
    locations.style.transform = `scale(${scale})`;
});
document.querySelector('#minus').addEventListener('click', function () {
    scale -= 0.05;
    locations.style.transform = `scale(${scale})`;
});
document.querySelectorAll('.marker').forEach((marker) => {
    marker.style.top = marker.dataset.y + '%';
    marker.style.left = marker.dataset.x + '%';
});

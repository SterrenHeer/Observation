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

let workload = document.querySelector('.workload');
let percentages = +workload.dataset.workload;
let color = '';
if (percentages <= 33) {
    color = '#a49d1b'
}
else if (percentages <= 77) {
    color= '#16821a'
}
else {
    color = '#823816'
}
let rate = Math.round(percentages * 1.1 / 10)

for (let i = 1; i <= 11; i++) {
    let div = document.createElement('div');
    if (i <= rate) {
        div.style.backgroundColor = color;
    } else {
        div.style.backgroundColor = '#323232';
    }
    workload.append(div);
}

let dots = document.querySelectorAll('.locations_wrapper .marker, .video .buttons button');
let len = dots.length / 2

dots.forEach((dot, index) => {
    dot.addEventListener('click', (e) => {
        dots.forEach(dot => dot.classList.remove('active'));
        dot.classList.add('active');
        if (dot.classList.contains('marker')) {
            dots[index + len].classList.add('active')
        } else {
            dots[index - len].classList.add('active')
        }
    });
});

function changeNotActivity(not) {
    not.forEach(dot => {
        dot.addEventListener('click', (e) => {
            not.forEach(dot => dot.classList.remove('active'));
            dot.classList.add('active');
        });
    });
}

changeNotActivity(document.querySelectorAll('.history.first .wrapper .item'))
changeNotActivity(document.querySelectorAll('.history.second .wrapper .item'))

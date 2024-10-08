let scale = 1;
let locations = document.querySelector('.locations_wrapper');

if (document.querySelector('.locations .buttons') != null) {
    document.querySelector('#plus').addEventListener('click', function () {
        scale += 0.05;
        locations.style.transform = `scale(${scale})`;
    });
    document.querySelector('#minus').addEventListener('click', function () {
        scale -= 0.05;
        locations.style.transform = `scale(${scale})`;
    });
}

document.querySelectorAll('.marker').forEach((marker) => {
    marker.style.top = marker.dataset.y + '%';
    marker.style.left = marker.dataset.x + '%';
});

if (document.querySelector('.workload') != null) {
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
}

let dots = document.querySelectorAll('.locations_wrapper .marker, .video .buttons button');
let len = dots.length / 2

dots.forEach((dot, index) => {
    dot.addEventListener('click', (e) => {
        dots.forEach(dot => dot.classList.remove('active'));
        dot.classList.add('active');
        if (document.querySelector('.video .buttons') != null && document.querySelector('.locations_wrapper') != null) {
            if (document.querySelector('.video .buttons') != null) {
                if (dot.classList.contains('marker')) {
                    dots[index + len].classList.add('active')
                } else {
                    dots[index - len].classList.add('active')
                }
            }
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

if (document.querySelector('.h_modal') != null) {
    modal('.h_modal', 'data-close', '.history_modal');
}
if (document.querySelector('.settings') != null) {
    modal('[data-settings]', 'data-close', '.settings');
}

if (document.querySelector('.settings_wrapper') != null) {
    tabs('.settings_header', '.settings_wrapper', '.settings_headers', 'active');
}

let targets = document.querySelectorAll('.main_section svg')
targets.forEach(target => {
    target.addEventListener('click', (e) => {
        let array = Array.prototype.slice.call(target.closest('.main_section').children)
        array.forEach(div => div.classList.toggle('hide'));
        target.closest('.main_section').querySelector('.full_opened').classList.toggle('flex')
    })
})

let inputs = document.querySelectorAll('.main_login input')
let button = document.querySelector('.main_login button')
inputs.forEach(input => {
    input.addEventListener('input', (e) => {
        button.classList.add('entered')
    })
})

let items = document.querySelectorAll('.settings_item')
items.forEach(item => {
    item.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', (e) => {
            item.querySelector('.top button').classList.add('entered')
        })
    })
    item.querySelector('button').addEventListener('click', (e) => {
        item.querySelector('button').classList.remove('entered')
    })
})

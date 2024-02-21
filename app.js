let number = document.querySelectorAll('.number');
let display = document.getElementById('display__numbers');




function addToDisplay(number) {
    let currentDisplay = display.innerHTML;
    if (currentDisplay === '0') {
        display.innerHTML = number;
    } else {
        display.innerHTML = currentDisplay += number;
    }
    return display.innerHTML;
}


function equal() {
    display.innerHTML = eval(display.innerHTML);
}

function res() {
    display.innerHTML = '0';
}

function del() {
    let currentDisplay = (display.innerHTML).slice(0, -1);

    if (parseInt(display.innerHTML) < 10) {
        display.innerHTML = '0'
    } else {
        display.innerHTML = currentDisplay;
    }
    return currentDisplay;
}


//Toggle Switch
let theme1 = document.getElementById('theme1');
let theme2 = document.getElementById('theme2');
let theme3 = document.getElementById('theme3');

let toggleBtn = document.getElementById('toggle__btn');

toggleBtn.addEventListener('click', () => {
    if (toggleBtn.classList.contains('toggle_one')) {
        toggleBtn.classList.replace('toggle_one', 'toggle_two');

        document.body.classList.add('theme_2');
        document.body.classList.remove('theme_1', 'theme_3');

    } else if (toggleBtn.classList.contains('toggle_two')) {
        toggleBtn.classList.replace('toggle_two', 'toggle_three');

        document.body.classList.add('theme_3');
        document.body.classList.remove('theme_1', 'theme_2');

    } else if (toggleBtn.classList.contains('toggle_three')) {
        toggleBtn.classList.replace('toggle_three', 'toggle_one');

        document.body.classList.add('theme_1');
        document.body.classList.remove('theme_2', 'theme_3');
    }
})



theme1.addEventListener('click', () => {
    toggleBtn.classList.add('toggle_one');
    toggleBtn.classList.remove('toggle_two', 'toggle_three');

    document.body.classList.add('theme_1');
    document.body.classList.remove('theme_2', 'theme_3');
})

theme2.addEventListener('click', () => {
    toggleBtn.classList.add('toggle_two');
    toggleBtn.classList.remove('toggle_one', 'toggle_three');

    document.body.classList.add('theme_2');
    document.body.classList.remove('theme_1', 'theme_3');
})

theme3.addEventListener('click', () => {
    toggleBtn.classList.add('toggle_three');
    toggleBtn.classList.remove('toggle_one', 'toggle_two');

    document.body.classList.add('theme_3');
    document.body.classList.remove('theme_1', 'theme_2');
})





function onKeyUp(e) {
    let addToDisplay;
    if (e.key === "Enter") addToDisplay(number);
    console.log("pressed");
}


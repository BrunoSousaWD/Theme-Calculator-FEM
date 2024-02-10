let number = document.querySelectorAll('.number');
let display = document.getElementById('display--numbers');


number.forEach(function(numbers){
  
    numbers.addEventListener('click',()=>{
        let currentDisplay = display.innerHTML;
        if(currentDisplay === '0'){
            display.innerHTML = numbers.innerHTML;
        }else{
            display.innerHTML = currentDisplay + numbers.innerHTML; 
        }
    })
    return display.innerHTML;
});



function equal(){
    display.innerHTML = eval(display.innerHTML);
}

function res(){
    display.innerHTML= '0';
}

function del(){
    let currentDisplay = (display.innerHTML).slice(0,-1);
   
    if (parseInt(display.innerHTML)<10){
        display.innerHTML = '0'
    }else{
        display.innerHTML = currentDisplay;
    }
    return currentDisplay;
}




//Toggle Switch
let theme1 = document.getElementById('theme1');
let theme2 = document.getElementById('theme2');
let theme3 = document.getElementById('theme3');

let toggle = document.getElementById('toggle');

theme1.addEventListener('click', ()=>{
    toggle.classList.add('toggle-one');
    toggle.classList.remove('toggle-two');
    toggle.classList.remove('toggle-three');

})

theme2.addEventListener('click', ()=>{
    toggle.classList.add('toggle-two');
    toggle.classList.remove('toggle-one');
    toggle.classList.remove('toggle-three');
})

theme3.addEventListener('click', ()=>{
    toggle.classList.add('toggle-three');
    toggle.classList.remove('toggle-one');
    toggle.classList.remove('toggle-two');
})
//limit the number of characters on the display
//limit the number of floats



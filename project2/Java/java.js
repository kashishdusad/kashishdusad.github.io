let container = document.querySelector('#container')
let button = document.querySelector('button')
let count = document.querySelector('#counter')
let orangeButton = document.querySelector('#orange')
let yellowButton = document.querySelector('#yellow')
let pinkButton = document.querySelector('#pink')
let blueButton = document.querySelector('#blue')
let greenButton = document.querySelector('#green')
let clear = document.querySelector('#clear')

button.addEventListener('click',function(){
   let shape = document.createElement('div');
   shape.classList.add('shape');
   shape.style.left=(30*Math.random()) + '%';
   shape.style.top=(100*Math.random()) + '%';
   shape.innerHTML='<div></div>';
   container.appendChild(shape);

   let total = container.querySelectorAll('.shape');
   let amount = total.length;
   count.innerHTML = amount;
});

container.addEventListener ('click',function(event){
    if(event.target.classList == 'shape'){
        event.target.remove();
        let shapes= container.querySelectorAll('.shape');
        let amount = shapes.length;
        count.innerHTML = amount;
}});

orangeButton.addEventListener ('click',function(){
    let orange = document.querySelector('.color').style.backgroundColor;
    let shapes = document.querySelectorAll('.shape');
    shapes.forEach(function(shape){
        shape.style.backgroundColor = '#FF925A';
    })
});

yellowButton.addEventListener ('click',function(){
    let yellow = document.querySelector('.color').style.backgroundColor;
    let shapes = document.querySelectorAll('.shape');
    shapes.forEach(function(shape){
        shape.style.backgroundColor = '#FFCE76';
    })
});

pinkButton.addEventListener ('click',function(){
    let pink = document.querySelector('.color').style.backgroundColor;
    let shapes = document.querySelectorAll('.shape');
    shapes.forEach(function(shape){
        shape.style.backgroundColor = '#FFA5AE';
    })
});

blueButton.addEventListener ('click',function(){
    let blue = document.querySelector('.color').style.backgroundColor;
    let shapes = document.querySelectorAll('.shape');
    shapes.forEach(function(shape){
        shape.style.backgroundColor = '#86E0D6';
    })
});

greenButton.addEventListener ('click',function(){
    let green = document.querySelector('.color').style.backgroundColor;
    let shapes = document.querySelectorAll('.shape');
    shapes.forEach(function(shape){
        shape.style.backgroundColor = '#ACD156';
    })
});

clear.addEventListener('click',function(){
    container.innerHTML='';
    count.innerHTML='0';
    alert("Are you sure you want to clear?");
})

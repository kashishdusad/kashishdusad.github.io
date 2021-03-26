var container = document.querySelector('.container');
var clear = document.querySelector('.clear')
var button = document.querySelector('button')
var count = document.querySelector('#counter')
var yellowb = document.querySelector('.yellow')
var orangeb = document.querySelector('.orange')
var greenb = document.querySelector('.green')
var blueb = document.querySelector('.blue')
var pinkb = document.querySelector('.pink')


for (let i = 0; i < 50; i++) {
  let yellow = document.createElement('div');
  yellow.classList.add('yellow');  yellow.style.left = (90 * Math.random()) + '%';
  yellow.style.top = (90 * Math.random()) + '%';
  container.appendChild(yellow);
};

container.addEventListener('click', function (event) {
  if (event.target.classList.contains('yellow')) {
    event.target.remove();
  }
});

clear.addEventListener('click',function(){
    container.innerHTML='';
    count.innerHTML='0';
    alert("Are you sure you want to clear?");
})

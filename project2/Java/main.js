var container = document.querySelector('.container');
var clear = document.querySelector('.clear');
var button = document.querySelector('button');
var count = document.querySelector('.display_count');
// var yellowb = document.querySelector('.yellow');
// var orangeb = document.querySelector('.orange');
// var greenb = document.querySelector('.green');
// var blueb = document.querySelector('.blue');
// var pinkb = document.querySelector('.pink');
var click = document.querySelector('.click');

// Its adding two entries on click and not appearing random even though I used the same code as the tutorial (matbe its because i'm using flexbox)
click.addEventListener('click', function (event) {
    let shape = document.createElement('div');
    shape.classList.add('yellow');  shape.style.left = (90 * Math.random()) + '%';
    // yellow.style.top = (90 * Math.random()) + '%';
    container.appendChild(shape);
});


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
// Tried multiple ways to get the count but it doesn't work
  function count() {
  var nodelist = document.getElementById("yellow");
  // var nodelist = div.getElementsByTagName("div");
  document.getElementById("display_count").innerHTML = nodelist.length;
  console.log(nodelist.length);
}
// Tried multiple ways to get the colours changed but it doesn't work

// $(document).ready(function() {

  $('.orangeb').on('click', function(){
      $('orangeb').toggleClass('yellow');
  });
  console.log('You can click!');
// });

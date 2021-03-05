var name = "Kashish";
console.log(name);
var MyFavNumber = 4;
console.log(MyFavNumber);
const Num = 4;
console.log(null || 2)
var lettersOfName = (['k','a','s','h','i','s','h']);
console.log(lettersOfName);
var differentData = ([20,'Indian',false]);
console.log(differentData);
var firstName = ('Kashish');
var lastName = ('Dusad');
console.log(firstName,lastName);
var sumHundred = 50 + 50;
console.log(sumHundred);

var name = "Kashish";
function firstAndLast(array) {
var first = name[0];
var last = name[name.length-1];
var output = {};
output[first]=last
return output;
}
var display = firstAndLast(name);
console.log(display);

var marypoppins = 'supercalifragilisticexpialidocious';
console.log(marypoppins.length);

var firstName = ('Kashish');
var lastName = ('Dusad');
console.log(firstName) == console.log(lastName);

var loop = ['k','a','s','h','i','s','h'];
loop.forEach(function(item) {
  console.log(item);
});

var time = new Date().getHours();
if (time >= 19 && time <= 21.40) {
   console.log('You are Early!');
} else {
   console.log('You are Late!');
}

var favRestaurants = (['White Sage','Tao','Serra by Birreria']);
console.log(favRestaurants);
var cannotDo = (['Cant go to clubs!','Cant go back to New York!','Cant do shopping!']);
console.log(cannotDo);
var nycPlaces = (['The Highline','Dumbo Sidewalk','Soho']);
console.log(nycPlaces);
var favMovies = (['Crazy Rich Asians','The Kissing Booth','Set It Up'])
console.log(favMovies);

/*

var favRestaurants = (['White Sage','Tao','Serra by Birreria']);
console.log(favRestaurants);
favRestaurants.forEach(function(item) {
console.log(item);
var cannotDo = (['Cant go to clubs!','Cant go back to New York!','Cant do shopping!']);
console.log(cannotDo);
cannotDo.forEach(function(item) {
console.log(item);
var nycPlaces = (['The Highline','Dumbo Sidewalk','Soho']);
console.log(nycPlaces);
nycPlaces.forEach(function(item) {
console.log(item);
var favMovies = (['Crazy Rich Asians','The Kissing Booth','Set It Up'])
console.log(favMovies);
favMovies.forEach(function(item) {
console.log(item);
var favRestaurants = ['White Sage','Tao','Serra by Birreria'];
var cannotDo = ['Cant go to clubs!','Cant go back to New York!','Cant do shopping!'];
var nycPlaces = ['The Highline','Dumbo Sidewalk','Soho'];
var favMovies = ['Crazy Rich Asians','The Kissing Booth','Set It Up'];
var items = [favRestaurants],[cannotDo],[nycPlaces],[favMovies];
console.log(items);


 2 */


 console.log("My favorite restaurants:");
var favRestaurants = (['White Sage','Tao','Serra by Birreria']);
var arrayLength = favRestaurants.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(favRestaurants[i]);
}

//* 2 *//
console.log("Things I can’t do during a pandemic:");
var cannotDo = (['Cant go to clubs!','Cant go back to New York!','Cant do shopping!']);
var arrayLength = cannotDo.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(cannotDo[i]);
}

//* 3 *//
console.log("My favorite places in NYC:");
var nycPlaces = (['The Highline','Dumbo Sidewalk','Soho']);
var arrayLength = nycPlaces.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(nycPlaces[i]);
}

//* 4 *//
console.log("My favorite movies:");
var favMovies = (['Crazy Rich Asians','The Kissing Booth','Set It Up'])
var arrayLength = favMovies.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(favMovies[i]);
}

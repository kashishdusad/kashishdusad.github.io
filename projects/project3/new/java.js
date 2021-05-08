console.log("Hello, Airtable");

var Airtable = require("airtable");
console.log(Airtable);

var base = new Airtable({apiKey: 'keyr7FsjymdtEbmFp'}).base('appaKp6eCAWG5ayIB');

base("Magnets").select({
  view: 'Grid view'
}).eachPage(function page(records, fetchNextPage) {

var bookContainer = document.querySelector('.container');

  records.forEach(function(record) {
    console.log('Retrieved', record.get('Attachments'), record.fields);


    var book = document.createElement("div");
    book.classList.add("book-container");
    document.querySelector(".container").append(book);


    var name= document.createElement('div');
    name.classList.add('Name');
    name.innerHTML = record.fields.Name;

    var description = document.createElement('div');
    description.classList.add('country');
    description.innerHTML = record.fields.country;


    var magnet = document.createElement('img');
    magnet.classList.add('Attachments');
    magnet.src = record.fields.Attachments[0].url;
    // book.style.backgroundImage = 'url(' + coverImageUrl + ')';

    var map = document.createElement('img');
    map.classList.add('Maps');
    map.src = record.fields.Maps[0].url;

    book.addEventListener('click',function(){
      window.open(record.fields.Maps[0].url);
      //change to insert the URL, since sometimes it will not work when clicking command+Click
    } );

    book.append(name);
    book.append(description);
    book.append(magnet);
    book.append(map);
    bookContainer.append(book);

    book.addEventListener("mouseover", function() {
      name.classList.toggle("active");
      description.classList.toggle("active");
      // magnet.classList.toggle("active");
      // map.classList.toggle("active");
    });
    //change css of active and remove

    book.addEventListener("mouseleave", function() {
      name.classList.remove("active");
      description.classList.remove("active");
      // magnet.classList.remove("active");
      // map.classList.remove("active");
      });

  });

  fetchNextPage();

}, function done(err) {
  if (err) { console.error(err); return; }
});

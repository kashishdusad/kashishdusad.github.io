console.log("Hello, Airtable");

var Airtable = require("airtable");
console.log(Airtable);

var base = new Airtable({apiKey: 'keyr7FsjymdtEbmFp'}).base('appaKp6eCAWG5ayIB');

base("Magnets").select({}).eachPage(gotPageOfBooks, gotAllBooks);

const books = [];

function gotPageOfBooks(records, fetchNextPage) {
  console.log("gotPageOfBooks()");
  books.push(...records);
  fetchNextPage();
}

function gotAllBooks(err) {
  console.log("gotAllBooks()");
  if (err) {
    console.log("error loading books");
    console.error(err);
    return;
  }

  try{
    showBooks();
  } catch (e) {
  console.log(e);
  }
}

function showBooks() {
  console.log("showBooks()");

  const shelf = document.getElementById("shelf");

  books.forEach((Magnets) => {
    // create the div, set its text and class
    const div = document.createElement("div");
    div.innerText = Magnets.fields.Name;
    div.classList.add("book-spine");
    // when the user clicks this book spine, call showBook and send the book data and this spine element
    div.addEventListener("click", () => {
      showBook(Magnets, div);
    });
    // put the newly created book spine on the shelf
    shelf.appendChild(div);
  });
}

// // Hover function to enlarge selected cards
//   shelf.addEventListener('mouseenter', function() {
//     shelf.classList.add('active');
//     document.querySelector('.book-detail').classList.add('blur');
//   })
//
//   shelf.addEventListener('mouseleave', function() {
//     shelf.classList.remove('active');
//     document.querySelector('.book-detail').classList.remove('blur');
//   })


// show the detail info for a book, and highlight the active book-spine
function showBook(Magnets, div) {
  console.log("showBook()", Magnets);

  // find the book detail element
  const bookDetail = document.getElementById("book-detail");

  // populate the template with the data in the provided book
  bookDetail.getElementsByClassName("Name")[0].innerText = Magnets.fields.Name; //
  bookDetail.getElementsByClassName("country")[0].innerText = Magnets.fields.country;
  console.log(bookDetail.getElementsByClassName("url"))
  bookDetail.getElementsByClassName("url")[0].href = Magnets.fields.URL;
  bookDetail.getElementsByClassName("Attachments")[0].src= Magnets.fields.Attachments[0].url;
  bookDetail.getElementsByClassName("Maps")[0].src= Magnets.fields.Maps[0].url;

  // remove the .active class from any book spines that have it...
  const shelf = document.getElementById("shelf");
  const bookSpines = shelf.getElementsByClassName("active");
  for (const bookSpine of bookSpines) {
    bookSpine.classList.remove("active");
  }
  // ...and set it on the one just clicked
  div.classList.add("active");

  // reveal the detail element, we only really need this the first time
  // but its not hurting to do it more than once
  bookDetail.classList.remove("hidden");
}


//
// var colour = () => {
//   const randomColor = Math.floor(Math.random() * 16777215).toString(55);
//   document.body.style.random = "#" + randomColor;
//   // color.innerHTML = "#" + randomColor;
// }
//
// content.addEventListener("click", colour);
// colour();

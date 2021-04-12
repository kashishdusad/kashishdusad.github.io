/* globals require */
console.log("Hello, Airtable");


// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// use the airtable library to get a variable that represents one of our bases
var base = new Airtable({apiKey: 'keyr7FsjymdtEbmFp'}).base('appaKp6eCAWG5ayIB');

//get the "books" table from the base, select ALL the records, and specify the functions that will receive the data
base("Magnets").select({}).eachPage(gotPageOfBooks, gotAllBooks);

// an empty array to hold our book data
const books = [];

// callback function that receives our data
function gotPageOfBooks(records, fetchNextPage) {
  console.log("gotPageOfBooks()");
  // add the records from this page to our books array
  books.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllBooks(err) {
  console.log("gotAllBooks()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading books");
    console.error(err);
    return;
  }

  // call function to show the books
  try{
    showBooks();
  } catch (e) {
  console.log(e);
  }
}

/////////////////////////////////////////////////////////////////////////////////

// create the book-spines on the shelf
function showBooks() {
  console.log("showBooks()");

  // find the shelf element
  const shelf = document.getElementById("shelf");

  // loop through the books loaded from the Airtable API
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

// show the detail info for a book, and highlight the active book-spine
function showBook(Magnets, div) {
  console.log("showBook()", Magnets);

  // find the book detail element
  const bookDetail = document.getElementById("book-detail");

  // populate the template with the data in the provided book
  bookDetail.getElementsByClassName("Name")[0].innerText = Magnets.fields.Name; //
  bookDetail.getElementsByClassName("country")[0].innerText =
    Magnets.fields.country;
  console.log(bookDetail.getElementsByClassName("url"))
  bookDetail.getElementsByClassName("url")[0].href = Magnets.fields.url;
  bookDetail.getElementsByClassName("Attachments")[0].src =
    Magnets.fields.Attachments[0].url;

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

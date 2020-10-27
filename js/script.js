//global variables

const studentList = document.querySelector('.student-list');
const found = document.querySelector('.not-found');
const linkList = document.querySelector('.link-list');

/*
Create the search bar
*/

function searchBar() {
  const header = document.querySelector('header');
  const display = `<label for="search" class="student-search">
    <input id="search" placeholder="Search by name...">
    <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
  </label>`;

  header.insertAdjacentHTML('beforeend', display);
}
searchBar();

const search = document.querySelector('#search');
// Event listener add to search bar upon key stroke
search.addEventListener('keyup', (e) => {
  const searchInput = e.target.value.toLowerCase(); //ensure all inputs are turned into case insensitive
  let searchResults = [];

  for (let i = 0; i < data.length; i++) {
    // loops through first and last name of data.js
    const studentName = `${data[i].name.first.toLowerCase()} ${data[
      i
    ].name.last.toLowerCase()}`;

    if (studentName.includes(searchInput)) {
      // checks to see if what is typed in search bar matches data.js
      searchResults.push(data[i]); // if a match adds student to empty array
    }
  }

  //displays error message
  if (searchResults.length === 0) {
    found.style.display = 'block';
  } else {
    found.style.display = 'none';
  }
  showPage(searchResults, 1); // displays student on screen
  addPagination(searchResults); // displays pagination button on screen
});

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {
  // how many to display on page
  let startIndex = page * 9 - 9;
  let endIndex = page * 9;

  studentList.innerHTML = '';

  // Loop through data and using template literal display to screen
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      let display = `<li class="student-item cf">
        <div class="student-details">
          <img class="avatar" src="${list[i].picture.large}">
          <h3 class="name">${list[i].name.first} ${list[i].name.last}</h3>
          <span class="email">${list[i].email}</span>
        </div>
        <div class="joined-details">
          <span class="date">Joined: ${list[i].registered.date}</span>
        </div>
      </li>`;
      studentList.insertAdjacentHTML('beforeend', display);
    }
  }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

//divide the students up onto different pages
function addPagination(list) {
  const numOfPages = Math.ceil(list.length / 9); // The number of pages needed to show all of the students

  linkList.innerHTML = '';
  for (let i = 1; i <= numOfPages; i++) {
    linkList.insertAdjacentHTML(
      'beforeend', // How the pagination buttons will appear on the screen
      `<li>
        <button type="button">${i}</button>
      </li>`
    );
    linkList.firstElementChild.firstElementChild.classList.add('active');
  }

  /*
  Event listener added to pagination buttons at bottom of page
  */
  linkList.addEventListener('click', (e) => {
    let clicked = e.target;
    if (clicked.tagName === 'BUTTON') {
      //identify which button has been clicked
      let active = document.querySelector('.active');
      active.className = ''; //removes className
      clicked.className = 'active'; //adds className to clicked button
      showPage(list, clicked.textContent); // calls the showPage function and shows the data from data.js
    }
  });
}

// Call functions
showPage(data, 1);
addPagination(data);

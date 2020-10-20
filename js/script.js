/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {
   // how many to display on page
   let startIndex = (page * 9) - 9;
   let endIndex = page * 9;
   
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML='';
   // Loop through data and using template literal display on page
   for(let i = 0; i<list.length; i++) {
      if(i >= startIndex && i< endIndex) {
         let display =  `<li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src="${list[i].picture.large}">
           <h3>${list[i].name.first} ${list[i].name.last}</h3>
           <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
           <span class="date">Joined: ${list[i].registered.date}</span>
         </div>
       </li>`
         studentList.insertAdjacentHTML('beforeend', display);
      }
      
   };
};

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
   console.log(list)
};





// Call functions
showPage(data, 1)

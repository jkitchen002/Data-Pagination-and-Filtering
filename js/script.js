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
   // Loop through data and using template literal display to screen
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
      const numOfPages = Math.ceil(list.length / 9);
      const linkList = document.querySelector('.link-list');
      linkList.innerHTML='';
         for (let i = 1; i <= numOfPages; i++){
            const button = document.createElement('button');
            linkList.insertAdjacentHTML('beforeend', 
               `<li>
                  <button type="button">${i}</button>
                </li>`)
         //   const firstBtn = document.querySelector('ul')
         //   firstBtn.firstChild
           button.classList.add("active");

         };

         // linkList.addEventListener('click', (e) => {

         // });
   }; 

   





// Call functions
showPage(data, 1)
addPagination(data)

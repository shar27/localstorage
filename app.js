const form = document.getElementById('form');
const bookName = document.getElementById('bookname');
const bookPages = document.getElementById('bookpages');
const bookDate = document.getElementById('bookdate');



//send the book to storage 

form.addEventListener('submit', () =>  {
    
   localStorage.setItem('bookname', document.getElementById('bookname').value);
   localStorage.setItem('bookpages', document.getElementById('bookpages').value);
   localStorage.setItem('bookdate', document.getElementById('bookdate').value);

    
    
});

//display the book on the page

function makeBook () {
    const currentName = localStorage.getItem('bookname'); 
    const currentPages = localStorage.getItem('bookpages');
    const currentRelease = localStorage.getItem('bookdate');

    document.getElementById('tablename').innerHTML.value = currentName;
    document.getElementById('tablepages').textContent.value = currentPages;
    document.getElementById('tabledate').textContent.value = currentRelease;
} 




//create object

function Book (name, pages, release) {
    this.name = name;
    this.pages = pages;
    this.release = release;
    this.greeting = function() {
      alert('Hi! this is my favorite book ' + this.name + 'it has' + this.pages + 'it was released in' + this.release +  '.');
    };
  }


  
let Book1 = new Book('harry potter', '5000', '1990');
let Book2 = new Book('Lord of the rings', '10,000', '1880');



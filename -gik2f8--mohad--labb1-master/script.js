'use strict';

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);

function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list'); 

  const root = document.getElementById('root');
  existingElement && root.removeChild(existingElement);

  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));

    let chosenbook = document.querySelector(".book-list");
/* show the book image with details when mouseover*/
    if (chosenbook){
        chosenbook.addEventListener("mouseover", function(e) {
            if (e.target && e.target.matches("li.book-list__item")) {
                let bokId = e.target.value
                let bok = bookList.find(book => book.id === bokId)
                bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', bokinformation(bok));
            }
        });
/* display the image with details when the mouse does not over*/
        chosenbook.addEventListener("mouseout", function(e) { 
            let bookDetail = document.querySelector("#bokinformation");
            if(bookDetail)
                bookDetail.remove();
        });
    }
}
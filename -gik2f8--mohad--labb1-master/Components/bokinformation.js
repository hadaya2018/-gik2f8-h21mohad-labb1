const bokinformation = (book) => { 
    let html = `
    <div id="bokinformation" class="book__details absolute right-48 rounded-lg bg-amber-100 p-4 w-1/5 top-20 ml-5 mx-auto 
    flex flex-row text-center text-amber-500 font-semibold">
        <img src="${book.coverImage}" alt="bild saknas för denna bok"width="100" height="60" >
        
        <div class="border"></div>  
        <div class="detail__list">
            <ul class="list">
                <li>Title: ${book.title}</li>
                <li>Author: ${book.author}</li>
                <li>Pages: ${book.pages}</li>
                <li>Release date: ${book.releaseDate}</li>
            </ul>
        </div> 
    </div>
    `;

    return html;
};
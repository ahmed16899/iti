/*const book1 = {
    title: "Harry Potter",
    author: "JK Rowling",
    isbn: "AB123",
  };
  const book2 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "CD456",
  };
  const book3 = {
    title: "Moby-Dick",
    author: "Herman Melville",
    isbn: "EF789",
  };
  const book4 = {
    title: "Harry Potter",
    author: "JK Rowling",
    isbn: "AB123",
  };
  const book5 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "CD456",
  };
  books = [book1, book2, book3, book4, book5];
  console.log(books);

*/

function createBook(title,author,isbn)
{
    return {
        title,author,isbn
    }   
}

const book10 = new createBook("Harry Potter","JK Rowling","AB123");
const book20 = new createBook("The Great Gatsby","F. Scott Fitzgerald","CD456",);
const book30 = new createBook("Moby-Dick","Herman Melville","EF789")
const book40 = new createBook("The Great Gatsby","F. Scott Fitzgerald","CD456",);
const book50 = new createBook("Moby-Dick","Herman Melville","EF789")


const books2 = [book10, book20, book30, book40, book50];

console.log(books2)

// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.
class LibraryManagement {
    #books = [];

    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        this.#books.forEach(element => {
            if (element === title) {
                throw new Error(' книга с таким названием уже существует в списке');
            }
        });
        this.#books.push(title);
    }
    removeBook(title) {
        let flag = false;
        this.#books.forEach(element => {
            if (element === title) {
                const index = this.#books.indexOf(element);
                this.#books.splice(index, 1);
                flag = true;
            }
        });
        if (!flag) {
            throw new Error(' книги с таким названием нет в списке');
        }
    }
    hasBook(title) {
        let flag = false
        this.#books.forEach(element => {
            if (element === title) {
                flag = true;
            }
        });
        return flag;
    }
    constructor(books) {
        if (new Set(books).size !== books.length) {
            throw new Error(' массив содержит дубликаты')
        } else {
            this.#books = books;
        }
    }


}

books = ['fefwe', 'efewfwe', 'fwefwefw'];
try {
    book = new LibraryManagement(books);
    book.addBook('onegin');
    // console.log(book);
    // book.addBook('fefwe');
    book.removeBook('efewfwe');
    // book.removeBook('fwegfwiegf');
    console.log(book.hasBook('onegin'));
} catch (error) {
    console.log(error);
}



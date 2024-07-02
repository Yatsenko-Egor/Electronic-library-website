fetch('../data/new_books.json')
                .then(response => response.json())
                .then(data => {
                    const list = document.getElementById('new-books');
                    data.books.forEach(book => {
                        const item = document.createElement('div');
                        item.classList.add('book');
                        item.addEventListener('click', function() {
                            window.open("../book.html");
                        });
                        
                        const image = document.createElement('img');
                        image.src = "../img/new_books/" + book.image;
                        image.alt = book.title;
                        image.classList.add('image');
                        
                        const title = document.createElement('h3');
                        title.textContent = book.title;
                        title.classList.add('title');
                        
                        const author = document.createElement('p');
                        author.textContent = book.author;
                        author.classList.add('author');
                        
                        item.appendChild(image);
                        item.appendChild(title);
                        item.appendChild(author);
                        
                        list.appendChild(item);
                    });
                })
                .catch(error => console.error('Ошибка загрузки данных:', error));
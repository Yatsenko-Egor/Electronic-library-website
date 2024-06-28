fetch('../data/books.json')
                .then(response => response.json())
                .then(data => {
                    const list = document.getElementsByClassName('search-field')[0];
                    data.books.forEach(book => {
                        const cell = document.createElement('tr');
                        cell.classList.add('book');
                        cell.innerHTML = `
                            <td>
                                <table class="book-info">
                                    <tr>
                                        <td class="book">
                                            <table>
                                                <tr>
                                                  <td><img class="book-image" src="../img/books/${book.image}"></td>
                                                  <td>
                                                    <strong>Название:</strong> ${book.title}<br>
                                                    <strong>Автор:</strong> ${book.author}<br>
                                                    <strong>Год издания:</strong> ${book.year}<br>
                                                    <strong>Жанр:</strong> ${book.genre}
                                                  </td>
                                                </tr>
                                              </table>
                                        </td>
                                    </tr> 
                                </table>
                            </td>`;
                        list.appendChild(cell);
                    });
                })
                .catch(error => console.error('Ошибка загрузки данных:', error));
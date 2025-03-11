import React from "react";

function BookList({ books, deleteBook, updateBook }) {
    return (
        <div className="book-list">
            <h2>Book Collection</h2>
            <table>
                <thead>
                    <tr>
                        <th>Book Number</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Price ($)</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.bookNumber}>
                            <td>{book.bookNumber}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.price}</td>
                            <td>
                                <button className="update-btn" onClick={() => updateBook(book)}>Update</button>
                                <button className="delete-btn" onClick={() => deleteBook(book.bookNumber)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BookList;

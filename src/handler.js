import { response } from "express";
import { books } from "./data.js"

//Handler
export const welcomeHandler = (req, res) => {
    res.status(200).json({
        message: "Hello",
    })
};

export const getAllBookHandler = (req, res) => {
    res.status(200).json({
        status: "success",
        data: { books }
    })
}

export const addBookHandler = (req, res) => {
    const { name, author } = req.body;

    
    if(!name || !name.trim()) {
        return response.status(400).json({
            status: "fail",
            message: "Nama buku tidak boleh kosong",
        })
    }

    const id = Date.now();

    const newBook = { id, name, author };
    books.push(newBook);

    res.status(201).json({
        status: "success",
        message: "buku berhasil dibuat",
        data: books,
    });
};

//Dapatkan buku berdasarkan ID
export const getBookByIdHandler = (req, res) => {
    const { bookId } = req.params;
    const numericBookId = Number(bookId);

    const book = books.find((b) => b.id === numericBookId);

    if (!book) {
        res.status(404).json({
            status: "fail",
            message: "buku tidak ditemukan"
        })
    }

    res.status(200).json({
        status: "success",
        data: book,
    });
};

// Mengubah data buku berdasarkan ID
export const updateBookByIdHandler = (req, res) => {
    const { bookId } = req.params;
    const numericBookId = Number(bookId);

    const { name, author } = req.body;

    const book = books.find((b) => b.id === numericBookId)

    if (!book) {
        return res.status(404).json({
            status: "fail",
            message: "buku tidak ditemukan",
        });
    };

    book.name = name;
    book.author = author;

    res.status(200).json({
        status: "success",
        message: "buku berhasil diubah",
        data: book,
    });
};

// Menghapus buku berdasarkan ID
export const deleteBookByIdHandler = (req, res) => {
    const { bookId } = req.params;
    const numericBookId = Number(bookId);

    const book = books.find((b) => b.id === numericBookId);

    if (!book) {
        return res.status(404).json({
            status: "fail",
            message: "buku tidak ditemukan"
        })
    }

    const index = books.indexOf(book);
    books.splice(index, 1);

    res.status(200).json({
        status: "success",
        message: "buku berhasil dihapus"
    })

}


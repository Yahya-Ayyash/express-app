import express from "express";
import { 
    getAllBookHandler,
    welcomeHandler,
    addBookHandler,
    getBookByIdHandler,
    updateBookByIdHandler,
    deleteBookByIdHandler,
} from "./handler.js"

const router = express.Router();

//Routing
router.get("/", welcomeHandler);
router.get("/books", getAllBookHandler);
router.post("/books", addBookHandler);
router.get("/books/:bookId", getBookByIdHandler);
router.put("/books/:bookId", updateBookByIdHandler);
router.delete("/books/:bookId", deleteBookByIdHandler);

export default router;
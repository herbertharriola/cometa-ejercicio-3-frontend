import { useEffect, useState } from "react";
import { getBooks } from "../services/api";
import { genres } from "../constants/genres"; // Importamos los géneros
import BookCard from "./BookCard";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
} from "@mui/material";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [genre, setGenre] = useState("");

  useEffect(() => {
    if (genre !== "") getBooks(genre).then(setBooks);
  }, [genre]);

  return (
    <Box sx={{ p: 3, minHeight: "100vh" }}>
      {/* Selector de género */}
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel id="genre-label">Seleccionar Género</InputLabel>
        <Select
          labelId="genre-label"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          {genres.map((g) => (
            <MenuItem key={g.value} value={g.value}>
              {g.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Lista de libros con tarjetas uniformes */}
      <Grid container spacing={3} sx={{ p: 3 }}>
        {genre !== "" && books.length > 0 ? (
          books.map((book: any, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <BookCard
                title={book.title}
                author={book.author}
                publisher={book.publisher}
                rank={book.rank}
                amazon_url={book.amazon_url}
              />
            </Grid>
          ))
        ) : (
          <Typography>No hay libros disponibles</Typography>
        )}
      </Grid>
    </Box>
  );
};

export default BookList;

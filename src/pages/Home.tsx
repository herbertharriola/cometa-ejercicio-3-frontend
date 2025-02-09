import BookList from "../components/BookList";
import { Container, Typography } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mt: 4 }}>
        Libros más vendidos del NYT
      </Typography>
      <BookList />
    </Container>
  );
};

export default Home;

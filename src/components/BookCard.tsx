import { Card, CardContent, Typography, Button, CardActions } from "@mui/material";

interface BookProps {
  title: string;
  author: string;
  publisher: string;
  rank: number;
  amazon_url: string;
}

const BookCard = ({ title, author, publisher, rank, amazon_url }: BookProps) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "2px solid #3f51b5",
        backgroundColor: "#f5f5f5",
        boxShadow: 3,
        p: 2,
      }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.2rem", color: "#3f51b5" }}>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <strong>Author:</strong> {author}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <strong>Publicado por:</strong> {publisher}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <strong>Ranking:</strong> #{rank}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          href={amazon_url}
          target="_blank"
          fullWidth
        >
          Ver en Amazon
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookCard;

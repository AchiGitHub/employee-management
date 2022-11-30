import { Card, CardContent, CardMedia } from "@mui/material";
import styles from "./Card.module.css";

interface CardProps {
  photo: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  children?: React.ReactNode;
}

function CardComponent({
  photo,
  firstName,
  lastName,
  email,
  phone,
  children,
}: CardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="120"
        image={photo}
        alt="green iguana"
      />
      <CardContent className={styles.card}>
        <h4>{`${firstName} ${lastName}`}</h4>
        <h5>{email}</h5>
        <h5>{phone}</h5>
        {children}
      </CardContent>
    </Card>
  );
}

export default CardComponent;

import { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function BlogListCard({title, description, text}) {
  const [showBlogText, setShowBlogText] = useState(false)
  const handleShow = () => setShowBlogText(!showBlogText)
  const className = showBlogText ? 'blog-card blog-open' : 'blog-card'

  return (
    <Card className={className}
      sx={{
        minWidth: 275,
        m: 2,
        p: 2,
        boxShadow: 5,
        color: "white",
        fontWeight: "700",
        fontSize: "1.7rem",
        width: "70%",
        margin: "3rem",
        zIndex: "2",
        padding: "35px",
        border: "1px solid rgba(139, 139, 139, 0.50)",
        borderRadius: "20px",
        backgroundColor: "rgba(16, 16, 16, 0.5)",
        // boxShadow: "0 0 10px 1px rgba(139, 139, 139, 0.5)",
        backdropFilter: "blur(10px);",
      }} raised >
      <CardContent>
      <CardActions>
        <Button size="small" onClick={handleShow}>{showBlogText ? 'CLOSE' : 'READ'}</Button>
      </CardActions>
        <Typography color="text.info" variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} component="div">
          {description}
        </Typography>
      </CardContent>
      { showBlogText ? <Typography variant="h6" component="div">{text}</Typography> : null}
    </Card>
  );
}

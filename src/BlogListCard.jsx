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
    <Card className={className} sx={{ minWidth: 275, m: 2, p: 2, boxShadow: 5 }} raised>
      <CardContent>
        <Typography color="text.secondary" variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} component="div">
          {description}
        </Typography>
      </CardContent>
      { showBlogText ? <Typography variant="h6" component="div">{text}</Typography> : null}
      <CardActions>
        <Button size="small" onClick={handleShow}>{showBlogText ? 'CLOSE' : 'READ'}</Button>
      </CardActions>
    </Card>
  );
}

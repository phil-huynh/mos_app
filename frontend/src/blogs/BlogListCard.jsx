import { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useStore } from '../ContextStore';

export default function BlogListCard({title, description, text}) {

  const [showBlogText, setShowBlogText] = useState(false)
  const handleShow = () => setShowBlogText(!showBlogText)
  const className = showBlogText ? 'blog-card blog-open' : 'blog-card'

  const { glassCardStyle } = useStore()

  return (
    <Card className={className}
      sx={ glassCardStyle } raised >
      <CardContent>
      <CardActions>
        <Button onClick={handleShow}>{showBlogText ? 'CLOSE' : 'READ'}</Button>
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

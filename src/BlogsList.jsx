import BlogListCard from './BlogListCard'
import Grid from "@mui/material/Grid";

export default function BlogList ({blogs}) {
  console.log(blogs)
  return (
    <>
      <Grid container spacing={6} className='list-container'>
        {blogs.map(blog => (
          <Grid item xs={8} sm={6} md={4} lg={2.6} key={blog.id}>
            <BlogListCard
              title={blog.title}
              description={blog.description}
              text={blog.text}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}
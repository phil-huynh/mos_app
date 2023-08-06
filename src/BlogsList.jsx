import BlogListCard from './BlogListCard'
import Grid from "@mui/material/Grid";

export default function BlogList ({blogs}) {
  console.log(blogs)
  return (
    <>
      <Grid container className='list-container'>
        {blogs.map(blog => (
          <Grid item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            key={blog.id}
            sx={{
              display: "flex",
              justifyContent: "center",

            }}
          >
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
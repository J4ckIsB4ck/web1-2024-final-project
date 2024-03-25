import { Box } from "@mui/material";
import Navbar from "../../components/Navbar";
import  "./Blog.css";

function Blog() {
    return (
      <>
        <Navbar/>
          <Box className="box-blog">
            <h1>Blog Page</h1>
        </Box>
      </>
    );
  }

export default Blog;
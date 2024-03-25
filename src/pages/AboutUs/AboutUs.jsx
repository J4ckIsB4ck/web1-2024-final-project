import { Box } from "@mui/material";
import Navbar from "../../components/Navbar";
import  "./AboutUs.css";

function AboutUs() {
    return (
      <>
        <Navbar/>
          <Box className="box-about">
            <h1>About Us Page</h1>
          </Box>
      </>
    );
  }

export default AboutUs;
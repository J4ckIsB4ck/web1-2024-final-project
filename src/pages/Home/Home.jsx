import React, { useEffect, Fragment } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Navbar from "../../components/Navbar";
import "./Home.css";

function Home() {
 useEffect(() => {
  const startBtn = document.querySelector('.start-btn');
  const popupSelect = document.querySelector('.popup-select');
  const exitBtn = document.querySelector('.exit-btn');
  const main = document.querySelector('.main-home');

  if (startBtn && popupSelect && exitBtn) {
    startBtn.onclick = () => {
      popupSelect.classList.add('active');
      main.classList.add('active');
    }

    exitBtn.onclick = () => {
      popupSelect.classList.remove('active');
      main.classList.remove('active');
    }
  }
}, []);

  return (
    <Fragment>
          <div className="main-home">
          <Navbar/>
            <section className="section-home">
                  <div className="div-home">
                    <h1>QuickB Website</h1>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
                    <button className="start-btn">Start Quiz</button>
                  </div>
            </section>
          </div>

          <div className="popup-select">
            <h2>Select Quiz</h2>
              <div className="flex-cards">
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Geography
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button className="start-quiz-btn">Let's Go!</Button>
                  </CardActions>
                </Card>
                
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Informatics
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button className="start-quiz-btn">Let's Go!</Button>
                  </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      History
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button className="start-quiz-btn">Let's Go!</Button>
                  </CardActions>
                </Card>
              </div> 
            <div className="btn-group">
              <button className="info-btn exit-btn">Exit</button>
              <a href="#" className="info-btn continue-btn">Continue</a>
            </div>
          </div>
    </Fragment>
  );
}

export default Home;

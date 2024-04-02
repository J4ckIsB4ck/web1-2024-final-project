import React, { useEffect, Fragment } from 'react';
import Navbar from "../../components/Navbar";
import "./Home.css";
import PopupMenu from "../../components/Popupmenu";
import HomeContainer from "../../components/HomeContainer";

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
            <HomeContainer/>
          </div>
        <PopupMenu/> 
        
    </Fragment>
  );
}

export default Home;

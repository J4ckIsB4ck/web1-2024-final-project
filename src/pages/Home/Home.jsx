import React, { useEffect, Fragment } from 'react';
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
            <span className="info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis magni tenetur magnam, quos corrupti numquam?</span>
          <div className="btn-group">
            <button className="info-btn exit-btn">Exit</button>
            <a href="#" className="info-btn continue-btn">Continue</a>
          </div>
        </div>
    </Fragment>
  );
}

export default Home;

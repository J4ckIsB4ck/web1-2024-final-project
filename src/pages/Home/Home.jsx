import React, { useEffect } from 'react';
import Navbar from "../../components/Navbar";
import "./Home.css";

function Home() {
  useEffect(() => {
    const startBtn = document.querySelector('.start-btn');
    const popupSelect = document.querySelector('.popup-select');
    const exitBtn = document.querySelector('.exit-btn');


    if (startBtn && popupSelect && exitBtn) {
      startBtn.onclick = () => {
        popupSelect.classList.add('active');
      }

      exitBtn.onclick = () => {
        popupSelect.classList.remove('active');
      }
    }
  }, []);

  return (
    <>
    <Navbar/>
      <section className="section-home">
        <div className="box-home">
          <h1>QuickB Website</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nemo beatae assumenda harum doloribus,
            ipsum fugit rem eligendi quam soluta animi enim? Amet expedita enim maiores voluptate delectus alias dolorum?</p>
          <button className="start-btn">Start Quiz</button>
        </div>
      </section>

      <div className="popup-select">
        <h2>Select Quiz</h2>
          <span className="info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis magni tenetur magnam, quos corrupti numquam?</span>
        <div className="btn-group">
          <button className="info-btn exit-btn">Exit</button>
          <a href="#" className="info-btn continue-btn">Continue</a>
        </div>
      </div>
    </>
  );
}

export default Home;

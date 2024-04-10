import React, {useEffect} from 'react';
import './Carousel.css';

function Carousel() {
    useEffect(() => {
        const carousel = document.querySelector(".carousel");
        const arrowBtns = document.querySelectorAll(".wrapper i");
        const firstCardWidth = carousel.querySelector(".card").offsetWidth;
        const carouselChildrens = [...carousel.children];

        let isDragging = false, startX, startScrollLeft;
 
        let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

        carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
            carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
        });

        carouselChildrens.slice(0, cardPerView).forEach(card => {
            carousel.insertAdjacentHTML("beforeend", card.outerHTML);
        });

        arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
            });
        });

        const dragStart = (e) => {
            isDragging = true;
            carousel.classList.add("dragging");
            startX = e.pageX;
            startScrollLeft = carousel.scrollLeft;
        }

        const dragStop = () => {
            isDragging = false;
            carousel.classList.remove("dragging");
        }

        const dragging = (e) => {
            if (!isDragging) return;
            carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
        }

        const infiniteScroll = () => {
            if(carousel.scrollLeft === 0){
                carousel.scrollLeft = carousel.scrollWidth - ( 2 * carousel.offWidth);
            }
            else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
                carousel.scrollLeft = carousel.offsetWidth;
            }
        }

        carousel.addEventListener("mousedown", dragStart);
        document.addEventListener("mouseup", dragStop);
        carousel.addEventListener("mousemove", dragging);
        carousel.addEventListener("scroll", infiniteScroll);

        return () => {
            carousel.removeEventListener("mousedown", dragStart);
            document.removeEventListener("mouseup", dragStop);
            carousel.removeEventListener("mousemove", dragging);
            carousel.addEventListener("scroll", infiniteScroll);
        };
    }, []);
    return(
        <>
        <div className='card-body'>
            <div className='wrapper'>
             <i id="left" className="fa-solid fa-angle-left"></i>
                <ul className='carousel'>
                    <li className='card'>
                        <div className='card-img'> <img src="Person_one.jpg" alt="Person" draggable="false" /></div>
                        <h2>Blanche Person</h2>
                        <span>Lorem ipsum dolor sit.</span>
                    </li>
                    <li className='card'>
                        <div className='card-img'> <img src="Person_two.jpg" alt="Person" draggable="false" /></div>
                        <h2>Blanche Person</h2>
                        <span>Lorem ipsum dolor sit.</span>
                    </li>
                    <li className='card'>
                        <div className='card-img'> <img src="Person_three.jpg" alt="Person" draggable="false" /></div>
                        <h2>Blanche Person</h2>
                        <span>Lorem ipsum dolor sit.</span>
                    </li>
                    <li className='card'>
                        <div className='card-img'> <img src="Person_four.jpg" alt="Person" draggable="false" /></div>
                        <h2>Blanche Person</h2>
                        <span>Lorem ipsum dolor sit.</span>
                    </li>
                    <li className='card'>
                        <div className='card-img'> <img src="Person_five.jpg" alt="Person" draggable="false" /></div>
                        <h2>Blanche Person</h2>
                        <span>Lorem ipsum dolor sit.</span>
                    </li>
                </ul>
             <i id="right" className="fa-solid fa-angle-right"></i>
            </div>
        </div>  
        </>
    );
};

export default Carousel;
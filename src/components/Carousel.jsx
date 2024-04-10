import React from 'react';
import './Carousel.css';

function Carousel (){
    return(
        <>
        <div className='card-body'>
            <div className='wrapper'>
             <i className="arrow left"></i>
                <ul className='carousel'>
                    <li className='card'>
                        <div className='card-img'> <img src="Person_one.jpg" alt="Person" /></div>
                        <h2>Blanche Person</h2>
                        <span>Lorem ipsum dolor sit.</span>
                    </li>
                    <li className='card'>
                        <div className='card-img'> <img src="Person_two.jpg" alt="Person" /></div>
                        <h2>Blanche Person</h2>
                        <span>Lorem ipsum dolor sit.</span>
                    </li>
                    <li className='card'>
                        <div className='card-img'> <img src="Person_three.jpg" alt="Person" /></div>
                        <h2>Blanche Person</h2>
                        <span>Lorem ipsum dolor sit.</span>
                    </li>
                    <li className='card'>
                        <div className='card-img'> <img src="Person_four.jpg" alt="Person" /></div>
                        <h2>Blanche Person</h2>
                        <span>Lorem ipsum dolor sit.</span>
                    </li>
                    <li className='card'>
                        <div className='card-img'> <img src="Person_five.jpg" alt="Person" /></div>
                        <h2>Blanche Person</h2>
                        <span>Lorem ipsum dolor sit.</span>
                    </li>
                </ul>
             <i className="arrow right"></i>
            </div>
        </div>  
        </>
    );
};

export default Carousel;
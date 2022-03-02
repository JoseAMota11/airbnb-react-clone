import React from 'react';
import MainImg from '../Images/grid-imagen.png'

export default function Hero(){
    return (
        <section className='hero__section'>
            <img src={MainImg} alt="Hero pics" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    );
}
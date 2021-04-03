import React from 'react';
import papaSmurf from './smurf.jpg';
import './style.css'

function Main() {
    return(
        <main>
            <section className="main-welcome-cta">
                <header className="main-welcome-cta-header">
                    <h1>Hi, I'm a ReactJS + NodeJS blog.</h1>
                    <p>Here you can read our articles plus create your own. Enjoy and checkout our biography anytime.</p>
                </header>
                <button>Learn more</button><br />
                <img src={papaSmurf} title="Papa Smurf posing for photo" alt="Papa Smurf posing"/>
            </section>
        </main>
    );
}

export default Main;
import React from 'react';
import Genres from './Genres';
import TopHits from './TopHits';

const Main = () => (
    <main>
        <section className="hero-main text-center">
            <h1>We got your taste!</h1>
            <p className="text-intro">
                "Welcome to Sporticloud Music" <br />
                Your one-stop destination for all things music.
            </p>
            <div>
                <button className="btn btn-primary">
                    <a href="#top-hit" className="text-white text-decoration-none">Hits of the world</a>
                </button>
            </div>
        </section>
        <Genres />
        <TopHits />
    </main>
);

export default Main;

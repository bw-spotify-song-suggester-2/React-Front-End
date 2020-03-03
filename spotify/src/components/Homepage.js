import React from 'react';

const Homepage = () => {
    const handleRedirect = e => {
        e.preventDefault();
    }
    return (
        <div className="homeContainer">
            <section className="imageHeader" />
            <section className="content">
                <div className="contentInfo">
                <h2>New music, just for you.</h2>
                <p>Millions of songs, waiting to be discovered.</p>
                </div>
            </section>
            <section className="actionCall">
                <button onClick={handleRedirect}>Sign up Now</button>
            </section>
        </div>
    )
}

export default Homepage;
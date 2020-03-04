import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Dashboard = props => {
    // const handleRecs = () => {
        axiosWithAuth()
        .get('https://spotify-song-suggester-neo.herokuapp.com/api/recommendations/1/recs')
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log('Error with Catch', err))
    // }
    
    return (
        <div>
            <h2>Welcome to your Dashboard</h2>
            <section>
                <form>
                    <input type='text' />
                </form>
            </section>
        </div>
    )
}

export default Dashboard;
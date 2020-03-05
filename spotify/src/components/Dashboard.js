import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

// Redux Imports
import { connect } from 'react-redux';
import { fetchRecs } from '../actions';

const Dashboard = props => {
    // useEffect(() => {
    //     props.fetchRecs()
    // }, [])
    const [recs, setRecs] = useState([]);
    
    useEffect(() => {
        axiosWithAuth()
        .get('https://spotify-song-suggester-neo.herokuapp.com/api/recommendations/1/recs')
        .then(res => {
            console.log('Recommendations Loaded: ', res.data)
            setTimeout(() => {
                setRecs(res.data)
            }, 1000)
        })
        .catch(err => {
            console.log('Error fetching Recs: ', err)
        })
    }, [])

    console.log('Recs Data: ', props.recs)
    return (
        <div>
            <h2>Welcome to your Dashboard</h2>
            <section>
                <form>
                    Add a playlist for more recommondations:<br/>
                    <input type='text' placeholder='Spotify Playlist URL'/>
                </form>
            </section>
            <section className='recsBox'>
                <h2>Based on Summer playlist:</h2>
            {recs.map((value, index) => {
                  return (  
                  <div className='recs' key={index}>
                    <img src='https://media.pitchfork.com/photos/5929ade513d1975652139fea/1:1/w_320/283a416f.png' alt='Album Cover' />
                    <h3>{value.song}</h3>
                    <p>{value.artist}</p>
                    <p>{value.album}</p>
                  </div>
                  )
                })}
                <h2>Based on Holiday playlist:</h2>
            </section>
        </div>
    )
}

const mapStateToProps = state => ({
    recs: state.recs
})

export default connect(mapStateToProps, { fetchRecs })(Dashboard);
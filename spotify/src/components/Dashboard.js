import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
// import RecommendationList from './RecommendationList';
import { connect } from 'react-redux';
import { fetchRecs } from '../actions';

const Dashboard = props => {
    useEffect(() => {
        props.fetchRecs();
    }, [])
    console.log('Halp?', props.recs)
    console.log('user id: ', props.user_id)
    return (
        <div className='dashboard-container'>
            <h1>Welcome to your Dashboard</h1>
            {/* <RecommendationList /> */}
            <section className='user-recs'>
                <h2>Your Recommendations</h2>
                <div className='userRecsContainer'>
                    {props.recs.map((music, index) => {
                        return (
                            <div key={index} className='musicBox'>
                                <h3>{music.song}</h3>
                                <p>{music.artist}</p>
                                <p>{music.album}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
            <section>
                <h2>Playlist Recommendations</h2>
                <p>Enter a playlist URL to get started:</p>
                <form className='playlistForm'>
                    <input placeholder='Playlist URL'/>
                </form>
            </section>
            <section>
                <h2>Your Favorites</h2>
            </section>
        </div>
    )
}

const mapStateToProps = state => ({
    user_id: state.user_id,
    recs: state.recs
})

export default connect(mapStateToProps, { fetchRecs })(Dashboard);
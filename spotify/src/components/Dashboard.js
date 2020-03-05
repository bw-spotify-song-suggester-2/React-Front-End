import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import RecommendationList from './RecommendationList';
import { connect } from 'react-redux';
import { fetchRecs } from '../actions';

const Dashboard = props => {
    return (
        <div>
            <h2>Welcome to your Dashboard</h2>
            <RecommendationList />
        </div>
    )
}

const mapStateToProps = state => ({
    recs: state.recs
})

export default connect(mapStateToProps, { fetchRecs })(Dashboard);
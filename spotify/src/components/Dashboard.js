import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import RecommendationList from './RecommendationList';

const Dashboard = props => {
    return (
        <div>
            <h2>Welcome to your Dashboard</h2>
            <RecommendationList />
        </div>
    )
}

export default Dashboard;
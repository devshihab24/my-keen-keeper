import React from 'react';
import Banner from '../../components/banner/Banner';
import FriendsContainer from '../../components/friendsContainer/FriendsContainer';

const HomePage = () => {
    return (
        <div className='my-10 space-y-20'>
            <Banner></Banner>
            <FriendsContainer></FriendsContainer>
        </div>
    );
};

export default HomePage;
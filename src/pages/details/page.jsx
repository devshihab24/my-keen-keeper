import React, { useContext } from 'react';
import FriendInfo from '../../components/FriendsInfo/FriendInfo';
import AboutFriend from '../../components/FriendsInfo/AboutFriend';
import useFriendsData from '../../hooks/useFriendsData';
import { FriendsDataContext } from '../../context/FriendsDataContext';

const FriendDetails = () => {
    const {friendsData, isLoading} = useFriendsData()
    const checkInData = useContext(FriendsDataContext)
    console.log(checkInData);
    return (
        <div className='w-[95%] md:w-[90%] lg:w-[85%] mx-auto space-y-5 h-[60vh] border grid grid-cols-1 lg:grid-cols-4'>
            <div><AboutFriend></AboutFriend></div>
            <div className='col-span-3'><FriendInfo></FriendInfo></div>
        </div>
    );
};

export default FriendDetails;
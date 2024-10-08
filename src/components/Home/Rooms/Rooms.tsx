import React from 'react';
import RoomCard from './RoomCard';
import { roomData } from '../../../data/data';
import SectionHeading from '@/components/Common/SectionHeading';

const Rooms = () => {
  return (

    <div className='bg-white mx-4'>
        <SectionHeading>Our Rooms</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
      {roomData.map((room) => (
        <RoomCard key={room.name} room={room} />
      ))}
    </div>
    </div>
  );
};

export default Rooms;

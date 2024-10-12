import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

export default function Layout() {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
      <div>
        <Sidebar/>
      </div>
      
      <div className='flex-1'>
        <Header/>
        <div className='h-full p-4 bg-gray-100'><Outlet /></div>
        
      </div>

    </div>
  );
}

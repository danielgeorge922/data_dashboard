import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Modal, Box } from "@mui/material"; // For the modal

export default function Header() {
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);  // State for chat modal visibility
  const [isNotificationsModalOpen, setIsNotificationsModalOpen] = useState(false);  // State for notifications modal visibility
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);  // State for profile picture modal visibility

  // Function to toggle chat modal visibility
  const handleChatModalToggle = () => {
    setIsChatModalOpen(!isChatModalOpen);
  };

  // Function to toggle notifications modal visibility
  const handleNotificationsModalToggle = () => {
    setIsNotificationsModalOpen(!isNotificationsModalOpen);
  };

  // Function to toggle profile modal visibility
  const handleProfileModalToggle = () => {
    setIsProfileModalOpen(!isProfileModalOpen);
  };

  return (
    <div className="bg-white h-16 p-4 flex flex-row justify-between items-center">
      
      {/* Search Bar */}
      <div className="relative flex items-center">
        <SearchIcon className="absolute left-3 text-gray-400" />
        <input 
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 text-sm w-[24rem] h-10 focus:outline-none border border-gray-400 rounded"
        />
      </div>

      {/* Icons Section */}
      <div className="flex gap-4 items-center">
        <ChatIcon onClick={handleChatModalToggle} style={{ cursor: 'pointer' }} />
        <NotificationsIcon onClick={handleNotificationsModalToggle} style={{ cursor: 'pointer' }} />
        
        {/* Profile Picture */}
        <img
          src="https://i.pinimg.com/originals/3d/ae/b8/3daeb8e69f4c85e39096cd51a5f2b622.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full cursor-pointer profile-pic"  // Styling to make the image circular
          onClick={handleProfileModalToggle}
        />
      </div>

      {/* Modal for Chat */}
      <Modal
        open={isChatModalOpen}
        onClose={handleChatModalToggle}
        aria-labelledby="chat-modal-title"
        aria-describedby="chat-modal-description"
      >
        <Box className="p-4 bg-white w-[300px] h-[200px] mx-auto mt-40 rounded shadow-lg">
          <h2 id="chat-modal-title" className="text-lg font-bold">Chat</h2>
          <p id="chat-modal-description">This is a simple chat modal. You can add chat functionalities here.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleChatModalToggle}>Close</button>
        </Box>
      </Modal>

      {/* Modal for Notifications */}
      <Modal
        open={isNotificationsModalOpen}
        onClose={handleNotificationsModalToggle}
        aria-labelledby="notifications-modal-title"
        aria-describedby="notifications-modal-description"
      >
        <Box className="p-4 bg-white w-[300px] h-[200px] mx-auto mt-40 rounded shadow-lg">
          <h2 id="notifications-modal-title" className="text-lg font-bold">Notifications</h2>
          <p id="notifications-modal-description">This is a simple notifications modal. You can list notifications here.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleNotificationsModalToggle}>Close</button>
        </Box>
      </Modal>

      {/* Modal for Profile Picture */}
        <Modal
            open={isProfileModalOpen}
            onClose={handleProfileModalToggle} // This handles closing the modal when clicking outside the image
            aria-labelledby="profile-modal-title"
            aria-describedby="profile-modal-description"
            >
            <Box className="flex justify-center items-center h-screen w-screen" onClick={handleProfileModalToggle}>
                <img
                src="https://i.pinimg.com/originals/3d/ae/b8/3daeb8e69f4c85e39096cd51a5f2b622.jpg"
                alt="Zoomed Profile"
                className="rounded-full w-auto h-auto max-w-[90vw] sm:max-w-[600px]"
                onClick={(e) => e.stopPropagation()} // Prevents closing the modal when clicking directly on the image
                />
            </Box>
    </Modal>


    </div>
  );
}

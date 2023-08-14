import React from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: number;
  name: string; 
}

interface NavigationSidebarProps {
  users: User[];
  onUserClick: (userId: number) => void;
}

const NavigationSidebar: React.FC<NavigationSidebarProps> = ({ users, onUserClick }) => {
  const navigate = useNavigate();

  const handleLogout = () => { 
    navigate('/'); // Navigate to the login page
  };

  const handleUserLinkClick = (userId: number) => {
    navigate(`/user/${userId}`); // Navigate to the user detail page
  };

  return (
    <div className="navigation-sidebar">
      {/* Profile Picture */}
      <div className="profile-picture">
        {/* Didn't have time to do this */}
      </div>
      
      {/* User Links */}
      <div className="user-links"> 
          {users.map(user => (
            <a key={user.id} onClick={() => handleUserLinkClick(user.id)}>
              <li className="user-link">{user.name}</li>
            </a>
          ))} 
      </div>
      
      {/* Logout Button */}
      <div className="logout-button">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default NavigationSidebar;

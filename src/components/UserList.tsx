import React, { useState } from 'react';
import UserCard from './UserCard';

interface User {
  id: number;
  name: string;
  title: string;
  location: string;
  created_at: string; 
}

interface UserListProps {
  users: User[];
  onRemove: (userId: number) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onRemove }) => {
  const [filterText, setFilterText] = useState(''); 

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleCreateUser = () => {
    alert('This feature is still in development');
  };

  return (
    <div className="user-list"> 

      <div className="user-actions">
        <input className="filter-input"
          type="text"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          placeholder="Filter users by name" 
        />
        <div className="spacer"/>
        <button 
          className="create-btn" 
          onClick={handleCreateUser}
        >
          Create User
        </button>
      </div>

      <div className="user-cards-wrapper"> 
        {filteredUsers.map(user => ( 
          <UserCard
            key={user.id}
            user={user}
            onRemove={() => onRemove(user.id)}
          /> 
        ))}  
      </div> 
      
    </div>
  );
};

export default UserList;

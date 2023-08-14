import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface User {
  id: number;
  name: string;
  title: string;
  location: string;
  created_at: string;
}

interface UserCardProps {
  user: User;
  onRemove: (userId: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onRemove }) => {
  const [hover, setOnHover] = useState("0");

  const buttonStyles = { 
    opacity: `${hover}`,
  };

  const handleRemoveClick = () => {
    onRemove(user.id);
  };

  return (
    <div className="user-card">

      <div 
        className="user-info" 
        onMouseEnter={() => setOnHover("1")} 
        onMouseLeave={() => setOnHover("0")}  
      >
        <div className="remove-user" style={buttonStyles}> 
          <button
            className="x" 
            onClick={handleRemoveClick}
          > X </button>
        </div>

        <Link to={`/user/${user.id}`} className="user-name">
          <div className='card-preview'> 
            {user.name}
            <hr className="divider"/>
            {user.location}
            <div className="title">{user.title}</div>
            <div className="timestamp">created at: {user.created_at}</div>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default UserCard;

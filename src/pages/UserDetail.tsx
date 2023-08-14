import React from 'react';
import { useParams } from 'react-router-dom';

interface User {
  id: number;
  name: string;
  title: string;
  location: string;
  created_at: string; 
}

interface UserDetailProps {
  users: User[];
}

const UserDetail: React.FC<UserDetailProps> = ({ users }) => {
  const { userId } = useParams<{ userId?: string }>();

  if (!userId) {
    return <div>User ID not provided</div>;
  }

  const user = users.find(user => user.id === parseInt(userId));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="user-detail-wrapper">
      <div className='centered'>
        <div className="detail-info">{user.name}</div> 
        <div className="detail-info">{user.location}</div> 
        <div className="detail-info">{user.title}</div> 
        <div className="detail-info">{user.created_at}</div> 
      </div> 
    </div>
  );
};

export default UserDetail;
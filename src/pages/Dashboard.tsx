import React, { useState } from 'react';
import AppBar from '../components/AppBar';
import NavigationSidebar from '../components/NavigationSidebar';
import UserList from '../components/UserList';
import userData from '../data/data.json';

interface User {
  id: number;
  name: string;
  title: string;
  location: string;
  created_at: string;
}

interface DashboardProps {
  userName: string;
}

const Dashboard: React.FC<DashboardProps> = ({ userName }) => {
  const [users, setUsers] = useState<User[]>(userData);

  const handleUserRemove = (userId: number) => { 
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
  };

  return (
    <div className="dashboard-container">
      <AppBar userName={userName} />
      <div className="dashboard-content">
        {/* TODO: feels like something is not right with the onUserClick. I started to use it here but
        found a way to make it work in the actual component. A blank call doesn't feel right but
        for the moment I feel like "if it's not broke don't fix it" */}
        <NavigationSidebar users={users} onUserClick={() => {}} /> 
        <UserList users={users} onRemove={handleUserRemove} />
      </div>
    </div>
  );
};

export default Dashboard;

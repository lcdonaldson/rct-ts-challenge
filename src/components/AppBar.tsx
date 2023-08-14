import React from 'react';

interface AppBarProps {
  userName: string;
}

const AppBar: React.FC<AppBarProps> = ({ userName }) => {
  return (
    <div className="app-bar">
      <div className="greeting">Hello, {userName}</div>
    </div>
  );
};

export default AppBar;
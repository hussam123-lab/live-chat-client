import { Box } from '@mui/material';
import ChatPage from 'components/ChatWindow/ChatPage';
import MyForm from 'components/start/SignUpPage';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';


function App() {
  const [user, setUser] = useState(null)
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<MyForm setUser={setUser} />} />
        <Route path="chat" element={<ChatPage user={user} />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;

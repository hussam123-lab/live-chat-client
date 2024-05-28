import React, { Component } from 'react'
import MessagesPanel from './MessagesPanel';
import { Box } from '@mui/material';
const ChatPanel = () => {
    return (
        <Box sx={{
            display: 'flex',
        }}>
            <MessagesPanel />
        </Box>
    );
}

export default ChatPanel;
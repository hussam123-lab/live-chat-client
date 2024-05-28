import { Box, TextField } from '@mui/material';
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
const MessagesPanel = () => {
    return (

        <Box sx={{
            display: 'flex', alignItems: 'center', alignContent: 'center', position: 'fixed',
            bottom: 0,
            width: '100%',
            backgroundColor: '#f9f9f9',
            padding: '10px',
            borderTop: '1px solid #ddd',
        }}>
            <Box
                sx={{
                    width: '70%',
                    maxWidth: '100%',
                    display: 'flex',
                }}
            >
                <TextField fullWidth hiddenLabel id="fullWidth" />
                <SendIcon sx={{ fontSize: '2rem' }} />
                <AttachFileIcon sx={{ fontSize: '2rem' }} />
            </Box>
        </Box>);
}

export default MessagesPanel;
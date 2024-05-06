import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react'

function ContactsModal() {
    const [phone, setPhone] = useState('');
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };
    return (
        <Box sx={{
            bgcolor: 'background.paper',
            border: '2px solid #000',
            width: 400,
            padding: '5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <form style={{ width: '100%' }}>
                <TextField
                    label="phone"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={phone}
                    onChange={handlePhoneChange}
                />
            </form>
            <Button
                variant="contained"
                color="primary"
                type="button"
            >
                Add Contact
            </Button>
        </Box>
    );
}

export default ContactsModal;

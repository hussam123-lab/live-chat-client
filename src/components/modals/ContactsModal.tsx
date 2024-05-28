import { Box, Button, TextField } from '@mui/material';
import React, { Dispatch, SetStateAction, useState } from 'react'
import { add_contact } from 'services/contactsServices';
import { User } from 'types/users';

const ContactsModal = ({ user, setOpen, setUser }: { user: User, setOpen: Dispatch<SetStateAction<boolean>>, setUser: Dispatch<SetStateAction<User>> }) => {
    const [phone, setPhone] = useState('');
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const submit_add_contact = async () => {
        const user_new = await add_contact(user, { 'phone_number': phone })
        setUser(user_new)
        setOpen(false)
    }
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
                onClick={submit_add_contact}
            >
                Add Contact
            </Button>
        </Box>
    );
}

export default ContactsModal;

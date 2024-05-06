import React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import ContactsModal from 'components/modals/ContactsModal';
import { User } from "types/users";
const ContactsPage = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Box sx={{ display: 'flex', flexDirection: 'column', borderRight: 1, borderColor: 'divider', height: '100vh', paddingRight: '5rem' }}>
                <Button onClick={handleOpen} sx={{ marginLeft: '5rem', marginTop: '3rem' }} variant="contained">Add Contact</Button>
            </Box>
            <Modal
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ContactsModal />
            </Modal>
        </div>
    );
}

export default ContactsPage;

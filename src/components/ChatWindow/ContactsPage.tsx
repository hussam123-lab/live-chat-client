import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import ContactsModal from 'components/modals/ContactsModal';
import { User } from "types/users";
import { get_user } from 'services/contactsServices';
import UserCard from 'components/global/UserCard';
const ContactsPage = ({ user, setUser }: { user: User, setUser: Dispatch<SetStateAction<User>> }) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [contactsList, setContactsList] = useState(null)
    useEffect(() => {
        const fetchUsers = async () => {
            const userPromises = user.contacts.map(contactId => get_user(contactId));
            const usersArray = await Promise.all(userPromises);
            setContactsList(usersArray)
            console.log(usersArray)
        };

        fetchUsers();

    },
        [user.contacts])

    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    borderRight: 1,
                    borderColor: 'divider',
                    height: '100vh',
                    // paddingRight: '5rem',
                    width: 'auto' // Allow the Box to expand
                }}
            >
                <Button
                    onClick={handleOpen}
                    sx={{
                        marginLeft: '5rem',
                        marginTop: '3rem',
                        width: '150px', // Fixed width for the button
                        display: 'flex',
                        alignItems: 'center',
                        alignContent: 'center',
                        marginBottom: '4rem'

                    }}
                    variant="contained"
                >
                    Add Contact
                </Button>
                {contactsList?.map((contact) => (
                    <UserCard contact={contact.name} />
                    // <Box sx={{ justifyContent: 'center', border: '0.1rem solid black', width: '20rem', display: 'flex', alignItems: 'center' }} key={contact}>{contact.name}</Box>
                ))}
            </Box>
            <Modal
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ContactsModal user={user} setUser={setUser} setOpen={setOpen} />
            </Modal>
        </div>
    );
}

export default ContactsPage;

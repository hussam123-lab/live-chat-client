import OptionsPanel from 'components/global/OptionsPanel';
import ChatPanel from 'components/ChatPage/ChatPanel';
import { User } from "types/users";
import ContactsPage from './ContactsPage';
import { Box } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
const ChatPage = ({ user, setUser }: { user: User, setUser: Dispatch<SetStateAction<User>> }) => {



    return (<Box sx={{ display: 'flex' }}>
        <OptionsPanel />
        <ContactsPage user={user} setUser={setUser} />
        <ChatPanel />
    </Box>);
}

export default ChatPage;
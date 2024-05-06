import OptionsPanel from 'components/global/OptionsPanel';
import { User } from "types/users";
import ContactsPage from './ContactsPage';
import { Box } from '@mui/material';
const ChatPage = () => {
    return (<Box sx={{ display: 'flex' }}>
        <OptionsPanel />
        <ContactsPage />
    </Box>);
}

export default ChatPage;
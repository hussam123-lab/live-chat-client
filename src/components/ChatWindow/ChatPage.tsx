import OptionsPanel from 'components/global/OptionsPanel';
import { User, UserObject } from "types/users";
import ContactsPage from './ContactsPage';
import { Box } from '@mui/material';
const ChatPage = ({ user }: { user: UserObject }) => {



    return (<Box sx={{ display: 'flex' }}>
        <OptionsPanel />
        <ContactsPage user={user} />
    </Box>);
}

export default ChatPage;
import { Drawer } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MessageIcon from '@mui/icons-material/Message';

const OptionsPanel = () => {
    const drawerWidth = 240;

    return (
        <Drawer variant="permanent" sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
        }}>
            <List>
                <ListItem key={"Messages"} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <MessageIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Messages"} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    );
}

export default OptionsPanel;
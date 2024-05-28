import { Box, Card, CardContent, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const UserCard = ({ contact }: { contact: string }) => {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: '5rem', alignItems: 'center' }}>
                    <PersonIcon />
                    <Typography variant="h5" component="div">
                        {contact}
                    </Typography>

                </CardContent>
            </Card>
        </Box>
    );
}

export default UserCard;
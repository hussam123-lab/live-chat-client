import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { create_user } from 'services/contactsServices';

const MyForm = ({ setUser }) => {
    // State variables for the name and password
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate(); // Hook to get the navigate function

    // Function to handle changes to the name input
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    // Function to handle changes to the password input
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handlePhoneChange = (event) => {
        setPhone(event.target.value)
    }

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the form from being submitted to the server
        console.log('Submitted Name:', name);
        console.log('Submitted Password:', password);
        try {
            const user = await create_user({ name: name, password: password, phone_number: phone })
            setUser(user)
            console.log(user)
            navigate('/chat'); // Navigate to /chat on form submission
        }
        catch (error) {
            console.error('Failed to create user:', error);
        }
    };

    // Function for login button
    const handleLogin = () => {
        console.log('Login action here');
        navigate('/chat'); // Navigate to /chat on login click
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', // This makes the container take the full height of the viewport
        }}>
            <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'column', // Changed from row to column for a typical form layout
                width: '35rem',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem' // Adds space between form elements
            }}>
                <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={name}
                    onChange={handleNameChange}
                />
                <TextField
                    label="Password"
                    type="password" // Ensures the password field obscures text
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <TextField
                    label="Phone"
                    type="phone" // Ensures the password field obscures text
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={phone}
                    onChange={handlePhoneChange}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Submit
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    type="button" // Changed to button to avoid form submission
                    onClick={handleLogin} // Use handleLogin to navigate on click
                >
                    Login
                </Button>
            </form>
        </div>
    );
}

export default MyForm;

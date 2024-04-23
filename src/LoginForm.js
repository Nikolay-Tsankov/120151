import { Notification } from 'react-admin';
import { TextField, Button, Card, CardContent } from '@mui/material';
import { useState } from 'react';
import { getUsers } from './databaseMock';

function LoginForm({ setLoggedIn, setIsaAdmin }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = getUsers().find((user) => user.username === username && user.password === password);
            if (user) {
                setLoggedIn(true);
                if (user.admin) {
                    setIsaAdmin(true);
                }
            } else {
                alert('Invalid username or password');
            }
        }
        catch (error) {
            alert('An error occurred while fetching user data');
        };
    }

    return (
        <Card>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <TextField
                        id="username"
                        label="Username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Login
                    </Button>
                </form>
            </CardContent>
            <Notification />
        </Card>
    );
}

export default LoginForm;

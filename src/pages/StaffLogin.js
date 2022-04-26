
import Navbar from '../components/Navbar';
import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';
import {
    useNavigate,
    useLocation,
    Navigate,
} from 'react-router-dom';

import { siteLinks } from '../constants/url-constants';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { CenteredGrid } from '../components/CenteredGrid';
import { Page } from '../components/Page';
import { LoginForm } from '../components/LoginForm';

const StaffLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState('');

    const navigate = useNavigate();
    const auth = useAuth();
    const location = useLocation();

    const from = location.state?.from?.pathname || siteLinks.staffLogin.url;

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    }

    const onSubmit = async (data) => {
        data.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            navigate(from, { replace: true });
        } catch (error) {
            console.log('error: ' + error);
            setEmailError(error.message);
        }
    }

    if (auth.user) {
        return (<Navigate to={siteLinks.staffHome.url} />);
    }

    return (
        <Page>
            <Navbar />
            <CenteredGrid>
                <h1>Staff Login</h1>
                <LoginForm onSubmit={onSubmit}>
                    <label>Email</label>
                    <input
                        type="text"
                        required
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        error={emailError}
                    />
                    <label>Password</label>
                    <span>
                        <input
                            type={showPassword ? "text" : "password"}
                            required
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                        />
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleTogglePassword}
                            style={{ height: '25px', width: '25px' }}
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </span>

                    {!auth.isAuthenticating && <button type="submit">Submit</button>}
                    {auth.isAuthenticating && <button type="submit" disabled="true">Loading...</button>}
                </LoginForm>
            </CenteredGrid>
        </Page>
    );
}

export default StaffLogin;
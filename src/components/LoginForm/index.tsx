import "./index.css";
import * as React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Typography,
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Grid,
    Button,
    Paper,
    TextField,
    OutlinedInput,
    InputAdornment,
    FormHelperText,
    FormControl
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import Alert from '@material-ui/lab/Alert';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

interface LoginProps {
    username: string,
    usernameError: boolean;
    usernameErrorText: string;
    password: string;
    passwordError: boolean;
    passwordErrorText: string;
    showPassword: boolean;
    enableSubmit: boolean;
    authenticationFailed: boolean;
    onUsernameChange(event: any): void;
    onPasswordChange(event: any): void;
    onPasswordVisibleChange(event: any): void;
    onSubmit(event: any): void;
}


const LoginForm: React.FC<LoginProps> = (props) => {
    var errorMessage: any;

    if (props.authenticationFailed === true) {
        errorMessage = <Alert severity="error">Wrong credentials!</Alert>;
    }

    return (
        <div>
            {errorMessage}
            <Grid container spacing={0}>
                <Grid item xs={4}>
                    <Typography className="greeting-1">Hello!</Typography>
                    <Typography className="greeting-2">Don’t have an account?
                        <Typography className="greeting-3">Sign up now.</Typography></Typography>
                    <Button className="sign-up-btn">Sign Up</Button>
                </Grid>
                <Grid item xs={8}>
                    <Paper className="login-form-separator">
                        <Paper className="circle" />
                        <Typography className="greeting-4">Welcome back</Typography>
                        <FormControl variant="outlined">
                            <OutlinedInput label="username" value={props.username}
                                onChange={props.onUsernameChange}
                                error={props.usernameError} placeholder="Username or Email" className="username-textfield"
                            />
                            <FormHelperText style={{ position: "absolute", left: "440px", top: "350px", width: "150px" }} error={props.usernameError}>
                                {props.usernameErrorText}
                            </FormHelperText>
                        </FormControl>
                        <FormControl variant="outlined">
                            <OutlinedInput
                                id="password"
                                type={props.showPassword ? 'text' : 'password'}
                                value={props.password}
                                onChange={props.onPasswordChange}
                                autoComplete="off"
                                required
                                className="password-textfield"
                                error={props.passwordError}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            edge="end"
                                            onClick={props.onPasswordVisibleChange}
                                            style={{ marginRight: "5%" }}
                                        >
                                            {props.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                            <FormHelperText style={{ position: "absolute", left: "440px", top: "490px", width: "150px" }} error={props.passwordError}>
                                {props.passwordErrorText}
                            </FormHelperText>
                        </FormControl>
                        <Button onClick={props.onSubmit} disabled={!props.enableSubmit} className="login-btn">Login</Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default LoginForm;
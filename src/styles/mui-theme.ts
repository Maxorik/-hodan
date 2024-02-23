import {createTheme, ThemeOptions } from '@mui/material/styles';

const infoColor = 'hsla(210, 60%, 65%, 1)';
const buttonColor = 'hsl(98,20.5%,43.9%)';
const contentColor = 'hsla(0, 0%, 80%, 1)';
const bgColor = 'hsla(210, 20%, 10%, 1)';
const dividerColor = 'hsla(210, 60%, 65%, 0.07)';
const highlightColor = 'hsl(26, 85%, 57%)';

const themeOptions: ThemeOptions = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: contentColor,
        },
        secondary: {
            main: buttonColor,
        },
        text: {
            primary: contentColor,
            secondary: contentColor,
        },
        background: {
            paper: bgColor,
            default: bgColor,
        },
        success: {
            main: buttonColor,
            contrastText: '#000',
        },
    },
})

export default themeOptions;
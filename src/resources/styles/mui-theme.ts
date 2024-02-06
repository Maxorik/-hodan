import {createTheme, ThemeOptions } from '@mui/material/styles';

const infoColor = 'hsla(210, 60%, 65%, 1)';
const contentColor = 'hsla(0, 0%, 80%, 1)';
const hrefColor = 'hsla(180, 100%, 86%, 0.89)';
const hrefHoverColor = 'hsla(57, 100%, 76%, 0.89)';
const bgColor = 'hsla(210, 20%, 10%, 1)';
const dividerColor = 'hsla(210, 60%, 65%, 0.07)';
const highlightColor = 'hsl(26, 85%, 57%)';

const themeOptions: ThemeOptions = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: infoColor,
        },
        secondary: {
            main: contentColor,
        },
        text: {
            primary: contentColor,
            secondary: infoColor
        },
        background: {
            paper: bgColor,
            default: bgColor,
        },
    },
})

export default themeOptions;
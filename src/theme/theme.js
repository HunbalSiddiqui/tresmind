import { createMuiTheme, colors } from '@material-ui/core';
import typography from './typography';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#030303",
            light: '#030303',
            dark: '#030303'
        },
        secondary: {
            main: "#FFFFFF",
            light: "#FFFFFF",
        },
        success: {
            main: "#8bbb2a",
            light: "#8b96a8",
        },
        error: {
            main: "#de6868",
            light: "#8b96a8",
        },
        info: {
            main: '#00FFB2',
            light: '#00FFB2',
        },
        background: {
            default: "#030303"
        },
    },
    overrides: {
        MuiAppBar: {
            root: {
                borderBottom: '0.5px solid #D3D3D3'
            }
        }
    },
    props: {
        MuiButton: {
            // disableRipple: true,
        }
    },
    shadows: ['none'],
    typography
});

export default theme;

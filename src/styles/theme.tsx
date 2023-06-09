import { colors } from './colors'

// MUI
import { createTheme, ThemeProvider } from '@mui/material/styles'

type IProps = {
    children: JSX.Element | JSX.Element[]
}

// them component
const ThemeApp: React.FC<IProps> = ({ children }) => {
    const colorsTheme = createTheme({
        palette: {
            primary: {
                main: colors.primary.main,
                light: colors.primary.light,
                dark: colors.primary.dark,
                contrastText: colors.primary.contrastText,
            },
            secondary: {
                main: colors.secondary.main,
                light: colors.secondary.light,
                dark: colors.secondary.dark,
                contrastText: colors.secondary.contrastText,
            },
            success: {
                main: colors.success.main,
                light: colors.success.light,
                dark: colors.success.dark,
                contrastText: colors.success.contrastText,
            },
            error: {
                main: colors.error.main,
                light: colors.error.light,
                dark: colors.error.dark,
                contrastText: colors.error.contrastText,
            },
            warning: {
                main: colors.warning.main,
                light: colors.warning.light,
                dark: colors.warning.dark,
                contrastText: colors.warning.contrastText,
            },
            info: {
                main: colors.info.main,
                light: colors.info.light,
                dark: colors.info.dark,
                contrastText: colors.info.contrastText,
            },
        },
        typography: {
            h1: {
                fontFamily: 'Playfair Display, serif',
                fontWeight: '700',
                fontSize: '40px',
                '@media (max-width:600px)': {
                    fontSize: '35px',
                },
            },
            h2: {
                fontFamily: 'Playfair Display, serif',
                fontWeight: '700',
                fontSize: '30px',
                '@media (max-width:600px)': {
                    fontSize: '25px',
                },
            },
            h3: {
                fontFamily: 'Roboto, sans-serif',
                fontWeight: '400',
                fontSize: '25px',
                '@media (max-width:600px)': {
                    fontSize: '20px',
                },
            },
            h4: {
                fontFamily: 'Roboto, sans-serif',
                fontWeight: '400',
                fontSize: '20px',
                '@media (max-width:600px)': {
                    fontSize: '16px',
                    fontWeight: '700',
                },
            },
            h5: {
                fontFamily: 'Roboto, sans-serif',
                fontWeight: '400',
                fontSize: '18px',
                '@media (max-width:600px)': {
                    fontSize: '14px',
                    fontWeight: '700',
                },
            },
            h6: {
                fontFamily: 'Roboto, sans-serif',
                fontWeight: '700',
                fontSize: '14px',
                '@media (max-width:600px)': {
                    fontSize: '12px',
                },
            },
        },
    })

    return <ThemeProvider theme={colorsTheme}>{children}</ThemeProvider>
}

export default ThemeApp

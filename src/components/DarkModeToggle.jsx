import React, { useContext, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import { DarkMode, LightMode } from '@mui/icons-material';
import Switch from '@mui/material/Switch';
import { Box } from '@mui/material';
import { DarkModeContext } from '../context/DarkModeProvider';

export default function DarkModeToggle() {

    const  {isDarkMode, handleToggle} = useContext(DarkModeContext)



    const theme = createTheme({
        palette: {
            mode: isDarkMode ? 'dark' : 'light',
        },
    });



    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100vh"
                position = "absolute"
                right ="20px"
                sx = {{width: {md: "65px"}, padding: "0px"}}
            >
                <IconButton onClick={handleToggle}>
                    {isDarkMode ? <DarkMode sx={{ color: '#fff' }} /> : <LightMode sx={{ color: '#fbc02d' }} />}
                </IconButton>
                <Switch checked={isDarkMode} onChange={handleToggle} />
            </Box>
        </ThemeProvider>
    );
}

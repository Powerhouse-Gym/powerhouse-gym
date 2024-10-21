import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import { DarkMode, LightMode } from '@mui/icons-material';
import Switch from '@mui/material/Switch';
import { Box } from '@mui/material';

export default function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: isDarkMode ? 'dark' : 'light',
        },
    });

    // Update the body class when the theme changes
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100vh"
            >
                <IconButton onClick={handleToggle}>
                    {isDarkMode ? <DarkMode sx={{ color: '#fff' }} /> : <LightMode sx={{ color: '#fbc02d' }} />}
                </IconButton>
                <Switch checked={isDarkMode} onChange={handleToggle} />
            </Box>
        </ThemeProvider>
    );
}

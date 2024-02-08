import React from "react";
import { LeftSideBar, MainContent, RightSideBar } from "components";
import './styles/main.scss'
import { ThemeProvider } from '@mui/material/styles';
import themeOptions from './styles/mui-theme'

function App() {
    return (
        <ThemeProvider theme={ themeOptions }>
            <div className='app-container'>
                <LeftSideBar />
                <MainContent />
                <RightSideBar />
            </div>
        </ThemeProvider>
    );
}

export default App;
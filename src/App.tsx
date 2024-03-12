import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import themeOptions from './styles/mui-theme'
import { LeftSideBar, MainContent, RightSideBar, Footer } from "components";
import { isMobile } from './store'
import './styles/main.scss'

function App() {
    return (
        <ThemeProvider theme={ themeOptions }>
            <div className='app-container'>
                { !isMobile && <LeftSideBar/> }
                <MainContent />
                { !isMobile && <RightSideBar /> }
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
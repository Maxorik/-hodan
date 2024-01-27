import React from "react";
import { LeftSideBar, MainContent } from "components";
import './assets/styles/main.scss'

function App() {
    return (
        <div className='app-container'>
           <LeftSideBar />
            <MainContent />
        </div>
    );
}

export default App;
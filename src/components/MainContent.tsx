import React from 'react';
import {observer} from "mobx-react-lite";

export const MainContent = observer(() => {
    return (
        <div className="main-content-container">
            <div className='header-container'>
                <div className='content-color'>ddf</div>
            </div>
            <div className='content-container'>
                контент здесь
            </div>
        </div>
    );
})
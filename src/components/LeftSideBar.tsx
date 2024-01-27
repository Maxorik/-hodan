import React from 'react';
import {observer} from "mobx-react-lite";

export const LeftSideBar = observer(() => {
    return (
        <div className="left-side-bar-container">
            <div className='header-container'>
                <div className='header22'>123</div>
            </div>
            <div className='content-container'>
                дерево
            </div>
        </div>
    );
})
import React from 'react';
import { observer } from "mobx-react-lite";
import appStore from '../store/app'

export const RightSideBar = observer(() => {
    return (
        <div className="right-side-bar-container">
            <div className='header-container'>
                <div className='header22'>Добавить...</div>
            </div>
            <div className='content-container'>

            </div>
        </div>
    );
})
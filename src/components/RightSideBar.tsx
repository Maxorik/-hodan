import React from 'react';
import { observer } from "mobx-react-lite";
import appStore from 'store'
import { AddResource, AddRadio } from 'pages'

export const RightSideBar = observer(() => {
    return (
        <div className="right-side-bar-container">
            <div className='header-container'>

            </div>
            <div className='content-container'>
                { appStore.activePage === 'resources' && <AddResource/> }
                { appStore.activePage === 'radio' && <AddRadio/> }
            </div>
        </div>
    );
})
import React from 'react';
import { observer } from "mobx-react-lite";
import { ResourcePage, ProjectPage } from '../pages'
import appStore from '../store/app'

export const MainContent = observer(() => {
    return (
        <div className="main-content-container">
            <div className='header-container'>
                <div className='content-color'>ddf</div>
            </div>
            { appStore.activePage === 'services' && <ResourcePage/> }
            { appStore.activePage === 'projects' && <ProjectPage /> }
        </div>
    );
})
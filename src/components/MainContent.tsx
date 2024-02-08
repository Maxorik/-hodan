import React from 'react';
import { observer } from "mobx-react-lite";
import { ResourcePage, ProjectPage } from '../pages'
import appStore from '../store/app'
import { SearchWidget } from './SearchWidget';

export const MainContent = observer(() => {
    return (
        <div className="main-content-container">
            <div className='header-container fixed-main'>
                <div className='content-color'>ddf</div>
            </div>
            <div className='fixed-main'>
                <SearchWidget />
            </div>
            <div className='mt-112'>
                { appStore.activePage === 'resources' && <ResourcePage/> }
                { appStore.activePage === 'projects' && <ProjectPage /> }
            </div>
        </div>
    );
})
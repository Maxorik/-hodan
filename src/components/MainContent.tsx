import React from 'react';
import { observer } from "mobx-react-lite";
import { ResourcePage, RadioPage, TutorialsPage, MainPage, ProjectsPage } from 'pages'
import appStore from 'store'
import { SearchWidget } from './SearchWidget';

export const MainContent = observer(() => {
    const pageWithSearch = ['resources', 'tutorials'];

    return (
        <div className="main-content-container">
            <div className='header-container fixed-main'>
                { pageWithSearch.includes(appStore.activePage) && <SearchWidget /> }
            </div>
            <div className='middle-content-container'>
                { appStore.activePage === 'main' && <MainPage/> }
                { appStore.activePage === 'resources' && <ResourcePage/> }
                { appStore.activePage === 'radio' && <RadioPage /> }
                { appStore.activePage === 'tutorials' && <TutorialsPage /> }
                { appStore.activePage === 'projects' && <ProjectsPage /> }
            </div>
        </div>
    );
})
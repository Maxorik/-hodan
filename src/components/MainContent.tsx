import React from 'react';
import { observer } from "mobx-react-lite";
import { ResourcePage, RadioPage } from '../pages'
import appStore from '../store'
import { SearchWidget } from './SearchWidget';

export const MainContent = observer(() => {
    const pageWithSearch = ['resources'];

    return (
        <div className="main-content-container">
            <div className='header-container fixed-main'>
            </div>
            <div className='fixed-main'>
                { pageWithSearch.includes(appStore.activePage) && <SearchWidget /> }
            </div>
            <div className='mt-112'>
                { appStore.activePage === 'resources' && <ResourcePage/> }
                { appStore.activePage === 'radio' && <RadioPage /> }
            </div>
        </div>
    );
})
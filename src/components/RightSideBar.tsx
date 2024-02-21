import React from 'react';
import { observer } from "mobx-react-lite";
import appStore from 'store'
import { AddResource, AddRadio, AddTutorial } from 'pages'
import { AddForm } from 'components'

export const RightSideBar = observer(() => {
    return (
        <div className="right-side-bar-container">
            <div className='header-container'>

            </div>
            <div className='content-container'>
                { appStore.activePage === 'resources' && <AddResource/> }
                { appStore.activePage === 'radio' && <AddForm type={ 'radio' } inputList={ [{ label: 'Ссылка на Youtube', name: 'href' }] } /> }
                {/*{ appStore.activePage === 'radio' && <AddRadio/> }*/}
                { appStore.activePage === 'tutorials' && <AddTutorial/> }
            </div>
        </div>
    );
})
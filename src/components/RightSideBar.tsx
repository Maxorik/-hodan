import React from 'react';
import { observer } from "mobx-react-lite";
import appStore from 'store'
import { AddForm, VideoIntegration } from 'components'

export const RightSideBar = observer(() => {
    return (
        <div className="right-side-bar-container">
            <div className='header-container'>

            </div>
            <div className='content-container'>
                { appStore.activePage === 'radio' && <AddForm
                    type={ 'radio' }
                    inputList={ [{ label: 'Ссылка на Youtube', name: 'href' }] }
                /> }
                { appStore.activePage === 'resources' && <AddForm
                    type={ 'resources' }
                    inputList={ [{ label: 'Название', name: 'title' }, { label: 'Ссылка', name: 'href' }, { label: 'Описание', name: 'text' }, { label: 'Теги', name: 'tags' }] }
                /> }
                { appStore.activePage === 'tutorials' && <AddForm
                    type={ 'tutorials' }
                    inputList={ [{ label: 'Название', name: 'title' }, { label: 'Ссылка', name: 'href' }, { label: 'Описание', name: 'text' }, { label: 'Теги', name: 'tags' }] }
                /> }
            </div>

            <div className='bottom-container'>
                { appStore.miniPlayerLink && <VideoIntegration link={ appStore.miniPlayerLink } playerWidth={360} playerHeight={200}/> }
            </div>
        </div>
    );
})
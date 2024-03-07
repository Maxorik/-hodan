/**
 * Форма добавления карточки
 */
import React from 'react';
import { observer } from "mobx-react-lite";
import { AddFormComponent } from 'components'
import appStore from '../store'

export const AddForm = observer(() => {

    return (
        <>
            { appStore.isAdmin && <div className='content-container add-form-container'>
                { appStore.activePage === 'radio' && <AddFormComponent
                    type={ 'radio' }
                    inputList={ [{ label: 'Ссылка на Youtube', name: 'href' }] }
                /> }
                { appStore.activePage === 'resources' && <AddFormComponent
                    type={ 'resources' }
                    inputList={ [{ label: 'Название', name: 'title' }, { label: 'Ссылка', name: 'href' }, { label: 'Описание', name: 'text' }, { label: 'Теги', name: 'tags' }] }
                /> }
                { appStore.activePage === 'tutorials' && <AddFormComponent
                    type={ 'tutorials' }
                    inputList={ [{ label: 'Название', name: 'title' }, { label: 'Ссылка', name: 'href' }, { label: 'Описание', name: 'text' }, { label: 'Теги', name: 'tags' }] }
                /> }
            </div> }
        </>
    );
})
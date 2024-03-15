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
                { ['resources', 'tutorials', 'inspire'].some((value) => appStore.activePage === value)  && <AddFormComponent
                    type={ appStore.activePage }
                    inputList={ [{ label: 'Название', name: 'title' }, { label: 'Ссылка', name: 'href' }, { label: 'Описание', name: 'text' }, { label: 'Теги', name: 'tags' }] }
                /> }
                { appStore.activePage === 'radio' && <AddFormComponent
                    type={ 'radio' }
                    inputList={ [{ label: 'Ссылка на Youtube', name: 'href' }] }
                /> }
            </div> }
        </>
    );
})
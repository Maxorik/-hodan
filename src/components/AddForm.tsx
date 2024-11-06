/**
 * Форма добавления карточки
 */
import React from 'react';
import { observer } from "mobx-react-lite";
import { Button, IconButton, TextField, Tooltip } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import appStore, { useFormField } from '../store'

/** интерфейс для инпутов формы */
interface IFormProps {
    type: string;
    inputList: IFormInput[];
}
interface IFormInput {
    label: string;
    name: string;
    formField?: any;
}

export const AddForm = observer(() => {
    return (
        <>
            { <div className='add-form-container'>
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

export const AddFormComponent = observer(({type, inputList}: IFormProps) => {
    inputList.forEach(input => input.formField = useFormField())

    /** Сброс формы */
    const discardForm = () => { inputList.forEach(input => input.formField.reset()) }

    return (
        <>
            <p className='container-title m-0-10'>Новая запись:</p>
            { inputList.map(input => <TextField
                label={ input.label }
                type="text"
                variant="standard"
                name={ input.name }
                { ...input.formField }
                fullWidth
                key={ input.name }
                className='m-0-10'
            />)
            }
            <div className='form-controls'>
                <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    className='m-0-10 mr-8'
                    onClick={ () => {
                        appStore.addRecord(type, inputList);
                        discardForm();
                    } }
                    color="success"
                    disabled={ !appStore.isAdmin }
                >
                    Добавить
                </Button>
                <IconButton
                    color="success"
                    sx={{ p: '10px' }}
                    aria-label="directions"
                    onClick = { () => discardForm() }
                >
                    <DeleteIcon />
                </IconButton>
                <Tooltip title="base - база данных; inspire - статья для вдохновения; network - сети">
                    <IconButton><HelpOutlineOutlinedIcon /></IconButton>
                </Tooltip>
            </div>
        </>
    );
})
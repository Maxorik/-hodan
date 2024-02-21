/**
 * Форма добавления карточки
 */
import React from 'react';
import { observer } from "mobx-react-lite";
import { Button, IconButton, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import appStore, { useFormField } from '../store'

/** интерфейс для инпутов формы */
interface IFormInput {
    label: string;
    name: string;
    formField?: any;
}

interface IFormProps {
    type: string;
    inputList: IFormInput[];
}

export const AddForm = observer(({type, inputList}: IFormProps) => {
    inputList.forEach(input => input.formField = useFormField())

    /** Сброс формы */
    const discardForm = () => {
        inputList.forEach(input => input.formField.reset())
    }

    return (
        <>
            { inputList.map(input => {
                <TextField
                    label={ input.label }
                    type="text"
                    variant="standard"
                    name={ input.name }   // TODO
                    { ...input.formField }
                    fullWidth
                />
            }) }
            <div className='form-controls'>
                <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    className='mr-8'
                    onClick={ () => appStore.addRecord(type, {}) }  // TODO
                >
                    Добавить
                </Button>
                <IconButton
                    color="primary"
                    sx={{ p: '10px' }}
                    aria-label="directions"
                    onClick = { () => discardForm() }
                >
                    <DeleteIcon />
                </IconButton>
            </div>
        </>
    );
})
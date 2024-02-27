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
interface IFormProps {
    type: string;
    inputList: IFormInput[];
}
interface IFormInput {
    label: string;
    name: string;
    formField?: any;
}

export const AddForm = observer(({type, inputList}: IFormProps) => {
    inputList.forEach(input => input.formField = useFormField())

    /** Сброс формы */
    const discardForm = () => {
        inputList.forEach(input => input.formField.reset())
    }

    return (
        <>
            { appStore.isAdmin && <>
                <p className='container-title'>Новая запись:</p>
                { inputList.map(input => <TextField
                        label={ input.label }
                        type="text"
                        variant="standard"
                        name={ input.name }
                        { ...input.formField }
                        fullWidth
                        key={ input.name }
                    />)
                }
                <div className='form-controls'>
                    <Button
                        variant="contained"
                        endIcon={<SendIcon />}
                        className='mr-8'
                        onClick={ () => {
                            appStore.addRecord(type, inputList);
                            discardForm();
                        } }
                        color="success"
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
                </div>
            </> }
        </>
    );
})
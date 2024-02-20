/**
 * Форма добавления карточки
 */
import React from 'react';
import { observer } from "mobx-react-lite";
import { Button, IconButton, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import appStore, { useFormField } from '../store'

export const AddForm = observer((type: string) => {
    const href = useFormField();
    return (
        <>
            {/** TODO map переданных полей - назв. + ссылка  */}
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
                    onClick = { () => href.reset() }
                >
                    <DeleteIcon />
                </IconButton>
            </div>
        </>
    );
})
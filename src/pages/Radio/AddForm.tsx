import React, { useState } from 'react';
import { observer } from "mobx-react-lite";
import { Button, IconButton, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import appStore, { useFormField } from 'store'
import radioStore from './store'

export const AddRadio = observer(() => {
    const href = useFormField();
    return (
        <>
            <TextField
                label="Ссылка на Youtube"
                type="text"
                variant="standard"
                { ...href }
                fullWidth
            />
            <div className='form-controls'>
                <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    className='mr-8'
                    onClick={ () => radioStore.addRadio(href.value) }
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
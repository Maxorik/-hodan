import React, { useState } from 'react';
import { observer } from "mobx-react-lite";
import { Button, IconButton, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import appStore, { useFormField } from '../../store'
import resStore from './store'

export const AddResource = observer(() => {
    const title = useFormField();
    const text = useFormField();
    const tags = useFormField();
    const href = useFormField();

    const discardForm = () => {
        title.reset();
        text.reset();
        tags.reset();
        href.reset();
    }

    return (
        <>
            <TextField
                label="Название"
                type="text"
                variant="standard"
                { ...title }
                fullWidth
            />
            <TextField
                label="Ссылка"
                type="text"
                variant="standard"
                { ...href }
                fullWidth
            />
            <TextField
                label="Описание"
                type="text"
                variant="standard"
                { ...text }
                fullWidth
            />
            <TextField
                label="Теги"
                type="text"
                variant="standard"
                { ...tags }
                fullWidth
            />
            <div className='form-controls'>
                <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    className='mr-8'
                    onClick={ () => resStore.addNote(title.value, href.value, text.value, tags.value) }
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
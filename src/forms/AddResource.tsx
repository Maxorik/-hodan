import React from 'react';
import { observer } from "mobx-react-lite";
import appStore from '../store/app'
import {Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export const AddResource = observer(() => {

    return (
        <>
            <TextField
                label="Название"
                type="text"
                variant="standard"
            />
            <TextField
                label="Ссылка"
                type="text"
                variant="standard"
            />
            <TextField
                label="Описание"
                type="text"
                variant="standard"
            />
            <TextField
                label="Теги"
                type="text"
                variant="standard"
            />
            <Button variant="contained" endIcon={<SendIcon />} className='mt-20'>
                Добавить
            </Button>
        </>
    );
})
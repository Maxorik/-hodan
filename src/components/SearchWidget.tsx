import React from 'react';
import { observer } from "mobx-react-lite";
import appStore from '../store/app'
import { IconButton, Paper, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import InputBase from '@mui/material/InputBase';

export const SearchWidget = observer((type: any) => {   // TODO тип страницы (?)
    console.log(type)
    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 600 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Поиск..."
            />
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                <DeleteIcon />
            </IconButton>
        </Paper>
    );
})
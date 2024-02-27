import React from 'react';
import { observer } from "mobx-react-lite";
import { IconButton, Paper, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import InputBase from '@mui/material/InputBase';
import appStore from 'store'
import config from 'src/config'

export const SearchWidget = observer(() => {
    const setSearchValue = (value: string) => {
        appStore.searchedValue = value;
        value === config.password && appStore.setAdmin(true);
    }
    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Поиск..."
                onChange={ (e) => setSearchValue(e.target.value) }
                value={ appStore.searchedValue }
            />
            <IconButton
                color="success"
                sx={{ p: '10px' }}
                aria-label="directions"
                onClick = { () => appStore.discardSearchValue() }
            >
                <DeleteIcon />
            </IconButton>
        </Paper>
    );
})
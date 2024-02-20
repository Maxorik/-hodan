import React, { useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import appStore, { ICardProps } from 'store';
import { SearchWidget, Card } from 'components';

export const ResourcePage = observer(() => {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        appStore.getData('resoures').then(() => setLoading(false));
    }, []);

    function filteredValue(value: ICardProps) {
        const filter = appStore.searchedValue || '';
        return value.text.includes(filter) || value.title.includes(filter) || value.tags.includes(filter);
    }

    return (
        <div className='content-container'>
            { isLoading ?
               <div className='loader-container'><div className='loader' /></div> :
               appStore.data.resoures.map((card) => {
                   return filteredValue(card) && <Card {...card} key={ card.href } />
            }) }
        </div>
    );
})
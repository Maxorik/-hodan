import React, { useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import RadioStore, { IRadioProps } from './store';
import appStore from '../../store';
import { SearchWidget, VideoIntegration } from '../../components';

export const RadioPage = observer(() => {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        RadioStore.getRadio().then(() => setLoading(false));
    }, []);

    return (
        <div className='content-container'>
            { isLoading ?
               <div className='loader-container'><div className='loader' /></div> :
                RadioStore.radioList.map(item =>
                   <div className='card-container' key={ item.href }>
                       <VideoIntegration link={ item.href } />
                   </div>
            )}
        </div>
    );
})
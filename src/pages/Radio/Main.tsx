import React, { useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";
import { VideoIntegration } from 'components';
import RadioStore from './store';

export const RadioPage = observer(() => {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        RadioStore.getRadio().then(() => setLoading(false));
    }, []);

    return (
        <>
            {isLoading ?
                <div className='loader-container '>
                    <div className='loader'/>
                </div> :
                <div className='content-container video-card-container'>
                    {RadioStore.radioList.map(item =>
                        <div className='card-container' key={ item.href }>
                            <VideoIntegration link={ item.href } playerWidth={ 350 } playerHeight={ 200 } />
                        </div>
                    )}
                </div>
            }
        </>
    );
})
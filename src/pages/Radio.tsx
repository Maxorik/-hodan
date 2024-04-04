import React, { useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";
import { VideoIntegration } from 'components';
import appStore, { ICardProps } from 'store';

export const RadioPage = observer(() => {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        appStore.getData('radio').then(() => setLoading(false));
    }, []);

    return (
        <>
            { isLoading ?
                <div className='loader-container '>
                    <div className='loader'/>
                </div> :
                <div className='content-container video-card-container'>
                    { appStore.data.radio.map(item =>
                        <div className='card-container' key={ item.href }>
                            <VideoIntegration link={ item.href } playerWidth={ 350 } playerHeight={ 200 } />
                        </div>
                    )}
                </div>
            }
        </>
    );
})
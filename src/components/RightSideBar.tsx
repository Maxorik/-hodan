import React from 'react';
import { observer } from "mobx-react-lite";
import appStore from 'store'
import { AddForm, VideoIntegration } from 'components'

export const RightSideBar = observer(() => {
    return (
        <div className="right-side-bar-container">
            <div className='header-container'></div>
            <AddForm />
            { appStore.miniPlayerLink && <div className='bottom-container'>
                <VideoIntegration link={ appStore.miniPlayerLink } playerWidth={360} playerHeight={200}/>
            </div> }
        </div>
    );
})
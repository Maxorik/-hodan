import React, { useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";
import appStore, { isMobile } from 'store';

export const MainPage = observer(() => {
    return (
        <div className='content-container welcome-page'>
            <p className='center'>&bull; Добро пожаловать! &bull;</p>
            <img className='welcome-preview' src={ isMobile ? '../assets/welcome_phone.webp' : '../assets/welcome.webp' } />
            <div className='main-nav-container'>
                <p onClick={ () => appStore.setActivePage('resources') }> Сервисы </p>
                <span className='divider-pc'>&bull;</span>
                <p onClick={ () => appStore.setActivePage('tutorials') }> Туториалы </p>
                <span className='divider-pc'>&bull;</span>
                <p onClick={ () => appStore.setActivePage('projects') }> Проекты </p>
                <span className='divider-pc'>&bull;</span>
                <p onClick={ () => appStore.setActivePage('inspire') }> Разное </p>
            </div>
        </div>
    );
})
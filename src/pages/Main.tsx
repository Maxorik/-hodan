import React, { useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";
import appStore from 'store';

export const MainPage = observer(() => {

    return (
        <div className='content-container welcome-page'>
            <p className='center'>&bull; Добро пожаловать! &bull;</p>
            <img className='welcome-preview' src='../assets/welcome.jpg' />
            <div className='main-nav-container'>
                <p onClick={ () => appStore.setActivePage('resources') }>
                    <span className='divider-mobile'>&bull;</span>
                    Сервисы
                    <span className='divider-mobile'>&bull;</span>
                </p>
                <span className='divider-pc'>&bull;</span>
                <p onClick={ () => appStore.setActivePage('tutorials') }>
                    <span className='divider-mobile'>&bull;</span>
                    Туториалы
                    <span className='divider-mobile'>&bull;</span>
                </p>
                <span className='divider-pc'>&bull;</span>
                <p onClick={ () => appStore.setActivePage('projects') }>
                    <span className='divider-mobile'>&bull;</span>
                    Проекты
                    <span className='divider-mobile'>&bull;</span>
                </p>
                <span className='divider-pc'>&bull;</span>
                <p onClick={ () => appStore.setActivePage('inspire') }>
                    <span className='divider-mobile'>&bull;</span>
                    Разное
                    <span className='divider-mobile'>&bull;</span>
                </p>
            </div>
        </div>
    );
})
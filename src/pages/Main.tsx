import React, { useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";
import appStore from 'store';

export const MainPage = observer(() => {

    return (
        <div className='content-container welcome-page'>
            <p className='center'>&bull; Добро пожаловать! &bull;</p>
            <img className='welcome-preview' src='../assets/welcome.jpg' />
            <div className='main-nav-container'>
                <p onClick={ () => appStore.setActivePage('resources') }>Сервисы</p> &bull;
                <p onClick={ () => appStore.setActivePage('tutorials') }>Туториалы</p> &bull;
                <p onClick={ () => appStore.setActivePage('projects') }>Проекты</p> &bull;
                <p onClick={ () => appStore.setActivePage('inspire') }>Разное</p>
            </div>
        </div>
    );
})
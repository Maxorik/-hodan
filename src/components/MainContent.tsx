import React from 'react';
import { observer } from "mobx-react-lite";
import { Card } from './Card'
import CardsResources from '../store/cards'

export const MainContent = observer(() => {
    return (
        <div className="main-content-container">
            <div className='header-container'>
                <div className='content-color'>ddf</div>
            </div>
            <div className='content-container'>
                Введите слово для поиска...
                { CardsResources.map(card => <Card {...card} />) }
            </div>
        </div>
    );
})
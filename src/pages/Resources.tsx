import React from 'react';
import { observer } from "mobx-react-lite";
import { Card } from '../components'
import CardsResources from '../store/cards'

export const ResourcePage = observer(() => {
    return (
        <div className='content-container'>
            Введите слово для поиска...
            { CardsResources.map(card => <Card {...card} />) }
        </div>
    );
})
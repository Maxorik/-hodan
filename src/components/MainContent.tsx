import React from 'react';
import { observer } from "mobx-react-lite";
import { Card } from './Card'

export const MainContent = observer(() => {
    return (
        <div className="main-content-container">
            <div className='header-container'>
                <div className='content-color'>ddf</div>
            </div>
            <div className='content-container'>
                контент здесь
                <Card
                    image = 'resources/image/css-shadow.png'
                    title = 'CSS BOX-SHADOW генератор'
                    text = 'Свойство принимает составное значение из пяти разных частей: горизонтальное смещение, вертикальное смещение, размытие, растяжение, цвет тени. К тому же можно указать будет ли тень внешней или внутренней.'
                />
            </div>
        </div>
    );
})
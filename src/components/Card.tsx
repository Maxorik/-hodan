/** Компонент для карточки */

import React from 'react';
import {observer} from "mobx-react-lite";
import images from '../resources/image'

interface CardProps {
    title: string,
    text: string,
    image: string
}

export const Card = observer(({ title, text, image }: CardProps) => {
    return (
        <div className='card-container'>
            <div className='card-preview'>
                <img src={ image } />
            </div>
            <div>
                <p className='card-title'>{ title }</p>
                <p className='card-text'>{ text }</p>
            </div>
        </div>
    );
})
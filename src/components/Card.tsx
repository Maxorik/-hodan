/** Компонент для карточки */

import React from 'react';
import { observer } from "mobx-react-lite";
import { ICardProps } from '../store/cards'

export const Card = observer(({ title, text, image, href }: ICardProps) => {
    const imagePath = (image: string) => {
        return `resources/image/${image}`;
    }

    return (
        <div className='card-container'>
            <div className='card-preview'>
                <img src={ imagePath(image) } />
            </div>
            <div>
                <a href={ href } target='_blank' className='card-title'>{ title }</a>
                <p className='card-text'>{ text }</p>
            </div>

            {/* TODO спойлер с description*/}

        </div>
    );
})
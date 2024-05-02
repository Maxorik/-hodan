/**
 * Элемент карточки
 */

import React from 'react';
import { VideoIntegration } from 'components';
import Tooltip from '@mui/material/Tooltip';

interface CardProps {
    href: string,
    text: string,
    title: string,
    tags?: string,
    showVideoPreview?: boolean,
    showTags?: boolean
}

export const Card = ({ href, text, title, tags, showVideoPreview, showTags }: CardProps) => {
    return(
        <div className='card-container'>
            { showVideoPreview && <div className='card-video-preview'>
                <VideoIntegration link={ href } autoplay={ true } />
            </div> }
            <div className='card-content'>
                <a href={ href } target='_blank'>{ title }</a>
                <p className='card-text'>{ text }</p>
            </div>
        </div>
    )
}

Card.defaultProps = {
    showVideoPreview: false,
    showTags: false
}
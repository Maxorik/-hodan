/**
 * Элемент карточки
 */

import React from 'react';
import { VideoIntegration } from 'components';

interface CardProps {
    href: string,
    text: string,
    title: string,
    tags?: string,
    showVideoPreview?: boolean,
    showTags?: boolean
}

export const Card = ({ href, text, title, tags, showVideoPreview, showTags }: CardProps) => {
    const parsedTags = (tags: string) => {
        return tags ? tags.split(', ').map(item => '#'+item).join(' ') : null;
    }

    return(
        <div className='card-container'>
            { showVideoPreview && <div className='card-video-preview'>
                <VideoIntegration link={ href } playerWidth={200} playerHeight={160}/>
            </div> }
            <div>
                { showTags && <>
                    <div className='card-tags'>
                        { parsedTags(tags) }
                    </div>
                    <div className='card-divider'/>
                </> }
                <span>
                    {/*&#128640;*/}
                    <a href={ href } target='_blank' className='card-title'>{ title }</a>
                </span>
                <p className='card-text'>{ text }</p>
            </div>
        </div>
    )
}

Card.defaultProps = {
    showVideoPreview: false,
    showTags: false
}
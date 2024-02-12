/**
 * Возвращает youtube-видео вставку
 */

import React from 'react';

interface VideoProps {
    link: string
}

export const VideoIntegration = ({ link }: VideoProps) => {
    const videoCode = link.split('=');
    const videoLink = 'https://www.youtube.com/embed/' + videoCode[1];
    const playerWidth = global.isMobile ? '310' : '560';
    const playerHeight = global.isMobile ? '190' : '315';

    return(
        <div className='video-container'>
            {
                videoCode[1] &&
                <iframe width ={playerWidth}
                        height ={playerHeight}
                        src = {videoLink}
                        title="video example"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                >
                </iframe>
            }
        </div>
    )
}
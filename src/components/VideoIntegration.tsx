/**
 * Возвращает youtube-видео вставку
 */

import React from 'react';

interface VideoProps {
    link: string,
    playerWidth: number,
    playerHeight: number
}

/** Настройки для смартфонов и т.п. */
const monileWidthK = 1.8;
const monileHeightK = 1.65;
const isMobile = window.navigator.userAgent.toLowerCase().includes("mobi");

export const VideoIntegration = ({ link, playerWidth, playerHeight }: VideoProps) => {
    const getLink = () => {
        const videoCode = link.split('=');
        return 'https://www.youtube.com/embed/' + videoCode[1];
    }

    const getWidth = () => {
        return isMobile ? (playerWidth / monileWidthK) : playerWidth;
    }

    const getHeight = () => {
        return isMobile ? (playerHeight / monileHeightK) : playerHeight;
    }

    return(
        <div className='video-container'>
            {
                // videoCode[1] &&
                <iframe width ={ getWidth() }
                        height ={ getHeight() }
                        src = { getLink() }
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
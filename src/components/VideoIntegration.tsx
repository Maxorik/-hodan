/**
 * Возвращает youtube-видео вставку
 */

import React from 'react';
import appStore, { isMobile } from 'store'

interface IVideoProps {
    link: string,
    playerWidth: number,
    playerHeight: number
}

/** Настройки для смартфонов и т.п. */
const monileWidthK = 1;
const monileHeightK = 1.65;

export const VideoIntegration = ({ link, playerWidth, playerHeight }: IVideoProps) => {
    const videoId = link.split('=')[1];

    const getLink = () => {
        return 'https://www.youtube.com/embed/' + videoId;
    }

    const getWidth = () => {
        return isMobile ? (playerWidth / monileWidthK) : playerWidth;
    }

    const getHeight = () => {
        return isMobile ? (playerHeight / monileHeightK) : playerHeight;
    }

    const setMiniPlayer = () => {
        appStore.miniPlayerLink = link;
    }

    return(
        <div className='video-container'>
            { !isMobile && appStore.miniPlayerLink !== link && <span className='mask' onClick={() => setMiniPlayer()}/> }
            {
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
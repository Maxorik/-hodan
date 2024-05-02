/**
 * Возвращает youtube-видео вставку с превью
 */

import React, { useState } from 'react';
import appStore, { isMobile } from 'store'

interface IVideoProps {
    link: string,
    autoplay?: boolean
}

export const VideoIntegration = ({ link, autoplay }: IVideoProps) => {
    /** Подгрузка видео вместо превью */
    const [iframe, setIframe] = useState(0);

    const videoId = link.split('=')[1];

    const autoplayParam = autoplay ? 1 : 0;
    const getVideoLink = () => { return `https://www.youtube.com/embed/${videoId}?autoplay=${autoplayParam}` }

    /** Загружаем само видео. Устанавливаем мини-проигрыватель */
    const uploadVideo = () => {
        appStore.setMiniPlayerLink(getVideoLink().slice(0, -1) + '1');
        setIframe(1)
    }

    const getPreviewImage = (ext?: 'webp' | 'jpg') => {
        const imgExt = ext ? '.' + ext : '.jpg';
        const videoId = link.split('=')[1];
        return `https://i.ytimg.com/vi/${videoId}/mqdefault${imgExt}`;
    }

    return(
        <div className='video-container'
            onClick={ (e) => uploadVideo() }
        >
            { iframe === 0 ? <>
                <img className="video-media" src={getPreviewImage()}/>
                <button className="video-button" aria-label="play">
                    <svg width="68" height="48" viewBox="0 0 68 48">
                        <path className="video-button-shape"
                              d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"></path>
                        <path className="video-button-icon" d="M 45,24 27,14 27,34"></path>
                    </svg>
                </button>
            </> : <>
                <iframe
                    src = { getVideoLink() }
                    title="video example"
                    frameBorder="0"
                    allow="autoplay"
                    allowFullScreen
                >
                </iframe>
            </> }
        </div>
    )
}
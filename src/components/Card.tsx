/**
 * Элемент карточки
 */

import React from 'react';
import { VideoIntegration } from 'components';
import Tooltip from '@mui/material/Tooltip';
import { ImagesearchRollerOutlined, SettingsSuggestOutlined, RocketLaunchOutlined, PublicOutlined,
    PrecisionManufacturingOutlined, ViewQuiltOutlined, ForestOutlined,
    SkateboardingOutlined, CastleOutlined, SatelliteOutlined, HistoryEduOutlined,
    SpellcheckOutlined, BuildOutlined } from '@mui/icons-material';


interface CardProps {
    href: string,
    text: string,
    title: string,
    tags?: string,
    showVideoPreview?: boolean,
    showTags?: boolean
}

/** Словарь для иконок */
const icons = {
    css: ImagesearchRollerOutlined,
    js: SettingsSuggestOutlined,
    react: RocketLaunchOutlined,
    lang: PublicOutlined,
    npm: PrecisionManufacturingOutlined,
    html: ViewQuiltOutlined,
    git: ForestOutlined,
    api: SkateboardingOutlined,
    json: SkateboardingOutlined,
    host: CastleOutlined,
    img: SatelliteOutlined,
    preview: SatelliteOutlined,
    fonts: HistoryEduOutlined,
    regex: SpellcheckOutlined,
    test: BuildOutlined
}

export const Card = ({ href, text, title, tags, showVideoPreview, showTags }: CardProps) => {
    return(
        <div className='card-container'>
            { showVideoPreview && <div className='card-video-preview'>
                <VideoIntegration link={ href } playerWidth={200} playerHeight={160}/>
            </div> }
            { showTags && <div className='tags-container'>
                {
                    tags.split(', ').map(tag => {
                        const Tag = icons[tag] || 'span';
                        return (
                            <Tooltip title={ tag } placement='top' key={ tag }>
                                <div>{ Tag !== 'span' ? <Tag color="info"/> : tag }</div>
                            </Tooltip>
                        );
                    })
                }
            </div> }
            <div className='card-content'>
                <a href={ href } target='_blank' className='card-title'>{ title }</a>
                <p className='card-text'>{ text }</p>
            </div>
        </div>
    )
}

Card.defaultProps = {
    showVideoPreview: false,
    showTags: false
}
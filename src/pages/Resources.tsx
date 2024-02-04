import React, { useEffect } from 'react';
import { observer } from "mobx-react-lite";
import Resources from '../store/resources'

export const ResourcePage = observer(() => {
    useEffect(() => {
        Resources.getResources();
    }, [])

    const parsedTags = (tags: string) => {
        return tags.split(', ').map(item => '#'+item).join(' ');
    }

    return (
        <div className='content-container'>
            Введите слово для поиска...
            { Resources.resourceList.map((card) =>
                <div className='card-container' key={ card.href }>
                    <div className='card-tags'>
                        { parsedTags(card.tags) }
                    </div>
                    <div className='card-divider'/>
                    <div>
                        <span>
                            &#128640;
                            <a href={ card.href } target='_blank' className='card-title'>{ card.title }</a>
                        </span>
                        <p className='card-text'>{ card.text }</p>
                    </div>

                    {/* TODO спойлер с description*/}

                </div>
            ) }
        </div>
    );
})
import React, { useEffect } from 'react';
import { observer } from "mobx-react-lite";
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import Resources, { IResourceProps } from '../store/resources';
import appStore from '../store/app';
import { SearchWidget } from '../components';

export const ResourcePage = observer(() => {
    useEffect(() => {
        Resources.getResources();
    }, [])

    const parsedTags = (tags: string) => {
        return tags ? tags.split(', ').map(item => '#'+item).join(' ') : null;
    }

    function filteredValue(value: IResourceProps) {
        const filter = appStore.searchedValue || '';
        return value.text.includes(filter) || value.title.includes(filter) || value.tags.includes(filter);
    }

    return (
        <div className='content-container'>
            { Resources.resourceList.map((card) => {
               return filteredValue(card) &&
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
            }) }
        </div>
    );
})
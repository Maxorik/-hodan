import React, { useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import appStore from 'store';
import { SearchWidget } from 'components';
import Tutorials, { ITutorialsProps } from './store';

export const TutorialsPage = observer(() => {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        Tutorials.getTutorials().then(() => setLoading(false));
    }, []);

    const parsedTags = (tags: string) => {
        return tags ? tags.split(', ').map(item => '#'+item).join(' ') : null;
    }

    /** Фильтрованное значение */
    function filteredValue(value: ITutorialsProps) {
        const filter = appStore.searchedValue || '';
        return value.text.includes(filter) || value.title.includes(filter) || value.tags.includes(filter);
    }

    /** Переключатель табов */
    const [value, setValue] = useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div className='content-container'>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} >
                            <Tab label="Видео" value="1" />
                            <Tab label="Статьи" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        { isLoading ?
                            <div className='loader-container'><div className='loader' /></div> :
                            Tutorials.tutorialVideoList.map((card) => {
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
                                    </div>
                            }) }
                    </TabPanel>
                    <TabPanel value="2">
                        { isLoading ?
                            <div className='loader-container'><div className='loader' /></div> :
                            Tutorials.tutorialTextList.map((card) => {
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
                                    </div>
                            }) }
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
    );
})
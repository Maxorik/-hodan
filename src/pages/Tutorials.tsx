import React, { useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { VideoIntegration, Card } from "components";
import appStore, { ICardProps } from 'store';

export const TutorialsPage = observer(() => {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        appStore.getData('tutorials').then(() => setLoading(false));
    }, []);

    /** Фильтрованное значение */
    function filteredValue(value: ICardProps) {
        const filter = appStore.searchedValue || '';
        return value.text.includes(filter) || value.title.includes(filter) || value.tags.includes(filter);
    }

    /** Это видео-курс */
    function isVideo(href: string) {
        return href.indexOf('youtube.com') !== -1;
    }

    /** Это база знаний */
    function isBase(tags: string) {
        return tags.indexOf('base') !== -1;
    }

    /** Переключатель табов */
    const [value, setValue] = useState('videos');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div className='content-container'>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} textColor="secondary" indicatorColor="secondary">
                            <Tab label="Видео" value="videos" />
                            <Tab label="Статьи" value="letters" />
                            <Tab label="Базы знаний" value="bases" />
                        </TabList>
                    </Box>
                    <TabPanel value="videos">
                        { isLoading ?
                            <div className='loader-container'><div className='loader' /></div> :
                            appStore.data.tutorials.map((card) => {
                                return filteredValue(card) && isVideo(card.href) && <Card {...card} showVideoPreview={ true } />
                            }) }
                    </TabPanel>
                    <TabPanel value="letters">
                        { isLoading ?
                            <div className='loader-container'><div className='loader' /></div> :
                            appStore.data.tutorials.map((card) => {
                                return filteredValue(card) && !isVideo(card.href) && !isBase(card.tags) && <Card {...card} />
                            }) }
                    </TabPanel>
                    <TabPanel value="bases">
                        { isLoading ?
                            <div className='loader-container'><div className='loader' /></div> :
                            appStore.data.tutorials.map((card) => {
                                return filteredValue(card) && !isVideo(card.href) && isBase(card.tags) && <Card {...card} />
                            }) }
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
    );
})
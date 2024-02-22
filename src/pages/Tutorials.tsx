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
                            appStore.data.tutorials.map((card) => {
                                return filteredValue(card) && isVideo(card.href) && <Card {...card} showVideoPreview={ true } />
                            }) }
                    </TabPanel>
                    <TabPanel value="2">
                        { isLoading ?
                            <div className='loader-container'><div className='loader' /></div> :
                            appStore.data.tutorials.map((card) => {
                                return filteredValue(card) && !isVideo(card.href) && <Card {...card} />
                            }) }
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
    );
})
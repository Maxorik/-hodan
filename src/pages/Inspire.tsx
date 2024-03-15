import React, { useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { VideoIntegration, Card } from "components";
import appStore, { ICardProps } from 'store';

export const InspirePage = observer(() => {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        appStore.getData('inspire').then(() => setLoading(false));
    }, []);

    /** Фильтрованное значение */
    function filteredValue(value: ICardProps) {
        const filter = appStore.searchedValue || '';
        return value.text && value.text.includes(filter) || value.title.includes(filter) || value.tags.includes(filter);
    }

    /** Это видео-курс */
    function isVideo(href: string) {
        return href.indexOf('youtube.com') !== -1;
    }

    /** Это статья */
    function isDiy(tags: string) {
        return tags.indexOf('diy') !== -1;
    }

    /** Переключатель табов */
    const [value, setValue] = useState('sites');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div className='content-container'>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} textColor="secondary" indicatorColor="secondary">
                            <Tab label="Сайты" value="sites" />
                            <Tab label="DIY" value="diy" />
                            <Tab label="Видео" value="videos" />
                        </TabList>
                    </Box>
                    <TabPanel value="diy">
                        { isLoading ?
                            <div className='loader-container'><div className='loader' /></div> :
                            appStore.data.inspire.map((card) => {
                                return filteredValue(card) && !isVideo(card.href) && isDiy(card.tags) && <Card {...card} key={ card.href }/>
                            }) }
                    </TabPanel>
                    <TabPanel value="sites">
                        { isLoading ?
                            <div className='loader-container'><div className='loader' /></div> :
                            appStore.data.inspire.map((card) => {
                                return filteredValue(card) && !isVideo(card.href) && !isDiy(card.tags) && <Card {...card} key={ card.href } />
                            }) }
                    </TabPanel>
                    <TabPanel value="videos">
                        { isLoading ?
                            <div className='loader-container'><div className='loader' /></div> :
                            appStore.data.inspire.map((card) => {
                                return filteredValue(card) && isVideo(card.href) && <Card {...card} showVideoPreview={ true } key={ card.href } />
                            }) }
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
    );
})
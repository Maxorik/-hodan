import React, { useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";
import { ProjectCard } from 'components'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export const ProjectsPage = observer(() => {
    /** Переключатель табов */
    const [value, setValue] = useState('web-app');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div className='content-container'>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} textColor="secondary" indicatorColor="secondary">
                        <Tab label="Веб-приложения" value="web-app" />
                        <Tab label="Боты" value="bots" />
                    </TabList>
                </Box>
                <TabPanel value="web-app">
                    <ProjectCard
                        title = 'Free Pee Tomsk'
                        repoHref = 'https://github.com/Maxorik/freepeetomsk'
                        webHref = 'https://maxorik.github.io/freepeetomsk'
                        description = 'Проект задумывался как карта г. Томска, на которой отмечены бесплатные туалеты, либо места с ними. Есть возможность добавить новое место самому.'
                        photo ={ ['freepee1', 'freepee2', 'freepee3'] }
                    />
                    <ProjectCard
                        title = 'HP Minifigure Collection'
                        repoHref = 'https://github.com/Maxorik/hp_collection'
                        webHref = 'https://maxorik.github.io/hp_collection'
                        description = 'Приложение для ведения коллекции минифигурок.'
                        photo ={ ['hpc (1)', 'hpc (2)', 'hpc (3)'] }
                    />
                    <ProjectCard
                        title = 'Velum Radio'
                        repoHref = 'https://github.com/Maxorik/VelumRadio'
                        webHref = 'https://maxorik.github.io/VelumRadio'
                        description = 'Карманное радио без рекламы.'
                        photo ={ [ 'radio' ] }
                    />
                    <ProjectCard
                        title = 'Velum Songs'
                        repoHref = 'https://github.com/Maxorik/velum_song'
                        webHref = 'https://maxorik.github.io/velum_song'
                        description = 'Библиотека песен с аккордами с возможностью добавления.'
                        photo ={ [ 'song1', 'song2', 'song3' ] }
                    />
                </TabPanel>
                <TabPanel value="bots">
                    <ProjectCard
                        title = 'Store Bot Kit'
                        repoHref = 'https://github.com/Maxorik/bot-kit'
                        description = 'Телеграм-бот, позволяющий развернуть интернет-магазин. Работает с БД sqlite3. Позволяет оформлять заказы, отслеживать остатки на складе, просмотр корзины, добавление адреса доставки.'
                        photo ={ ['store1', 'store2'] }
                    />
                    <ProjectCard
                        title = 'Get VK Bot'
                        repoHref = 'https://github.com/Maxorik/vk_get_bot'
                        description = 'Простой бот, который постит с выбранным интервалом посты из выбранной вк-группы в телеграм-канал.'
                    />
                </TabPanel>
            </TabContext>
        </div>
    );
})
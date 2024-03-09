import React, { useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";
import { ProjectCard } from 'components'

export const ProjectsPage = observer(() => {

    return (
        <div className='content-container'>
            {/*<ProjectCard*/}
            {/*    title = ''*/}
            {/*    repoHref = ''*/}
            {/*    webHref = ''*/}
            {/*    description = ''*/}
            {/*    photo ={ [  ] }*/}
            {/*/>*/}
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
        </div>
    );
})
import React, { useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";
import { ProjectCard } from 'components'

export const ProjectsPage = observer(() => {

    return (
        <div className='content-container'>
            <ProjectCard
                title = 'Free Pee Tomsk'
                repoHref = 'https://github.com/Maxorik/freepeetomsk'
                webHref = 'https://maxorik.github.io/freepeetomsk'
                description = 'Проект задумывался как карта г. Томска, на которой отмечены бесплатные туалеты, либо места с ними. Есть возможность добавить новое место самому.'
                photo ={ ['freepee1', 'freepee2', 'freepee3'] }
            />
        </div>
    );
})
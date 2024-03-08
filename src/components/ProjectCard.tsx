/**
 * Элемент карточки проекта
 */

import React from 'react';
import { observer } from "mobx-react-lite";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface CardProps {
    title: string,
    repoHref: string,
    webHref?: string,
    description: string,
    photo?: string[]
}

export const ProjectCard = observer(({ title, repoHref, webHref, description, photo }: CardProps) => {
    const hrefParser = (href: string) => {
        return href.split('//')[1] || href;
    }

    return (
        <div className='content-container'>
            <div className='card-container project-container'>
                <p className='card-title'> { title } </p>
                <p className='card-text'> Репозиторий: <a className='card-title' target='_blank' href={repoHref}>{ hrefParser(repoHref) }</a></p>
                { webHref && <p className='card-text'> Веб: <a className='card-title' target='_blank' href={ webHref }>{ hrefParser(repoHref) }</a></p> }
                <p className='card-text mb-20'> { description } </p>
                { photo && <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        Показать фотографии приложения
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='project-gallery-container'>
                            { photo.map(image =>
                                <img src={`./assets/projects/${image}.png`} key={ image } />
                            ) }
                        </div>
                    </AccordionDetails>
                </Accordion> }
            </div>
        </div>
    );
})
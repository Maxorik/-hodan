import React, { useState } from 'react';
import { observer } from "mobx-react-lite";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { IconButton, Modal } from '@mui/material';
import { ResourcePage, RadioPage, TutorialsPage, MainPage, ProjectsPage } from 'pages'
import appStore, { isMobile } from 'store'
import { SearchWidget, AddForm } from 'components';

export const MainContent = observer(() => {
    const pageWithSearch = ['resources', 'tutorials'];
    const [showModal, setShowModal] = useState(false);

    const eventModal = (state: boolean) => {
        setShowModal(state);
    }

    return (
        <div className="main-content-container">
            <div className='header-container fixed-main'>
                { isMobile && <div className='mobile-logo-title' onClick={ () => appStore.setActivePage('main') }>
                    <img src='../assets/icon.png' />
                </div> }
                { pageWithSearch.includes(appStore.activePage) && <SearchWidget /> }
                { isMobile && appStore.isAdmin && pageWithSearch.includes(appStore.activePage) && <IconButton
                    color="success"
                    size="large"
                    aria-label="directions"
                    onClick = { () => eventModal(true) }
                >
                    <AddOutlinedIcon fontSize="inherit" />
                </IconButton> }
            </div>
            <div className='middle-content-container'>
                { appStore.activePage === 'main' && <MainPage/> }
                { appStore.activePage === 'resources' && <ResourcePage/> }
                { appStore.activePage === 'radio' && <RadioPage /> }
                { appStore.activePage === 'tutorials' && <TutorialsPage /> }
                { appStore.activePage === 'projects' && <ProjectsPage /> }
            </div>
            { showModal && <Modal
                open={ showModal }
                onClose={() => setShowModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className='modal-window'>
                    <AddForm />
                </div>
            </Modal> }
        </div>
    );
})
import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { IconButton, Modal } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import themeOptions from './styles/mui-theme'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { ResourcePage, RadioPage, TutorialsPage, MainPage, ProjectsPage, InspirePage } from 'pages'
import { SearchWidget, AddForm, Footer } from "components";
import appStore, { isMobile } from './store'
import './styles/main.scss'
import './styles/phone.scss'


const App = observer(() => {
    const pageWithSearch = ['resources', 'tutorials', 'inspire'];   // страницы, на которых есть поиск по записям
    const menuItemList = [{
        label: 'Сервисы',
        link: 'resources'
    }, {
        label: 'Туториалы',
        link: 'tutorials'
    }, {
        label: 'Радио',
        link: 'radio'
    }, {
        label: 'Проекты',
        link: 'projects'
    }, {
        label: 'Разное',
        link: 'inspire'
    }]
    const [showModal, setShowModal] = useState(false);
    const eventModal = (state: boolean) => { setShowModal(state) }

    return (
        <ThemeProvider theme={ themeOptions }>
            <div className='app-container'>

                { /** Левый боковой контейнер */ }
                { !isMobile && <div className="left-side-bar-container">
                    <div className='header-container'>
                        <div className='logo-title' onClick={ () => appStore.setActivePage('main') }>
                            <img src='../assets/icon.png' />
                            <p>$hodan</p>
                        </div>
                    </div>
                    <div> {
                        menuItemList.map(menuItem => <div className='menu-item'>
                            <div className="hovered-button" onClick={ () => appStore.setActivePage(menuItem.link) }>
                                <span className="actual-text">&nbsp;&nbsp;&nbsp;{menuItem.label}</span>
                                <span aria-hidden="true" className="hover-text">&nbsp;&nbsp;&nbsp;{menuItem.label}</span>
                            </div>
                        </div>)
                    }
                    </div>
                </div> }

                { /** Основной контент */ }
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
                        { appStore.activePage === 'inspire' && <InspirePage /> }
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

                { /** Правый боковой контейнер */ }
                { !isMobile && <div className="right-side-bar-container">
                    <div className='header-container'></div>
                    <AddForm />
                </div> }
                <Footer />
            </div>
        </ThemeProvider>
    );
})

export default App;
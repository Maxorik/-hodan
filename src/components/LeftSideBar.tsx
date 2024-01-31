import React from 'react';
import { observer } from "mobx-react-lite";
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import appStore from '../store/app'

export const LeftSideBar = observer(() => {

    return (
        <div className="left-side-bar-container">
            <div className='header-container'>
                <div className='header22'>123</div>
            </div>
            <div className='content-container'>
                <TreeView
                    aria-label="file system navigator"
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    defaultExpanded={['projects-parent']}
                >
                    <TreeItem nodeId="projects-parent" label="Мои проекты" onClick={ () => appStore.setActivePage('projects') }>
                        <TreeItem nodeId="projects-app-parent" label="Приложения">
                            <TreeItem nodeId="projects-velum-radio" label="VelumRadio" />
                            <TreeItem nodeId="projects-freepeetomsk" label="FreePeeTomsk" />
                            <TreeItem nodeId="projects-hpc" label="Harry Potter collection" />
                        </TreeItem>
                        <TreeItem nodeId="projects-bots-parent" label="Боты">
                            <TreeItem nodeId="projects-vk-get-bot" label="VK get_bot" />
                            <TreeItem nodeId="projects-bot-kit" label="Custom Shop" />
                        </TreeItem>
                    </TreeItem>
                    <TreeItem nodeId="service-parent" label="Полезное" onClick={ () => appStore.setActivePage('services') } />
                </TreeView>
            </div>
        </div>
    );
})
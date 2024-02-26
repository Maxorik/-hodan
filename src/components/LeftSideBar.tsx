import React from 'react';
import { observer } from "mobx-react-lite";
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HdrStrongOutlinedIcon from '@mui/icons-material/HdrStrongOutlined';
import appStore from 'store';
import { Box } from '@mui/material';

export const LeftSideBar = observer(() => {
    return (
        <div className="left-side-bar-container">
            <div className='header-container'>
                <div className='logo-title' onClick={ () => appStore.setActivePage('main') }>
                    <img src='../assets/icon.png' />
                    <p>$hodan</p>
                </div>
            </div>
            <div className='content-container'>
                <TreeView
                    aria-label="file system navigator"
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    defaultExpanded={['projects-parent']}
                >
                    <TreeItem nodeId="service-parent" label="Ресурсы" onClick={ () => appStore.setActivePage('resources') } />
                    <TreeItem nodeId="tutorials-parent" label="Туториалы" onClick={ () => appStore.setActivePage('tutorials') } />
                    <TreeItem nodeId="radio-parent" label="Радио" onClick={ () => appStore.setActivePage('radio') } />
                </TreeView>
            </div>
        </div>
    );
});